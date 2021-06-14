import express, {Application} from 'express'
import mongoose from 'mongoose'

class App {
    public app: Application
    public port: number
    constructor({port, middlewares, controllers}: {port: number, middlewares: any, controllers: any}){
        this.app = express()
        this.port = port
        this.setMongooseConnection()
        this.setMiddlewares(middlewares)
        this.setControllers(controllers)
    }

    public listen(){
        this.app.listen(this.port, () => console.log(`Listening at port ${this.port}`))
    }

    private setMiddlewares(middlewares: {forEach: (mid: (middleware: any) => void) => void}){
        middlewares.forEach(middleware => {
            this.app.use(middleware)
        })
    }

    private setControllers(controllers: {forEach: (con: (con: any) => void) => void}){
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    private setMongooseConnection(){
        mongoose.connect('mongodb://localhost:27017/type', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
}

export default App
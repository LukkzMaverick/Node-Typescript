import express, {Application} from 'express'

class App {
    public app: Application
    public port: number
    constructor({port, middlewares, controllers}: {port: number, middlewares: any, controllers: any}){
        this.app = express()
        this.port = port
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
}

export default App
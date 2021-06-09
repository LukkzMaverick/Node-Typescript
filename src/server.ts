import App from './app'
import * as bodyParser from 'body-parser'
import morgan from 'morgan'
import HomeController from './controllers/HomeController';
import myMiddleware from './middleware/log.middleware';

const app = new App({
    port: 3000,
    middlewares: [
        morgan('dev'),
        bodyParser.urlencoded({extended: false}),
        bodyParser.json(),
        myMiddleware
    ],
    controllers: [
        new HomeController()
    ]
})

app.listen()
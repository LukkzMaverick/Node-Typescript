import { Request, Response } from 'express'


const myMiddleware = (req: Request, res: Response, next: any) => {
    console.log("My Middleware Workink With TS")
    next()
}
export default myMiddleware
import * as express from 'express'
import TaskService from '../services/task.service'
class TaskController{
    public router = express.Router()
    public path = '/tasks'
    private taskService: TaskService

    constructor(){
        this.taskService = new TaskService()
        this.setupRoutes()
    }
    public setupRoutes(){
        this.router.get(`${this.path}`, this.taskService.findAll)
        this.router.post(`${this.path}`, this.taskService.create)
        this.router.get(`${this.path}/:id`, this.taskService.findOne)
    }
}

export default TaskController


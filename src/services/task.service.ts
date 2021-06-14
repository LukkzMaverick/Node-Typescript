import {Request, Response} from 'express'
import TaskModel, { ITask } from '../models/task.model'

export default class TaskService {
    public async findAll(req: Request, res: Response){
        const list: Array<ITask> = await TaskModel.find({})
        return res.json({list})
    }

    public async findOne(req: Request, res: Response){
        const task = await TaskModel.findById(req.params.id)
        return res.json({task})
    }

    public async create(req: Request, res: Response){
        const iTask = req.body as ITask
        console.log(iTask)
        const task = await TaskModel.create(iTask)
        return res.json({task})
    }
}
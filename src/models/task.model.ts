import mongoose, {Schema, Document} from 'mongoose'

export interface ITask extends Document {
    title: String
}

const TaskSchema: Schema = new Schema({
    title: String
})

export default mongoose.model<ITask>('Task', TaskSchema)
import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    completed: {
        type:Boolean,
    }
}, {
    timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo
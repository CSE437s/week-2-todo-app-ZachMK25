import Todo from '../models/todoModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getTodos = asyncHandler(async(req, res) => {
    console.log("getting todos")
    const todos = await Todo.find({})
    res.json(todos)
})

import Todo from '../models/todoModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getTodos = asyncHandler(async(req, res) => {
    console.log("getting todos")
    const todos = await Todo.find({})
    res.json(todos)
})

export const addTodo = asyncHandler(async(req, res) => {
    console.log("adding todo")
    const jsonData = JSON.parse(req.body.data);

    if (!jsonData.name){
        return res.status(400).json({ message: "No name given" });
    }
    else if (!jsonData.completed){
        return res.status(400).json({ message: "No completion given" });
    }

    console.log("creating new task...");
    const newTodo = new Todo({
        name: jsonData.name,
        completed: jsonData.completed,
        
    });
    // console.log(newUser);
    console.log("saving new task to database...");
    newTodo.save()
        .then(() => {
            return res.status(200).json({ msg: newTodo });
        })
        .catch((err) => {
            console.log(err);
            return res.status(418).json({
                message: "Something went wrong in your new todo",
            });
        });

})
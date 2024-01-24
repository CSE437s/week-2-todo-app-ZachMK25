import connectDB from './backend/config/db.js'
import todoRoutes from './backend/routes/todoRoute.js'
import express from 'express'
import dotenv  from 'dotenv'

//connect database
connectDB()

//dotenv config
dotenv.config()

const app = express()

//Creating API for user
app.use('/api/todo', todoRoutes)

const PORT = process.env.PORT || 16969

//Express js listen method to run project on http://localhost:16969
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))

import { getTodos } from "../controllers/todoController.js";
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getTodos)


export default router
import express from 'express';
import { createTask, getTasks, deleteTask } from '../Controllers/taskController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect); // All task routes require authentication

router.post('/', createTask);
router.get('/', getTasks);
router.delete('/:id', deleteTask);

export default router;
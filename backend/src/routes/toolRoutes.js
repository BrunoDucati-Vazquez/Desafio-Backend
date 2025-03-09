import express from 'express';
import toolController from '../controllers/toolController.js';
const router = express.Router();

// List all clients
router.get('/', toolController.listTools);

router.post('/', toolController.createTool);

router.delete('/:id', toolController.deleteTool);

export default router;
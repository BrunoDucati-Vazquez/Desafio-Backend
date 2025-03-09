import express from 'express';
import toolController from '../controllers/toolController.js';
const router = express.Router();

// List all clients
router.get('/', toolController.listTools);

router.post('/', toolController.createTool);

export default router;
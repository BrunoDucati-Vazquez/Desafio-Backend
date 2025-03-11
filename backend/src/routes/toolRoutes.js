import express from 'express';
import toolController from '../controllers/toolController.js';
import verifyToken from '../middlewares/authMiddeware.js';
import authController from '../controllers/authController.js';

const router = express.Router();

// List all clients
router.get('/', toolController.listTools);

router.post('/', toolController.createTool);

router.delete('/:id', verifyToken, toolController.deleteTool);

// Define the POST route to generate the token
router.post('/login', authController.generateToken); // Directly call static method

export default router;
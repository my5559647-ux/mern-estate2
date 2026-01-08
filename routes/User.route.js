import express from 'express';
import { updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// User ko update karne ka route
router.post('/update/:id', verifyToken, updateUser);

export default router;
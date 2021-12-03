import express from 'express';
import jwtTokenMiddleware from '../middleware/authMiddleware.js';
import { dashboard, identify, updateGoal, getProfile } from '../controller/mainController.js';
const router = express.Router();

router.get('/', [jwtTokenMiddleware], dashboard);
router.post('/identify', [jwtTokenMiddleware], identify);
router.post('/goal', [jwtTokenMiddleware], updateGoal);
router.get('/profile', [jwtTokenMiddleware], getProfile);

export default router;
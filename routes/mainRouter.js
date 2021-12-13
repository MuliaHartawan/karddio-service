import express from 'express';
import jwtTokenMiddleware from '../middleware/authMiddleware.js';
import {
    dashboard,
    identify,
    updateGoal,
    getProfile,
    gameComplete,
    gamePlaying,
    workout,
    listGoal
} from '../controller/mainController.js';
const router = express.Router();

router.get('/', [jwtTokenMiddleware], dashboard);
router.post('/identify', [jwtTokenMiddleware], identify);
router.put('/goal', [jwtTokenMiddleware], updateGoal);
router.get('/profile', [jwtTokenMiddleware], getProfile);
router.get('/start-workout', [jwtTokenMiddleware], gamePlaying);
router.post('/start-workout', [jwtTokenMiddleware], gameComplete);
router.get('/list-goal', [jwtTokenMiddleware], listGoal);

export default router;
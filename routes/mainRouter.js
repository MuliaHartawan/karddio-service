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
import { body } from 'express-validator';
const router = express.Router();

router.get('/', [jwtTokenMiddleware], dashboard);
router.post('/identify',
    body('age')
        .notEmpty()
        .withMessage('Age is required'),
    body('sex')
        .notEmpty()
        .withMessage('Sex is required'),
    body('height')
        .notEmpty()
        .withMessage('Height is required'),
    body('weight')
        .notEmpty()
        .withMessage('Weight is required'),
    body('goal_id')
        .notEmpty()
        .withMessage('Goal is required'),
    [jwtTokenMiddleware],
    identify);
router.put('/goal', [jwtTokenMiddleware], updateGoal);
router.get('/profile', [jwtTokenMiddleware], getProfile);
router.get('/start-workout', [jwtTokenMiddleware], gamePlaying);
router.post('/start-workout', [jwtTokenMiddleware], gameComplete);
router.get('/list-goal', [jwtTokenMiddleware], listGoal);

export default router;
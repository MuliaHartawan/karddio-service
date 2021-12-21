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
    listGoal,
    finalReport
} from '../controllers/mainController.js';
import {
    body
} from 'express-validator';
const router = express.Router();

router.get('/', [jwtTokenMiddleware], dashboard);
router.post('/identify',
    body('age')
    .notEmpty()
    .withMessage('Age is required')
    .isInt()
    .withMessage('Age must be a number'),
    body('sex')
    .notEmpty()
    .withMessage('Sex is required'),
    body('height')
    .notEmpty()
    .withMessage('Height is required')
    .isInt()
    .withMessage('Height must be a number'),
    body('weight')
    .notEmpty()
    .withMessage('Weight is required')
    .isInt()
    .withMessage('Weight must be a number'),
    body('goalId')
    .notEmpty()
    .withMessage('Goal is required'),
    [jwtTokenMiddleware],
    identify);
router.put('/goal', [jwtTokenMiddleware], updateGoal);
router.get('/profile', [jwtTokenMiddleware], getProfile);
router.get('/start-workout', [jwtTokenMiddleware], gamePlaying);
router.post('/start-workout', [jwtTokenMiddleware], gameComplete);
router.get('/final-report', [jwtTokenMiddleware], finalReport);
router.get('/list-goal', [jwtTokenMiddleware], listGoal);
router.get('/list-workout', [jwtTokenMiddleware], workout);

export default router;
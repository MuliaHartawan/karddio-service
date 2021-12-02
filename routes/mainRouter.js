import express from 'express';
import jwtTokenMiddleware from '../middleware/authMiddleware.js';
import { dashboard, identify, updateGoal } from '../controller/mainController.js';
const router = express.Router();

router.get('/', [jwtTokenMiddleware], (req, res) => {
    return res.send({
        success: true,
        message: "Selamat Anda Aplikasi Karddio"
    });
});

router.get('/identify', [jwtTokenMiddleware], identify)

export default router;
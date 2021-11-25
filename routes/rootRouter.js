import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({
        success: true,
        message: "Selamat Anda Aplikasi Karddio"
    });
});

export default router;
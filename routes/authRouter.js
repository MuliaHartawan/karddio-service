import express from 'express';
import { login, register } from '../controller/authController.js';
import { body } from 'express-validator';

const router = express.Router();

router.post('/register',
    body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 5 })
        .withMessage('name must be at least 5 chars long'),
    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email field must have format email'),
    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('name must be at least 8 chars long'),
    body('confirm_password')
        .notEmpty()
        .withMessage('Confirm password is required')
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Password Confirmation field must have the same value as the password field'),
    register
);

router.post('/login',
    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email field must have format email'),
    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('name must be at least 8 chars long'),
    login
);


export default router;
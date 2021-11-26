import express, { response } from 'express';
import asyncHandler from 'express-async-handler';
import db from '../config/database.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import md5 from 'md5';
import { validationResult } from 'express-validator'
import { reset } from 'nodemon';

dotenv.config();

const register = asyncHandler(async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            success: false,
            code: 400,
            message: errors.array().map(({ msg }) => msg),
            body: '',
        });
    }

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.confirm_password;

    const checkUser = await db.query(`select * from users where email = ${email}`);

    if (checkUser.length > 0) {
        res.status(403);
        throw new Error('Email Is Already Registered');
    }
    name.trim();
    email.trim();
    let verifToken = md5(name) + md5(email);
    password = bcrypt.hashSync(password.trim(), 10);

    const registered = await db.query(`insert into users (name, email, password, verif_token) values(${name}, ${email}, ${password}, ${verifToken})`);

    return res.json({
        success: true,
        code: 200,
        message: 'User Has Been Registered Succesfully, Please To Login',
        body: {
            name: `${name}`,
            email: `${email}`,
        },
    });
});
const login = asyncHandler(async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    const result = await db.query(`select * from users where email=${email}`);
    if (result.length > 0) {
        let user = result[0];

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            res.status(404);
            throw new Error('Email or password is invalid');
        }

        delete user.password;

    }
});

export { register, login };
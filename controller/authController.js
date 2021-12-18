import asyncHandler from 'express-async-handler';
import db from '../config/database.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import md5 from 'md5';
import { body, validationResult } from 'express-validator'
import model from '../model/index.js';

dotenv.config();


const register = asyncHandler(async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({
                success: false,
                code: 400,
                message: errors.array().map(({ msg }) => msg),
                body: '',
            });
        }

        let { name, email, password, confirm_password } = req.body;
        await model.user.findAll({
            where: {
                email: email
            }
        })
            .then(isEmailExist => {
                if (isEmailExist.length > 0) {
                    return res.status(403).send({
                        success: false,
                        code: 403,
                        message: 'Email Is Already Registered',
                        body: '',
                    });
                }
            })
        const verif_token = md5(name) + md5(email);
        password = bcrypt.hashSync(password.trim(), 10);

        console.log(verif_token, email);
        await model.user.create({
            name,
            email,
            password,
            verif_token,
            status: 1
        })
            .then(user => {
                return res.status(200).send({
                    success: true,
                    code: 200,
                    message: 'User Has Been Registered Succesfully, Please To Login',
                    body: {
                        "nama": user.name,
                        "email": user.email
                    },
                })
            })

    } catch (error) {
        return res.status(500).send({
            success: false,
            code: 500,
            message: error.message,
        });
    }

});

const login = asyncHandler(async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({
                success: false,
                code: 400,
                message: errors.array().map(({ msg }) => msg),
                body: '',
            });
        }
        
    const { email, password } = req.body;

    await model.user.findAll({
        attributes: ['id', 'email', 'name', 'password'],
        where: {
            email
        }
    })
        .then(result => {
            // console.log(result[0]);
            let user = result[0];
            // console.log(user);
            bcrypt.compare(password, user.password, (err, data) => {
                if (err) {
                    res.send({
                        success: false,
                        code: 404,
                        message: err,
                        body: ''
                    });
                }
                if (data) {
                    console.log(user.email);
                    delete user.dataValues.password;

                    const token = jwt.sign({
                        "id": user.id,
                        "email": user.email,
                        "name": user.name
                    }, process.env.JWT_SECRET);

                    return res.json({
                        success: true,
                        code: 200,
                        message: 'login success',
                        data: { user, access_token: token }
                    });
                } else {
                    res.send({
                        success: false,
                        code: 404,
                        message: 'Email or password is invalid',
                        body: ''
                    });
                }
            });
        });
    }
    catch (error){
        return res.status(500).send({
            success: false,
            code: 500,
            message: error.message,
        });
    }
});


export { register, login };
import express from "express";

const router = express.Router();

import {authUser} from '../controllers/userControllers.js';

import {protect} from '../middleware/authiMiddleware.js';

//router.router('/').post(registeruser)

router.route('/login').post(authUser)

//router.rout('/profile').get(protect,getUserProfile)

export  default router
import jwt from'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';

const protect = asyncHandler( async (req, res, next)=>{
    let token

    if (req.header.authorization && req.header.authorization.startWith('Bearer ')) {
        try{
             token =req.header.authorization.split(' ')[1]
        }catch(err){

        }
    }
})
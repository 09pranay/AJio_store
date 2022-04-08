import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

//@desc Audit user & get the token                     
//@rout POST /api/users/login
//access Public

const authUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body

    const user = await User.findOne({ email})

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(404)
        throw new Error('Invalide email or password')
    }    

})
//@desc Register user                   
//@rout POST /api/users/login
//access Public

 const registerUser = asyncHandler( async (req, res) => {
    const {name, email, password} = req.body

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name, email, password
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }else {
        res.status(400)
        throw new Error('Invalide user data')
    }
})

//@desc Profile routes
//@route GET /api/User/Profile
//@access private


const  getUserProfile = asyncHandler( async (req, res) => {
    const user = awaitfindOne(req.user._id)

    if (user) {
      res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
      })        
    }else {
        res.status(404)
        throw new Error('User not found')
    }
})






export {authUser,registerUser,getUserProfile}
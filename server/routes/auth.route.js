import express from 'express'
import { currentUser, login, registerStudent } from '../controller/auth.controller.js'

const router = express.Router()

router.post('/register', registerStudent)

router.post('/login', login)

export const verifyUser = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(authHeader){
        jwt.verify(authHeader, process.env.JWT_SECRET, (err) => {
            if (err) return res.status(403)
                next()
        })
    } else {
        return res.status(401)
    }
}

router.get('/currentUser/:id', verifyUser, currentUser)

export {router as authRoute}
import { User } from '../models/authModel.ts'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

const register = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { body: { username, email, password } } = req

    if (!email || !password) {
      return res.json({ error: 'invalid data' })
    }

    const foundUser = await User.findOne({ email })
    if (foundUser) {
      return res.status(409).json({ error: 'User already exits in DB' })
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const createdUser = await User.create({ username, email, password: hashPassword })
    const publicDataUser = { username: createdUser.username, email: createdUser.email }

    res.status(201).json(publicDataUser)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

const login = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { body: {email, password }} = req

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Invalid data' })
    }

    const foundUser = await User.findOne({ email })

    if (!foundUser) {
      return res.status(401).json({ success: false, error: 'Unauthorized' })
    }

    const validatePass = await bcrypt.compare(password, foundUser.password)

    if (!validatePass) {
      return res.status(401).json({ success: false, error: 'wrong password' })
    }

    const payload = {
      _id: foundUser._id,
      username: foundUser.username,
      email: foundUser.email
    }

    const token = jwt.sign(payload, 'SuperSecurePass', { expiresIn: '1h' })

    res.json({ token })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

export { register, login }

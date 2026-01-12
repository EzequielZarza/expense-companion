import { User } from '../models/authModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const register = async (req, res) => {
  try {
    const { body } = req
    const { username, email, password } = body

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

export { register }
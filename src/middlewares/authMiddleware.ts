import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

const authMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {
  try {
    const { headers: { authorization }} = req

    if (!authorization) {
      return res.status(401).json({
        success: false,
        error: 'You must include the token within the request'
      })
    }

    if (!authorization.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        error: 'Invalid format'
      })
    }

    const token = authorization.split(' ')[1]
    const secret = 'SuperSecurePass'
    const decoded = jwt.verify(token, secret)
    // console.log(decoded)
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: 'Invalid or expired token'
    })
  }
}

export { authMiddleware }

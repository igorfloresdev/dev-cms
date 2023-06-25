import { Prisma } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'

function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return res.status(500).json({ code: error.code, message: error.message })
  }

  if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    return res.status(500).json({ message: error.message })
  }

  if (error instanceof Prisma.PrismaClientRustPanicError) {
    return res.status(500).json({ message: error.message })
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    return res.status(500).json({ code: error.errorCode, message: error.message })
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return res.status(500).json({ message: error.message })
  }

  next()
}

export default errorHandler

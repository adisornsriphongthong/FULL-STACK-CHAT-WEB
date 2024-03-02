import express, { Request, Response, NextFunction } from 'express'

export const authorization = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers;
        console.log(token, 'From Authorization')
        next()
    } catch (error) {
        console.log(error)
    }
}  
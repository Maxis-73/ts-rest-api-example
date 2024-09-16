import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handler"
import { JwtPayload } from "jsonwebtoken"

interface RequestExt extends Request {
    user?: string | JwtPayload
}

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const userJWT = req.headers.authorization || ""
        const jwt = userJWT.split(" ").pop()
        const isUser = verifyToken(`${jwt}`)
        if(!isUser){
            res.status(401).send("NO_ESTAS_AUTORIZADO")
        } else {
            req.user = isUser
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(400).send('SESION_NO_VALIDA')
    }
}

export {checkJWT}
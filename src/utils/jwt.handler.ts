import "dotenv/config"
import { sign, verify } from "jsonwebtoken"

const JWT_SECRET = <string>process.env.JTW_SECRET

const generateToken = (id: string) => {
    const jwt = sign({id}, JWT_SECRET)
    return jwt
}

const verifyToken = (jwt: string) => {
    const isOK = verify(jwt, JWT_SECRET)
    return isOK
}

export {generateToken, verifyToken}
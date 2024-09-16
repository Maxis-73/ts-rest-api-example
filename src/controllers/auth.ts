import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth.service"

const registerController = async ({body}: Request, res: Response) => {
    const response = await registerNewUser(body)
    res.send(response)
}

const loginController = async ({body}: Request, res: Response) => {
    const { email, password } = body
    const response = await loginUser({email, password})
    if(response === 'INCORRECT_PASSWORD') {
        res.status(403)
        res.send(response)
    } else {
        res.send(response)
    }
}

export {registerController, loginController}
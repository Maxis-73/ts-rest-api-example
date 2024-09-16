import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"
import { generateToken } from "../utils/jwt.handler"
import { encryptPassword, verifyPassword } from "../utils/password.handler"

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({email})
    if(checkIs) return "ALREADY_USER"
    const passHash = await encryptPassword(password)
    const registerUser = await UserModel.create({email, password: passHash, name})
    return registerUser
}

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({email})
    if(!checkIs) return "NOT_FOUND_USER"
    const passwordHash = checkIs.password //Password encriptado
    const isCorrect = await verifyPassword(password, passwordHash)
    if(!isCorrect) return "INCORRECT_PASSWORD"
    const token = generateToken(checkIs.email)
    const data = {
        token,
        user: checkIs
    }
    return data
}

export {registerNewUser, loginUser}
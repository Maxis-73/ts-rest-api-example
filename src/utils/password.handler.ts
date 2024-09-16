import { hash, compare } from "bcryptjs"

const encryptPassword = async (pass:string) => {
    const passwordHash = await hash(pass, 8)
    return passwordHash
}

const verifyPassword = async (pass:string, passHash:string) => {
    const isCorrect = await compare(pass, passHash)
    return isCorrect
}

export {encryptPassword, verifyPassword}
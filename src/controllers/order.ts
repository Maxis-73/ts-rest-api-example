import { JwtPayload } from "jsonwebtoken"
import { handleHttp } from "../utils/error.handler"
import { Request, Response } from "express"

interface RequestExt extends Request {
    user?: string | JwtPayload
}

const getAllOrders = async (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Esta es una ruta protegida, solo personal autorizado",
            user: req.user
        })
    } catch (error) {
        handleHttp(res, "ERROR_GET_ORDERS")
    }
}

export {getAllOrders}
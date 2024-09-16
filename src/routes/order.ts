import { Router } from "express"
import { getAllOrders } from "../controllers/order"
import { checkJWT } from "../middlewares/session"

const router = Router()

router.get('/', checkJWT, getAllOrders)

export {router}
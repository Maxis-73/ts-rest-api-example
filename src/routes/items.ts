import { Router } from "express"
import { createItem, deleteItem, getItem, getItems, updateItem } from "../controllers/item"
import { logMiddleware } from "../middlewares/log"

const router = Router()

router.get('/', getItems)
router.post('/', createItem)
router.get('/:id', logMiddleware ,getItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export {router}
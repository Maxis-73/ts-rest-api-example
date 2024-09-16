import { getAllCars, getCar, insertCar, deleteCar, updateCar } from "../services/car.servive"
import { handleHttp } from "../utils/error.handler"
import { Request, Response } from "express"

const getItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const response = await getCar(id)
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEM")
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getAllCars()
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMS")
    }
}

const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await updateCar(id, body)
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_UPDATE_ITEM")
    }
}

const createItem = async (req: Request, res: Response) => {
    try {
        const {body} = req
        const response = await insertCar(body)
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_CREATE_ITEM", error)
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const response = await deleteCar(id)
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_ITEM")
    }
}

export {getItem, getItems, createItem, deleteItem, updateItem}
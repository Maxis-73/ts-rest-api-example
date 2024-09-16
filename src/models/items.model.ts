import { Schema, Types, model, Model } from "mongoose"
import { Car } from "../interfaces/car.interface"

const itemSchema = new Schema<Car>(
    {
        color: {type: String},
        gas: {type: String, enum:['Gasoline', 'Electric', 'Diesel']},
        year: {type: Number},
        description: {type: String},
        price: {type: Number}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ItemModel = model('items', itemSchema)
export default ItemModel
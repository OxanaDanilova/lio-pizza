import { Schema, model } from "mongoose"

const pizzaSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array
    },
    info: {
        type: String
    },

    price: {
        big: {
            type: Number
        },
        medium: {
            type: Number
        },
        small: {
            type: Number,
            required: true,
            default: 0 
        } 
    },
})

const Pizza = model("Pizza", pizzaSchema)

export default Pizza
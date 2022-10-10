import express from "express";
import PizzaModel from "../models/pizza-models.js"


/** 
 * @param {express.Response} res
 */

export const getAllPizza = async (_, res) => {
    try {
        const allPizza = await PizzaModel.find({});
        res.send(allPizza)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


/** 
 * @param {express.Response} res
 * @param {express.Request} req
 */
export const getPizzaById = async (req, res) => {
    try {
        const pizza = await PizzaModel.findById(req.params.id)
        res.send(pizza)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
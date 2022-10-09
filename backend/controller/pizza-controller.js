import express from "express";
import PizzaModel from "../models/pizza-models.js"


export const getAllPizza = async (_, res) => {
    try {
        const allPizza = await PizzaModel.find({});
        res.send(allPizza)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
import { Router } from "express";
import { getAllPizza, getPizzaById } from "../controller/pizza-controller.js"


const router = new Router();

router.route("/")
  .get(getAllPizza)


router.route("/:id")
  .get(getPizzaById)

export default router
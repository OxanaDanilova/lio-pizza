import { Router } from "express";
import { getAllPizza } from "../controller/pizza-controller"


const router = new Router();

router.route("/")
  .get(getAllPizza())
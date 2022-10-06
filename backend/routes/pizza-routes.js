import express from "express";
import { getPizza } from "../controller/person-controller.js";

const router = express.Router();

// könnte man durchaus schöner strukturieren mit route :) 
router
  .get("/pizza", getPizza)

// alternativ
// router.route("/person")
//   .post(postPerson);



export default router;
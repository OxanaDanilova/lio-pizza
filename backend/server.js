import "dotenv/config";
import express from "express";
import cors from "cors";
import connectMongoose from "./util/connectMongoose.js";
import pizzaRouter from "./routes/pizza-routes.js"

// import Pizza from "./models/pizza-models.js"

const port = process.env.PORT || 5000;
const app = express();


app.use(cors())
app.use(express.json());


// app.get("/", (_, res)=> {
//   res.send("Hi!")
// })

// app.get("/pizza", async (req, res) => {
//   const pizza = await Pizza.find()
//   res.json(pizza)
// })

app.use("/pizza", pizzaRouter);

if (await connectMongoose()) {
  app.listen(port, () => {
    console.log("Listening to port ", port);
  })
}

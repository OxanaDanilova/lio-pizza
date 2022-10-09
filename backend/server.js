import "dotenv/config";
import express from "express";
import connectMongoose from "./util/connectMongoose.js";
import Pizza from "./models/pizza-models.js"

const app = express();
const port = process.env.PORT || 5000;

app.use( express.json() );
// app.get("/", (_, res)=> {
//   res.send("Hi!")
// })

app.get("/pizza", async (req, res) => {
  const pizza = await Pizza.find()
  res.json(pizza)
})

if(await connectMongoose() ) {
  app.listen(port, ()=> {
    console.log("Listening to port ", port);
  })
}

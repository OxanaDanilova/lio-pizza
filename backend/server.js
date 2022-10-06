import "dotenv/config";
import express from "express";
import connectMongoose from "./util/connectMongoose.js";
import Pizza from "./models/pizza-models.js"

const app = express();
const port = process.env.PORT || 3000;

app.use( express.json() );
// app.get("/", (_, res)=> {
//   res.send("Hi!")
// })

app.get("/pizza", async (req, res) => {
  const theaters = await Pizza.find()
  res.json(theaters)
})

if(await connectMongoose() ) {
  app.listen(port, ()=> {
    console.log("listening to port ", port);
  })
}

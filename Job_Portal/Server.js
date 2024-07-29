import express from "express";
const app = express()
import connectdb from "./config/db.js";
import Router from "./routes/testrouter.js"
import testing from "./controllers/testing.js";
import router from "./routes/authroutes.js";


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectdb()

app.use("/", testing)
app.use("/auth", router)
// connectdb();

app.listen(8080, () => {
    console.log("server running")
})    
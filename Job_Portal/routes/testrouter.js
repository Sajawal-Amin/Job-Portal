import  Express  from "express";
import testing from "../controllers/testing.js";
const Router =Express.Router()
Router.post("/testing",testing)






export default Router;
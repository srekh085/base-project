import { Router } from "express";
import { indexController } from "../controllers";

const route = Router();

route.get("/", indexController);

export default route;

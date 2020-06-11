import { Router } from "express";
import { registerController } from "../controllers";

const route = Router();

route.post("/", registerController);

export default route;

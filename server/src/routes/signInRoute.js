import { Router } from "express";
import { signInController } from "../controllers";

const route = Router();

route.post("/", signInController);

export default route;

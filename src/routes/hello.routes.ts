import { Router } from "express";
import { getHelloController } from "../controllers/hello.controller";

export const helloRouter = Router();

helloRouter.get("/hello", getHelloController);
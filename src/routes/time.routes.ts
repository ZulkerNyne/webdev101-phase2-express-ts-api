import {Router } from "express";
import {getTimeController} from "../controllers/time.controller";

export const timeRouter = Router();
timeRouter.get("/time",getTimeController);
import type {Request, Response} from "express";
import {getTime} from "../services/time.service";

export function getTimeController(_req: Request, res: Response){
    res.status(200).json(getTime());
}
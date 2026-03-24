import type {Request, Response} from "express";
import {makeHello} from "../services/hello.service";

export function getHelloController(req:Request, res: Response){
    const raw = req.query.name;
    //basic validation
    if (typeof raw!="string"||raw.trim().length===0){
        return res.status(400).json({error: "Missing or invalid 'name' query param"});
    }
    res.status(200).json(makeHello(raw.trim()));
}

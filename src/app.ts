import express from "express";

import {router} from "./routes";
import {requestLogger} from "./middleware/requestLogger";
export const app = express();
//parse JSON first(so req.body is available later)
app.use(express.json());
//log requests
app.use(requestLogger);
//routes
app.use(router);
import { Router } from "express";
import { healthRouter } from "./health.routes";

export const router= Router();
router.get("/", (_req, res)=>{
    res.status(200).send("Phase 2 API. Try /health\n");

});

router.use(healthRouter);
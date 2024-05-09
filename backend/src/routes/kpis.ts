import express, { Request, Response } from "express";

import Kpi from "../models/kpi";

const router = express.Router();

router.get("/kpis", async (req: Request, res: Response) => {
  try {
    const kpis = await Kpi.find();
    res.status(200).json(kpis);
  } catch (err) {
    console.error("Error finding kpis", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;

import express from "express";
import { buscarController, deleteController } from "../controllers/controllers";

const router = express.Router();

router.get("/estudiante", buscarController);
//  console.log ("Me encuentro dento de la ruta")
router.delete("/estudiante/:id", deleteController);
// router.patch("/estudiante/:id", deleteController);
// router.post("/estudiante/:id", deleteController);
// router.put("/estudiante/:id", deleteController);

export default router;

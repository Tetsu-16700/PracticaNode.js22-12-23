import express from "express";
import { buscarController, deleteController,createController, editController } from "../controllers/controllers";
// import { printMiddleware } from "../middleware/middleware";

const router = express.Router();
const prefix = "/estudiantes";

router.get(prefix, buscarController);
//  console.log ("Me encuentro dento de la ruta")
router.delete(`${prefix}/:id`, deleteController);
router.post(prefix, createController);

router.patch(`${prefix}/:id/`, editController);


export default router;

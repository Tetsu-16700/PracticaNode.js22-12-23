import { Request, Response } from "express";
import { appConsultas } from "../services/services";

export async function buscarController(req: Request, res: Response) {
  const response = await appConsultas.buscarEstudiante();
  res.status(200).json({
    data: response,
    message: "Hola desde el controlador",
  });
}

export async function deleteController(req: Request, res: Response) {
  const id = req.params.id;
  //   const data = req.body; // recibes la informacion del body
  const response = await appConsultas.eliminarEstudiante(id);
  res.status(200).json(response);
}

export async function createController(req: Request, res: Response) {
  const data = req.body;
  const response = await appConsultas.crearEstudiante(
    data.nombre,
    data.escuela
  );
  res.status(200).json(response);
}

export async function editController(req: Request, res: Response) {
  const id = req.params.id;
  const data = req.body;
  const response = await appConsultas.actualizarEstudiante(
    id,
    data.nombre,
    data.escuela
  );
  res.status(200).json(response);
}

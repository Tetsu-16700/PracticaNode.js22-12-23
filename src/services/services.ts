import { pool } from "../config/database";

class AppConsultas {
  async buscarEstudiante() {
    const query = "select*from estudiante";
    const response = await pool.query(query);
    // console.log(response);
    return response.rows;
  }
  async eliminarEstudiante(id: any) {
    const query = "delete from estudiante where id = " + id;
    await pool.query(query);
    return {
      message: "Eliminacion correcta",
    };
  }
//   async createEstudiante(nombre: any, escuela: any) {
//     // const query = "delete from estudiante where id ="+ id;
//     const query = "insert into estudiante(nombre, escuela) values(' ',' ')" + nombre, escuela;
//     await pool.query(query);
//     return {
//       message: "Se creo correctamente",
//     };
//   }
}

export const appConsultas = new AppConsultas();

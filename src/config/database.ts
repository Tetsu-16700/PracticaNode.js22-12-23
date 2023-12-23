import { Pool, QueryResult } from "pg";

export const pool = new Pool({
  user: "postgress",
  host: "localhost",
  database: "practica-Express",
  password: "admin",
  port: 5432,
});

// export const query = async (
//   text: string,
//   params?: any[]
// ): Promise<QueryResult> => {
//   const result = await pool.query(text, params);
//   return result.rows[0];
// };

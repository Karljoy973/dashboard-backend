import { getDB } from "./db";

const getComments = async () => {
  const sql = getDB();
  const data = await sql`SELECT * from comments`;
  return data;
};

export { getComments };

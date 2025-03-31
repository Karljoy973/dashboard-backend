import { getDB } from "./db";

const getAuthors = async () => {
  const sql = getDB();
  const data = await sql`SELECT * from authors`;
  return data;
};

export { getAuthors };

import { getDB } from "./db";

const getPosts = async () => {
  const sql = getDB();
  const data = await sql`SELECT * from posts`;
  return data;
};

export { getPosts };

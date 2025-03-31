import { getDB } from "./db";

const getComments = async () => {
  const sql = getDB();
  const data = await sql`SELECT * from comment_list`;
  return data;
};

export { getComments };

import { getDB } from "./db";

const getAnalytics = async () => {
  const sql = getDB();
  const data = await sql`SELECT * from analytics`;
  return data;
};

export { getAnalytics };

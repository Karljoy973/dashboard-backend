import { neon } from "@neondatabase/serverless";

let sqlInstance: ReturnType<typeof neon> | null = null;

export function getDB() {
  if (sqlInstance == null) {
    sqlInstance = neon(process.env.DATABASE_URL as string);
    return sqlInstance;
  }
  return sqlInstance as ReturnType<typeof neon>;
}


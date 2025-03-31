import { NextResponse } from "next/server";
import { getAnalytics } from "@/service/get-analytics";
/**
 * @swagger
 * /analytics:
 *   get:
 *     summary: Retrieve a list of analytics, the data looks like google analytics data
 *     description: Fetches all analytics from the database.
 *     tags:
 *       - Analytics
 *     responses:
 *       200:
 *         description: A list of analytics.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: 'Jan'
 *                   uniqueViews:
 *                     type: integer
 *                     example: 4000
 *                   pageViews:
 *                     type: integer
 *                     example: 4000
 *                   amount:
 *                     type: integer
 *                     example: 4000
 *       500:
 *         description: Internal server error.
 */

export async function GET() {
  try {
    const data = await getAnalytics();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

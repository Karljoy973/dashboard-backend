import { NextResponse } from "next/server";
import { getComments } from "@/service/get-comments";
/**
 * @swagger
 * /commments:
 *   get:
 *     summary: Retrieve a list of the comments
 *     description: Fetches all the comments from the database.
 *     tags:
 *       - The comments
 *     responses:
 *       200:
 *         description: A list of the comments.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   text:
 *                     type: string
 *                     example: "Great ..."
 *                   author:
 *                     type: string
 *                     example: "John Doe"
 *       500:
 *         description: Internal server error.
 */
export async function GET() {
  try {
    const data = await getComments();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
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
  return NextResponse.json([{ text: "Great ...", author: "John Doe" }]);
}

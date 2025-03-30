import { NextResponse } from "next/server";
/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Retrieve a list of authors
 *     description: Fetches all authors from the database.
 *     tags:
 *       - Authors
 *     responses:
 *       200:
 *         description: A list of authors.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   username:
 *                     type: string
 *                     example: "John Doe"
 *       500:
 *         description: Internal server error.
 */
export async function GET() {
  return NextResponse.json([{ id: 1, username: "John Doe" }]);
}

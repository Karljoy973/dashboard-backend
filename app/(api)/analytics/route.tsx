import { NextResponse } from "next/server";
/**
 * @swagger
 * /analytics:
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
  return NextResponse.json([{ name: 'Jan', uniqueViews: 4000, pageViews: 6000, amount: 3000 }]);
}


import { NextResponse } from "next/server";
import { getAuthors } from "@/service/get-authors";
import { responseSpecs, errorPayloadSpecs, errorSpecs } from "../headers";
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
	try {
		const data = await getAuthors();
		return NextResponse.json(data, responseSpecs);
	} catch (error) {
		NextResponse.json(errorPayloadSpecs, errorSpecs);
	}
}

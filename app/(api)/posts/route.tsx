import { NextResponse } from "next/server";
import { getPosts } from "@/service/get-posts";
/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Retrieve a list of posts
 *     description: Fetches all posts from the database.
 *     tags:
 *       - Posts
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     example: "Machine Learning: Pow..."
 *                   author:
 *                     type: string
 *                     example: "John Doe"
 *                   date:
 *                     type: string
 *                     format: date
 *                     example: "2025-03-30"
 *                   like:
 *                     type: boolean
 *                     example: true
 *                   comments:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         text:
 *                           type: string
 *                           example: "Hello world"
 *                         username:
 *                           type: string
 *                           example: "John Doe"
 *       500:
 *         description: Internal server error.
 */

export async function GET() {
  try {
    const data = await getPosts();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

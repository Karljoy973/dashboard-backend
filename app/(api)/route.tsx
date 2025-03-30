import { NextResponse } from "next/server";

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns all available routes
 *     description: Fetches a list of all available API routes.
 *     responses:
 *       200:
 *         description: A list of available routes.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 allowedRoutes:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["/analytics", "/authors", "/comments", "/posts"]
 *       500:
 *         description: Internal server error.
 */
export async function GET() {
  return NextResponse.json({
    allowedRoutes: ["/analytics", "/authors", "/comments", "/posts"],
  });
}

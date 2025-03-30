import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  return NextResponse.json({ message: `Hello ${slug}!` });
}


/**!SECTION
 * 
 * Je veux refuser les requetes impertinentes.  
 * 
 * je veux 1 get par table qui va aller chercher la donnée 
 * je veux reconstituer la donnée dans le handler. 
 * je veux rendre un objet qui me convient. 
 */
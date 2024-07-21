import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export const POST = async (request: NextRequest, tags: string) => {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get('CONTENTFUL_REVALIDATE_SECRET');

  if(!secret) {
    return new Response('Unauthorized', { status: 400 });
  }

  if(secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid Secret' }, { status: 401 });
  }

  revalidateTag(tags);

  return NextResponse.json({ revalidated: true, tags, now: new Date().toISOString() });
}
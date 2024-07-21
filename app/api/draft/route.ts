import { NextRequest } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export const GET = (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')

  console.log(secret)

  if(!secret) {
    return new Response('Unauthorized', { status: 400 })
  }

  if(secret !== 'content-preview-secret') {
    return new Response('Unauthorized', { status: 401 })
  }

  draftMode().enable()
  // TODO: Make a button to clear the draft mode cookies
  // TODO: draftMode().disable()
  redirect('/')
} 
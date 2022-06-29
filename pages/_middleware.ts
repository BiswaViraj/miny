// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  request.headers.set("authorization", "kjjjjj");
  request.headers.append("authorization", "kjjjjj");

  response.headers.set("authorization", "kjjjjj");
  console.log("hahha");
  return response;
}

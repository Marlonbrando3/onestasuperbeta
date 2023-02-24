import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    // const requestHeaders = new Headers(request.headers)
    // const requestCookies = new Headers(request.headers)
    // requestCookies.set('Access-Control-Allow-Origin', '*')

    const response = NextResponse.next()
    
    response.headers.set('Access-Control-Allow-Origin','*')
    response.headers.set('Access-Control-Allow-Methods','GET, POST')

      // console.log(requestHeaders)

      return response;

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*'
}
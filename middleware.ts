import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    // const requestHeaders = new Headers(request.headers)
    const requestCookies = new Headers(request.headers)
    let cookie = request.cookies.getAll();
    requestCookies.set('Access-Control-Allow-Origin', '*')

    const response = NextResponse.next()
    
    response.cookies.set('vercel', 'fast')
    response.headers.set('Access-Control-Allow-Origin','*')


      // console.log(requestHeaders)

      return response;

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/login','/api/panel']
}
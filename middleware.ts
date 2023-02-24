import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('Access-Control-Allow-Origin', '*')

    const response = NextResponse.next({
        request: {
          // New request headers
          headers: requestHeaders,
        },
      })

      // console.log(requestHeaders)

      return response

}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/api/:path*',
// }
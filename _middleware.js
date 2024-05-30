import { NextResponse } from 'next/server';
import basicAuth from 'basic-auth';
import createError from 'http-errors';

const USERNAME = 'guswill';
const PASSWORD = 'guswil1224$G';

export function middleware(req) {
  const user = basicAuth(req);

  if (!user || user.name !== USERNAME || user.pass !== PASSWORD) {
    return new Response('Access Denied', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"'
      }
    });
  }

  return NextResponse.next();
}

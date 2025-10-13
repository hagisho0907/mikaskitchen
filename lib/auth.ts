import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key';
const secret = new TextEncoder().encode(JWT_SECRET);

export interface JWTPayload {
  username: string;
  exp: number;
}

// JWTトークンの生成
export async function generateToken(username: string): Promise<string> {
  const token = await new SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(secret);
  
  return token;
}

// JWTトークンの検証
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as JWTPayload;
  } catch (error) {
    return null;
  }
}

// セッショントークンの設定
export async function setSession(username: string) {
  const token = await generateToken(username);
  const cookieStore = cookies();
  
  cookieStore.set('admin-session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24時間
    path: '/'
  });
}

// セッショントークンの削除
export function clearSession() {
  const cookieStore = cookies();
  cookieStore.delete('admin-session');
}

// セッションの検証
export async function getSession(request?: NextRequest) {
  const cookieStore = request ? request.cookies : cookies();
  const token = cookieStore.get('admin-session')?.value;
  
  if (!token) {
    return null;
  }
  
  const payload = await verifyToken(token);
  return payload;
}
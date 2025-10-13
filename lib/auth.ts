import { SignJWT, jwtVerify, JWTPayload as JoseJWTPayload } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key';
const secret = new TextEncoder().encode(JWT_SECRET);

export interface CustomJWTPayload extends JoseJWTPayload {
  username: string;
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
export async function verifyToken(token: string): Promise<CustomJWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    // usernameが存在するかチェック
    if (payload && typeof payload === 'object' && 'username' in payload) {
      return payload as CustomJWTPayload;
    }
    return null;
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
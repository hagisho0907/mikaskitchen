import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './lib/auth';

export async function middleware(request: NextRequest) {
  // 保護されたAPIエンドポイント
  const protectedPaths = [
    '/api/data/events',
    '/api/data/news',
  ];
  
  // 現在のパスが保護されたパスかチェック
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );
  
  // POSTメソッドのみ認証が必要
  if (isProtectedPath && request.method === 'POST') {
    const session = await getSession(request);
    
    if (!session) {
      return NextResponse.json(
        { error: '認証が必要です' },
        { status: 401 }
      );
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
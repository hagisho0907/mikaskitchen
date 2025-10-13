import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const session = await getSession(request);
    
    if (session) {
      return NextResponse.json({ 
        authenticated: true,
        username: session.username
      });
    } else {
      return NextResponse.json({ 
        authenticated: false 
      }, { status: 401 });
    }
  } catch (error) {
    console.error('認証チェックAPI エラー:', error);
    return NextResponse.json({ 
      authenticated: false,
      message: 'サーバーエラーが発生しました' 
    }, { status: 500 });
  }
}
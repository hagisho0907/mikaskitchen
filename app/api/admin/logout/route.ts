import { NextResponse } from 'next/server';
import { clearSession } from '@/lib/auth';

export async function POST() {
  try {
    // セッションをクリア
    await clearSession();
    
    return NextResponse.json({ 
      success: true, 
      message: 'ログアウト成功' 
    });
  } catch (error) {
    console.error('ログアウトAPI エラー:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'サーバーエラーが発生しました' 
    }, { status: 500 });
  }
}
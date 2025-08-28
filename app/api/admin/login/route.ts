import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Vercelの環境変数から認証情報を取得
    const validUsername = process.env.ADMIN_USERNAME || 'admin';
    const validPassword = process.env.ADMIN_PASSWORD || 'Jijihime1002!';

    // 認証チェック
    if (username === validUsername && password === validPassword) {
      return NextResponse.json({ 
        success: true, 
        message: 'ログイン成功' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'ユーザー名またはパスワードが正しくありません' 
      }, { status: 401 });
    }
  } catch (error) {
    console.error('ログインAPI エラー:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'サーバーエラーが発生しました' 
    }, { status: 500 });
  }
}
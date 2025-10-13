import { NextRequest, NextResponse } from 'next/server';
import { setSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // 環境変数から認証情報を取得（デフォルト値を削除）
    const validUsername = process.env.ADMIN_USERNAME;
    const validPassword = process.env.ADMIN_PASSWORD;

    // 環境変数が設定されていない場合はエラー
    if (!validUsername || !validPassword) {
      console.error('管理者認証情報が設定されていません');
      return NextResponse.json({ 
        success: false, 
        message: 'サーバー設定エラー' 
      }, { status: 500 });
    }

    // 認証チェック
    if (username === validUsername && password === validPassword) {
      // セッショントークンを設定
      await setSession(username);
      
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
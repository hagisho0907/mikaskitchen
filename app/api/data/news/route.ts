import { NextRequest, NextResponse } from 'next/server';
import { getNews, saveNews } from '../../../../lib/github';

// お知らせデータを取得
export async function GET() {
  try {
    const news = await getNews();
    return NextResponse.json({ news, success: true });
  } catch (error) {
    console.error('News fetch error:', error);
    return NextResponse.json({ news: [], success: false }, { status: 500 });
  }
}

// お知らせデータを保存
export async function POST(request: NextRequest) {
  try {
    const { news } = await request.json();
    const success = await saveNews(news);
    
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    console.error('News save error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
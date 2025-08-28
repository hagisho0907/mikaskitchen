import { NextRequest, NextResponse } from 'next/server';
import { getEvents, saveEvents } from '../../../../lib/github';

// イベントデータを取得
export async function GET() {
  try {
    const events = await getEvents();
    return NextResponse.json({ events, success: true });
  } catch (error) {
    console.error('Events fetch error:', error);
    return NextResponse.json({ events: [], success: false }, { status: 500 });
  }
}

// イベントデータを保存
export async function POST(request: NextRequest) {
  try {
    const { events } = await request.json();
    const success = await saveEvents(events);
    
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    console.error('Events save error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
import DetailPageLayout from '../components/DetailPageLayout';

export default function BreadPage() {
  return (
    <DetailPageLayout
      title="パン販売"
      subtitle="天然酵母で作る体に優しいパン"
      description="美加の台所では、天然酵母と国産小麦を使用した手作りパンを販売しています。添加物を一切使わず、時間をかけてゆっくりと発酵させることで、消化に優しく栄養価の高いパンに仕上げています。季節の野菜や果物を使ったパンも定期的に登場します。毎日の食卓を豊かにする、安心・安全なパンをお届けします。"
      features={[
        "天然酵母100%使用（自家製酵母）",
        "国産小麦・有機原料にこだわり",
        "保存料・添加物一切不使用",
        "長時間発酵による深い味わい",
        "季節限定パンも定期的に販売",
        "アレルギー対応パン（小麦不使用等）"
      ]}
      schedule={{
        frequency: "毎週水曜・土曜日",
        duration: "店頭販売",
        time: "10:00〜売り切れまで",
        capacity: "予約優先"
      }}
      pricing={{
        regular: "食パン：480円〜 / 菓子パン：280円〜",
        trial: "お試しセット：1,200円（3種類）"
      }}
      images={[
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]}
      accentColor="yellow"
      backgroundColor="yellow.50"
    />
  );
}
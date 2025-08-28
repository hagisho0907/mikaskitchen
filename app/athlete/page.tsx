import DetailPageLayout from '../components/DetailPageLayout';

export default function AthletePage() {
  return (
    <DetailPageLayout
      title="アスリート料理教室"
      subtitle="パフォーマンス向上を支える食事術"
      description="スポーツをする方、体を動かすことが好きな方のための特別な料理教室です。筋肉づくりに必要なタンパク質の効果的な摂取方法、エネルギー補給のタイミング、疲労回復を促進する栄養素など、スポーツ栄養学に基づいた実践的な料理法を学びます。競技力向上と健康維持の両立を目指しましょう。"
      features={[
        "スポーツ栄養学に基づいた食事プラン作成",
        "筋肉づくりに効果的な高タンパク料理",
        "エネルギー補給・疲労回復メニュー",
        "競技前後の食事タイミング指導",
        "手軽に作れるプロテインボールやスムージー",
        "体重管理に配慮した満足感のある料理"
      ]}
      schedule={{
        frequency: "月2回（第1・第3日曜日）",
        duration: "3時間",
        time: "13:00〜16:00",
        capacity: "最大6名"
      }}
      pricing={{
        regular: "5,800円（材料費込み）",
        trial: "3,500円（初回限定）"
      }}
      images={[
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]}
      accentColor="red"
      backgroundColor="red.50"
    />
  );
}
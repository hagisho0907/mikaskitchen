import DetailPageLayout from '../components/DetailPageLayout';

export default function KidsPage() {
  return (
    <DetailPageLayout
      title="子供お料理教室"
      subtitle="楽しく学ぶ食の基本"
      description="お子様と一緒に参加できる親子料理教室です。包丁の使い方、食材の栄養、季節の食べ物など、食に関する基本的な知識を楽しく学びながら、簡単で美味しい料理を作ります。お子様の食育にもつながり、親子のコミュニケーションを深める貴重な時間となります。安全で楽しい環境で、料理の楽しさを体験してください。"
      features={[
        "年齢に合わせた安全な調理指導",
        "食材の栄養や季節について学習",
        "親子で協力して作る楽しいレシピ",
        "手作りおやつや簡単パン作り",
        "食べ物への感謝の気持ちを育成",
        "アレルギー対応メニューも用意"
      ]}
      schedule={{
        frequency: "月1回（第3土曜日）",
        duration: "2時間",
        time: "14:00〜16:00",
        capacity: "親子6組（最大12名）"
      }}
      pricing={{
        regular: "3,800円（親子1組・材料費込み）",
        trial: "2,200円（初回限定）"
      }}
      images={[
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]}
      accentColor="orange"
      backgroundColor="orange.50"
    />
  );
}
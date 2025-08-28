import DetailPageLayout from '../components/DetailPageLayout';

export default function ChokkatsuPage() {
  return (
    <DetailPageLayout
      title="腸活教室"
      subtitle="健康な腸を作る食生活を学ぼう"
      description="腸活教室では、発酵食品や食物繊維豊富な食材を使った料理を通じて、腸内環境を整える食生活を学びます。味噌作り、ぬか漬け、酵素ドリンク作りなど、昔ながらの知恵を現代の食卓に活かす方法をお教えします。美容と健康のために、まずは腸から整えていきましょう。"
      features={[
        "発酵食品（味噌・醤油・酢）の基礎知識と活用法",
        "ぬか漬けや酵素ドリンクの作り方実習",
        "腸に優しい食材の選び方・組み合わせ方",
        "日々の食事に取り入れやすいレシピ紹介",
        "腸活に関する栄養学の基礎知識",
        "個人の体質に合わせたアドバイス"
      ]}
      schedule={{
        frequency: "月2回（第2・第4土曜日）",
        duration: "2時間30分",
        time: "10:00〜12:30",
        capacity: "最大8名"
      }}
      pricing={{
        regular: "4,500円（材料費込み）",
        trial: "2,500円（初回限定）"
      }}
      images={[
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]}
      accentColor="green"
    />
  );
}
import DetailPageLayout from '../components/DetailPageLayout';

export default function BentoPage() {
  return (
    <DetailPageLayout
      title="腸活弁当・のっけ弁当"
      subtitle="健康と美味しさを詰め込んだお弁当"
      description="美加の台所の腸活弁当は、発酵食品と食物繊維豊富な野菜をバランスよく詰め合わせた健康志向のお弁当です。のっけ弁当は、玄米や雑穀米の上に色とりどりのおかずをのせた、見た目も美しいお弁当。どちらも添加物を使わず、その日の朝に手作りしています。忙しい毎日でも、体に優しい食事を手軽に楽しんでいただけます。"
      features={[
        "発酵食品（味噌・醤油・酢）を積極活用",
        "食物繊維豊富な野菜中心のメニュー",
        "玄米・雑穀米で栄養価アップ",
        "添加物・保存料一切不使用",
        "季節の食材を使った日替わりメニュー",
        "テイクアウト・宅配サービス対応"
      ]}
      schedule={{
        frequency: "平日毎日（月〜金）",
        duration: "テイクアウト・宅配",
        time: "11:30〜14:00（売り切れ次第終了）",
        capacity: "1日限定30食"
      }}
      pricing={{
        regular: "腸活弁当：780円 / のっけ弁当：680円",
        trial: "お試し2食セット：1,200円"
      }}
      images={[
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]}
      accentColor="teal"
      backgroundColor="teal.50"
    />
  );
}
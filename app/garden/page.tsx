import DetailPageLayout from '../components/DetailPageLayout';

export default function GardenPage() {
  return (
    <DetailPageLayout
      title="お庭ランチ"
      subtitle="古民家の庭で味わう特別な時間"
      description="美加の台所の古民家に隣接する美しい庭園で、季節を感じながらゆったりとお食事をお楽しみいただけます。四季折々の風景を眺めながら、厳選した食材で作ったランチコースをお召し上がりください。都会の喧騒を忘れ、自然の音に包まれながら過ごす贅沢な時間。大切な方とのお食事や、一人でのんびり過ごしたい時にもおすすめです。"
      features={[
        "四季折々の美しい庭園でのお食事",
        "季節の食材を活かしたランチコース",
        "古民家の情緒ある雰囲気",
        "完全予約制のプライベート感",
        "テーブル席・座敷席選択可能",
        "記念日・お祝い事にも対応"
      ]}
      schedule={{
        frequency: "土日祝日限定",
        duration: "ランチタイム",
        time: "11:30〜15:00（90分制）",
        capacity: "1日4組限定"
      }}
      pricing={{
        regular: "季節のランチコース：2,800円",
        trial: "お庭カフェセット：1,500円"
      }}
      images={[
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]}
      accentColor="purple"
      backgroundColor="purple.50"
    />
  );
}
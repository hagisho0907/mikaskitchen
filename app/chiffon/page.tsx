import DetailPageLayout from '../components/DetailPageLayout';

export default function ChiffonPage() {
  return (
    <DetailPageLayout
      title="シフォンケーキ販売"
      subtitle="ふわふわ食感の手作りシフォンケーキ"
      description="美加の台所の人気商品、手作りシフォンケーキです。卵の選び方から焼き上げまで、一つ一つ丁寧に作り上げています。ふわふわでしっとりとした食感と、素材本来の味を活かした優しい甘さが特徴です。プレーン、チョコレート、抹茶、季節のフルーツなど、多彩な味をご用意。お誕生日やお祝い事にもぴったりです。"
      features={[
        "こだわりの新鮮卵を使用",
        "ふわふわ・しっとり食感",
        "素材本来の味を活かした優しい甘さ",
        "季節のフルーツを使った限定フレーバー",
        "お祝い用デコレーションも対応",
        "ホールサイズ・カットサイズ選択可"
      ]}
      schedule={{
        frequency: "毎週金曜・日曜日",
        duration: "店頭販売・予約販売",
        time: "11:00〜17:00",
        capacity: "要予約（3日前まで）"
      }}
      pricing={{
        regular: "ホール（18cm）：1,800円〜 / カット：350円〜",
        trial: "ミニシフォン3個セット：980円"
      }}
      images={[
        "/images/Image5.jpg",
        "/images/Image5.jpg"
      ]}
      accentColor="pink"
      backgroundColor="pink.50"
    />
  );
}
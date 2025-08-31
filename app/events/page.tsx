'use client';

import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  Text, 
  SimpleGrid, 
  Card, 
  CardBody, 
  Badge,
  Button,
  HStack,
  useBreakpointValue 
} from '@chakra-ui/react';
import { ArrowBackIcon, CalendarIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EventCalendar from '../components/EventCalendar';

export default function EventsPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const handleBackToTop = () => {
    router.push('/');
  };

  const eventTypes = [
    {
      title: 'パン教室',
      description: '天然酵母を使った本格的なパン作りを学べます。初心者の方でも安心してご参加いただけるよう、丁寧に指導いたします。',
      features: [
        '天然酵母の扱い方を学べる',
        '家庭でも作れる実用的なレシピ',
        '少人数制でしっかりサポート',
        'パン作りの基礎から応用まで'
      ],
      color: 'orange'
    },
    {
      title: '寄せ植え教室',
      description: 'お庭や玄関を彩る美しい寄せ植えを作ります。季節に合わせた植物選びから、長持ちさせるコツまでお教えします。',
      features: [
        '季節の植物を使った寄せ植え',
        '植物の選び方・組み合わせ方',
        'お手入れ方法をしっかり説明',
        'おしゃれな鉢もご用意'
      ],
      color: 'green'
    },
    {
      title: 'シャビーナチュラル教室',
      description: '自然素材を活かしたシャビーシックなインテリア小物やガーデニング雑貨を手作りします。',
      features: [
        '自然素材を使ったクラフト',
        'アンティーク風の仕上げ方',
        '世界に一つだけの作品作り',
        'インテリアコーディネートのコツ'
      ],
      color: 'purple'
    }
  ];

  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      <Navigation />
      
      {/* ヒーローセクション */}
      <Box
        position="relative"
        h={isMobile ? "300px" : "400px"}
        bg="linear-gradient(135deg, teal.100 0%, teal.200 100%)"
        overflow="hidden"
      >        
        {/* オーバーレイ */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.300"
        />

        {/* コンテンツ */}
        <Container 
          maxW="1200px" 
          h="full" 
          position="relative" 
          zIndex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={4} textAlign="center" color="white">
            {/* トップに戻るボタン */}
            <HStack w="full" justify="flex-start" position="absolute" top={4} left={4}>
              <Button
                leftIcon={<ArrowBackIcon />}
                colorScheme="whiteAlpha"
                variant="solid"
                size="sm"
                onClick={handleBackToTop}
                bg="whiteAlpha.200"
                _hover={{ bg: "whiteAlpha.300" }}
                color="white"
              >
                トップに戻る
              </Button>
            </HStack>

            <CalendarIcon boxSize={isMobile ? 12 : 16} />
            <Heading 
              size={isMobile ? "xl" : "3xl"} 
              fontWeight="bold"
              textShadow="2px 2px 4px rgba(0,0,0,0.5)"
            >
              イベント
            </Heading>
            
            <Text 
              fontSize={isMobile ? "lg" : "xl"} 
              fontWeight="medium"
              textShadow="1px 1px 2px rgba(0,0,0,0.5)"
            >
              パン教室・寄せ植え教室・シャビーナチュラル教室を不定期開催
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* メインコンテンツ */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12} align="stretch">
          {/* 概要セクション */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack spacing={6} textAlign="center">
              <Heading size="lg" color="teal.700">
                イベント情報
              </Heading>
              <Text fontSize="lg" lineHeight="1.8" color="gray.700">
                ミカズキッチンでは、季節に合わせて様々なイベント・教室を開催しています。
                パン教室では天然酵母を使った本格的なパン作りを、寄せ植え教室では季節の植物を使った美しい寄せ植えを、
                シャビーナチュラル教室では自然素材を活かしたクラフト作りをお楽しみいただけます。
                各教室とも少人数制で、初心者の方でも安心してご参加いただけます。
              </Text>
            </VStack>
          </Box>

          {/* イベントタイプ */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack spacing={8}>
              <Heading size="lg" color="teal.700" textAlign="center">
                開催イベント
              </Heading>
              <SimpleGrid columns={{ base: 1, lg: 3 }} gap={6} w="full">
                {eventTypes.map((event, index) => (
                  <Card key={index} shadow="md" border="1px" borderColor="gray.200">
                    <CardBody>
                      <VStack spacing={4} align="stretch">
                        <Box textAlign="center">
                          <Badge colorScheme={event.color} size="lg" px={3} py={1} mb={2}>
                            {event.title}
                          </Badge>
                        </Box>
                        <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                          {event.description}
                        </Text>
                        <VStack spacing={2} align="start">
                          <Text fontSize="xs" fontWeight="bold" color="gray.600" mb={1}>
                            特徴・ポイント：
                          </Text>
                          {event.features.map((feature, featureIndex) => (
                            <Text key={featureIndex} fontSize="xs" color="gray.600">
                              • {feature}
                            </Text>
                          ))}
                        </VStack>
                      </VStack>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* イベントカレンダー */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack spacing={6}>
              <Heading size="lg" color="teal.700" textAlign="center">
                イベントカレンダー
              </Heading>
              <Text textAlign="center" color="gray.600" mb={4}>
                開催予定のイベントをカレンダーでご確認いただけます
              </Text>
              <EventCalendar />
            </VStack>
          </Box>

          {/* 参加方法・注意事項 */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
            <Card shadow="md">
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md" color="teal.700" textAlign="center">
                    参加方法
                  </Heading>
                  <VStack spacing={3} align="start">
                    <Box>
                      <Badge colorScheme="teal" mb={2}>予約方法</Badge>
                      <Text fontSize="sm">お電話またはお問い合わせフォームにてご予約ください</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="teal" mb={2}>開催時期</Badge>
                      <Text fontSize="sm">不定期開催（カレンダーにてお知らせ）</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="teal" mb={2}>定員</Badge>
                      <Text fontSize="sm">各教室4〜8名程度の少人数制</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="teal" mb={2}>持参品</Badge>
                      <Text fontSize="sm">エプロン、手拭きタオル（詳細は予約時にご案内）</Text>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            <Card shadow="md">
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md" color="teal.700" textAlign="center">
                    注意事項
                  </Heading>
                  <VStack spacing={3} align="start">
                    <Box>
                      <Badge colorScheme="orange" mb={2}>キャンセル</Badge>
                      <Text fontSize="sm">前日までにご連絡ください</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="orange" mb={2}>材料費</Badge>
                      <Text fontSize="sm">参加費に含まれています</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="orange" mb={2}>駐車場</Badge>
                      <Text fontSize="sm">数台分ございます（事前にお伝えください）</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="orange" mb={2}>お子様連れ</Badge>
                      <Text fontSize="sm">事前にご相談ください</Text>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* お申し込み・お問い合わせ */}
          <Box bg="teal.50" p={8} borderRadius="lg" textAlign="center">
            <VStack spacing={6}>
              <Heading size="md" color="teal.700">
                イベントのお申し込み・お問い合わせ
              </Heading>
              <Text color="gray.700">
                各イベントへの参加をご希望の方は、お気軽にお問い合わせください。<br />
                開催日程や詳細についてもお答えいたします。
              </Text>
              <VStack spacing={4}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button 
                    colorScheme="teal" 
                    size="lg"
                    _hover={{
                      transform: "translateY(-1px)",
                      shadow: "lg"
                    }}
                    transition="all 0.2s"
                  >
                    お問い合わせフォームへ
                  </Button>
                </Link>
                <Text fontSize="sm" color="gray.600">
                  電話：080-6011-7498 / メール：senka08760102@gmail.com
                </Text>
              </VStack>
            </VStack>
          </Box>

          {/* ホームに戻る */}
          <Box textAlign="center" pt={8}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="outline" colorScheme="teal">
                ← ホームに戻る
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
}
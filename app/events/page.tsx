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
  useBreakpointValue,
  Image,
  AspectRatio 
} from '@chakra-ui/react';
import { ArrowBackIcon, CalendarIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
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
      description: '国産小麦粉と喜界島のきび砂糖を使った本格的なパン作りを学べます。初心者の方でも安心してご参加いただけるよう、丁寧に指導いたします。',
      features: [
        '家庭でも作れる実用的なレシピ',
        '少人数制でしっかりサポート',
        'パン作りの基礎から応用まで'
      ],
      color: 'orange',
      image: '/images/event/event1.jpg'
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
      color: 'green',
      image: '/images/event/event2.jpg'
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
      color: 'purple',
      image: '/images/event/event3.jpg'
    }
  ];

  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      
      {/* ヒーローセクション */}
      <Box
        position="relative"
        h={isMobile ? "500px" : "700px"}
        bg="linear-gradient(135deg, teal.100 0%, teal.200 100%)"
        overflow="hidden"
      >        
        {/* 背景画像（3つのイベント画像をブレンド） */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage="linear-gradient(45deg, transparent 33%, transparent 66%), url('/images/event/event1.jpg'), url('/images/event/event2.jpg'), url('/images/event/event3.jpg')"
          backgroundSize="cover, 33% 100%, 33% 100%, 33% 100%"
          backgroundPosition="center, left, center, right"
          backgroundRepeat="no-repeat"
          opacity="0.4"
        />

        {/* オーバーレイ */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="linear-gradient(135deg, teal.600 0%, teal.400 100%)"
          opacity="0.8"
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
          <VStack spacing={6} textAlign="center" color="white">
            {/* トップに戻るボタン */}
            <HStack w="full" justify="flex-start" position="absolute" top={6} left={6}>
              <Button
                leftIcon={<ArrowBackIcon />}
                colorScheme="whiteAlpha"
                variant="solid"
                size="sm"
                onClick={handleBackToTop}
                bg="whiteAlpha.200"
                _hover={{ bg: "whiteAlpha.300" }}
                color="white"
                backdropFilter="blur(10px)"
              >
                トップに戻る
              </Button>
            </HStack>

            <CalendarIcon boxSize={isMobile ? 16 : 20} />
            <Heading 
              size={isMobile ? "2xl" : "4xl"} 
              fontWeight="bold"
              textShadow="2px 2px 8px rgba(0,0,0,0.6)"
              letterSpacing="wider"
            >
              イベント
            </Heading>
            
            <Text 
              fontSize={isMobile ? "lg" : "2xl"} 
              fontWeight="medium"
              textShadow="1px 1px 4px rgba(0,0,0,0.6)"
              maxW="800px"
              lineHeight="1.6"
            >
              パン教室・寄せ植え教室・シャビーナチュラル教室を不定期開催
            </Text>
            
            <Text 
              fontSize={isMobile ? "sm" : "lg"} 
              opacity="0.9"
              textShadow="1px 1px 2px rgba(0,0,0,0.6)"
            >
              手作りの温もりと自然の美しさを感じる特別な時間をお過ごしください
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
                美加の台所では、季節に合わせて様々なイベント・教室を開催しています。
                パン教室では国産小麦粉と喜界島のきび砂糖を使った本格的なパン作りを、寄せ植え教室では季節の植物を使った美しい寄せ植えを、
                シャビーナチュラル教室では自然素材を活かしたクラフト作りをお楽しみいただけます。
                各教室とも少人数制で、初心者の方でも安心してご参加いただけます。
              </Text>
            </VStack>
          </Box>

          {/* イベントタイプ */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="gray.100">
            <VStack spacing={12}>
              <VStack spacing={4}>
                <Heading size="xl" color="teal.700" textAlign="center" letterSpacing="wide">
                  開催イベント
                </Heading>
                <Text color="gray.600" textAlign="center" fontSize="lg">
                  心を込めて開催する3つの特別な教室
                </Text>
              </VStack>
              
              <SimpleGrid columns={{ base: 1, lg: 3 }} gap={8} w="full">
                {eventTypes.map((event, index) => (
                  <Card 
                    key={index} 
                    shadow="xl" 
                    border="1px" 
                    borderColor="gray.200"
                    borderRadius="xl"
                    overflow="hidden"
                    transition="all 0.3s"
                    _hover={{
                      transform: "translateY(-5px)",
                      shadow: "2xl",
                      borderColor: `${event.color}.200`
                    }}
                  >
                    {/* 画像セクション */}
                    <AspectRatio ratio={4/3}>
                      <Image
                        src={event.image}
                        alt={event.title}
                        objectFit="cover"
                        fallback={
                          <Box bg={`${event.color}.100`} w="full" h="full" display="flex" alignItems="center" justifyContent="center">
                            <Text color={`${event.color}.600`}>{event.title}</Text>
                          </Box>
                        }
                      />
                    </AspectRatio>
                    
                    <CardBody p={6}>
                      <VStack spacing={5} align="stretch">
                        <Box textAlign="center">
                          <Badge 
                            colorScheme={event.color} 
                            size="lg" 
                            px={4} 
                            py={2} 
                            borderRadius="full"
                            fontSize="sm"
                            fontWeight="bold"
                            textTransform="none"
                          >
                            {event.title}
                          </Badge>
                        </Box>
                        
                        <Text 
                          fontSize="sm" 
                          color="gray.700" 
                          lineHeight="1.7"
                          textAlign="center"
                        >
                          {event.description}
                        </Text>
                        
                        <Box bg={`${event.color}.50`} p={4} borderRadius="lg" border="1px" borderColor={`${event.color}.100`}>
                          <VStack spacing={3} align="start">
                            <Text fontSize="sm" fontWeight="bold" color={`${event.color}.700`}>
                              ✨ 特徴・ポイント
                            </Text>
                            {event.features.map((feature, featureIndex) => (
                              <HStack key={featureIndex} spacing={2} align="start">
                                <Text color={`${event.color}.500`} fontSize="xs" mt="2px">●</Text>
                                <Text fontSize="xs" color="gray.700" lineHeight="1.5">
                                  {feature}
                                </Text>
                              </HStack>
                            ))}
                          </VStack>
                        </Box>
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
                      <Text fontSize="sm">不定期開催 <br />（Instagram,イベントカレンダーにてお知らせ）</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="teal" mb={2}>定員</Badge>
                      <Text fontSize="sm">少人数制（開催時にお知らせします）</Text>
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
                      <Text fontSize="sm">キャンセルポリシーあり<br />お申し込み時にご確認ください</Text>
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
            <VStack spacing={4}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button 
                  colorScheme="teal" 
                  size="lg"
                  borderRadius="full"
                  px={8}
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "xl"
                  }}
                  transition="all 0.2s"
                >
                  お問い合わせ
                </Button>
              </Link>
              <VStack spacing={1}>
                <Text fontSize="sm" color="gray.600">
                  電話：080-6011-7498
                </Text>
                <Text fontSize="sm" color="gray.600">
                  メール：senka08760102@gmail.com
                </Text>
              </VStack>
            </VStack>
          </Box>

          {/* ホームに戻る */}
          <Box textAlign="center" pt={8}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="outline" colorScheme="teal" size="lg" borderRadius="full">
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
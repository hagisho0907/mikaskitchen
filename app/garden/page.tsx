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
import { ArrowBackIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function GardenPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const handleBackToTop = () => {
    router.push('/');
  };

  return (
    <Box minH="100vh" bg="purple.50">
      <Header />
      <Navigation />
      
      {/* ヒーローセクション */}
      <Box
        position="relative"
        h={isMobile ? "400px" : "500px"}
        bg="linear-gradient(135deg, purple.100 0%, purple.200 100%)"
        overflow="hidden"
      >
        {/* 背景画像 */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage="url('/images/lunch/lunch.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          opacity="0.3"
        />
        
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

            <Heading 
              size={isMobile ? "xl" : "3xl"} 
              fontWeight="bold"
              textShadow="2px 2px 4px rgba(0,0,0,0.5)"
            >
              お庭ランチ
            </Heading>
            
            <Text 
              fontSize={isMobile ? "lg" : "xl"} 
              fontWeight="medium"
              textShadow="1px 1px 2px rgba(0,0,0,0.5)"
            >
              古民家の庭で味わう特別な時間
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
              <Heading size="lg" color="purple.700">
                概要・詳細
              </Heading>
              <Text fontSize="lg" lineHeight="1.8" color="gray.700">
                築80年の古民家の美しい庭園を眺めながら、季節の食材をふんだんに使った特別なランチをお楽しみいただけます。静かで落ち着いた空間で、ゆっくりとした時間をお過ごしください。1日1組限定の完全予約制で、プライベートな時間をご提供します。記念日や特別な日のお食事にもおすすめです。
              </Text>
            </VStack>
          </Box>

          {/* 特徴・ポイント */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack spacing={6}>
              <Heading size="lg" color="purple.700" textAlign="center">
                特徴・ポイント
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                <Box
                  p={4}
                  bg="purple.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="purple.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    甘酒スムージーなどフリードリンク付き
                  </Text>
                </Box>
                <Box
                  p={4}
                  bg="purple.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="purple.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    旬の食材を使った季節のランチコース
                  </Text>
                </Box>
                <Box
                  p={4}
                  bg="purple.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="purple.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    完全予約制のプライベート空間
                  </Text>
                </Box>
                <Box
                  p={4}
                  bg="purple.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="purple.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    記念日・お祝い事にも対応可能
                  </Text>
                </Box>
              </SimpleGrid>
            </VStack>
          </Box>

          {/* スケジュール・料金情報 */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
            <Card shadow="md">
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md" color="purple.700" textAlign="center">
                    スケジュール
                  </Heading>
                  <VStack spacing={3} align="start">
                    <Box>
                      <Badge colorScheme="purple" mb={2}>曜日</Badge>
                      <Text>週末・祝日限定</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="purple" mb={2}>時間</Badge>
                      <Text>ランチタイム 11:30〜15:00（90分制）</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="purple" mb={2}>定員</Badge>
                      <Text>1日4組限定</Text>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            <Card shadow="md">
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md" color="purple.700" textAlign="center">
                    料金
                  </Heading>
                  <VStack spacing={3} align="start">
                    <Box>
                      <Badge colorScheme="purple" mb={2}>通常料金</Badge>
                      <Text fontSize="xl" fontWeight="bold">季節のランチコース：¥2,800</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="orange" mb={2}>体験料金</Badge>
                      <Text fontSize="lg" fontWeight="medium">お庭カフェセット：¥1,500</Text>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* お申し込み・お問い合わせ */}
          <Box bg="purple.50" p={8} borderRadius="lg" textAlign="center">
            <VStack spacing={6}>
              <Heading size="md" color="purple.700">
                お申し込み・お問い合わせ
              </Heading>
              <Text color="gray.700">
                ご興味をお持ちの方は、お気軽にお問い合わせください。
              </Text>
              <VStack spacing={4}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button 
                    colorScheme="purple" 
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
              <Button variant="outline" colorScheme="purple">
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
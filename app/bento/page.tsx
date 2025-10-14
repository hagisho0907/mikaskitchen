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

export default function BentoPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const handleBackToTop = () => {
    router.push('/');
  };

  return (
    <Box minH="100vh" bg="teal.50">
      <Header />
      <Navigation />
      
      {/* ヒーローセクション */}
      <Box
        position="relative"
        h={isMobile ? "400px" : "500px"}
        bg="linear-gradient(135deg, teal.100 0%, teal.200 100%)"
        overflow="hidden"
      >
        {/* 背景画像 */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage="url('/images/chounokke/chounokke.jpg')"
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

            <Text fontSize={isMobile ? "4xl" : "6xl"} mb={2} color="white" filter="grayscale(100%) brightness(200%)">
              🍱
            </Text>
            <Heading 
              size={isMobile ? "xl" : "3xl"} 
              fontWeight="bold"
              textShadow="2px 2px 4px rgba(0,0,0,0.5)"
            >
              腸活弁当・のっけ弁当
            </Heading>
            
            <Text 
              fontSize={isMobile ? "lg" : "xl"} 
              fontWeight="medium"
              textShadow="1px 1px 2px rgba(0,0,0,0.5)"
            >
              健康と美味しさを詰め込んだお弁当
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
                概要・詳細
              </Heading>
              <Text fontSize="lg" lineHeight="1.8" color="gray.700">
                美加の台所の腸活弁当は、発酵食品と食物繊維豊富な季節の野菜をバランスよく詰め合わせたお弁当です。のっけ弁当は、七分米の上に色とりどりのおかずをのせた、見た目も美しいお弁当。どちらも厳選した材料と調味料を使い、心を込めて手作りしています。忙しい毎日でも、体に優しい食事を手軽に楽しんでいただけます。
              </Text>
            </VStack>
          </Box>

          {/* 特徴・ポイント */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack spacing={6}>
              <Heading size="lg" color="teal.700" textAlign="center">
                特徴・ポイント
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                <Box
                  p={4}
                  bg="teal.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="teal.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    発酵食品（味噌・醤油・酢・麹）を積極活用
                  </Text>
                </Box>
                <Box
                  p={4}
                  bg="teal.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="teal.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    食物繊維豊富な野菜中心のメニュー
                  </Text>
                </Box>
                <Box
                  p={4}
                  bg="teal.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="teal.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    玄米・雑穀米で栄養価アップ
                  </Text>
                </Box>
                <Box
                  p={4}
                  bg="teal.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="teal.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    お肉料理と魚料理を両方入れているので、しっかりタンパク質も摂れます
                  </Text>
                </Box>
                <Box
                  p={4}
                  bg="teal.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="teal.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    季節の食材を使った日替わりメニュー
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
                  <Heading size="md" color="teal.700" textAlign="center">
                    スケジュール
                  </Heading>
                  <VStack spacing={3} align="start">
                    <Box>
                      <Badge colorScheme="teal" mb={2}>販売日</Badge>
                      <Text>毎週金曜日</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="teal" mb={2}>販売時間</Badge>
                      <Text>11:00〜売り切れ次第終了</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="teal" mb={2}>販売方法</Badge>
                      <Text>
                        テイクアウト・宅配<br />
                        ※15個以上の注文の場合、配達致します<br />
                        ※金曜日以外にお弁当ご予約（15個以上）承ります
                      </Text>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            <Card shadow="md">
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md" color="teal.700" textAlign="center">
                    料金
                  </Heading>
                  <VStack spacing={3} align="start">
                    <Box>
                      <Badge colorScheme="teal" mb={2}>通常料金</Badge>
                      <Text fontSize="xl" fontWeight="bold">腸活弁当：1100円 / のっけ弁当：650円</Text>
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
                  _hover={{
                    transform: "translateY(-1px)",
                    shadow: "lg"
                  }}
                  transition="all 0.2s"
                >
                  お問い合わせ
                </Button>
              </Link>
              <Text fontSize="sm" color="gray.600">
                電話：080-6011-7498 / メール：senka08760102@gmail.com
              </Text>
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
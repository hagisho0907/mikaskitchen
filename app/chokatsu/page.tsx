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
  AspectRatio,
  Icon,
  Flex,
  Divider,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FaLeaf, FaSeedling, FaHeart, FaClock, FaYenSign, FaUsers, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ChokkatsuPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const handleBackToTop = () => {
    router.push('/');
  };

  const recommendedFor = [
    "腸活を始めたい！",
    "発酵食品をもっと上手に使いたい",
    "体に良いレシピを毎日の食事に取り入れたい",
    "楽しく学びながらリフレッシュしたい"
  ];

  const misoMenus = [
    "銀鱈の味噌漬け",
    "ナスとピーマンの味噌炒め"
  ];

  const kojiMenus = [
    { koji: "塩麹", dish: "塩麹ドレッシング" },
    { koji: "醤油麹", dish: "醤油麹チャーシュー" },
    { koji: "玉ねぎ麹", dish: "玉ねぎ麹のスープ" },
    { koji: "レモン麹", dish: "レモン麹鶏ハム" },
    { koji: "ピーマン味噌", dish: "ピーマン味噌を使ったお料理" }
  ];

  return (
    <Box minH="100vh" bg="green.25">
      <Header />
      <Navigation />
      
      {/* ヒーローセクション */}
      <Box
        position="relative"
        h={isMobile ? "500px" : "700px"}
        overflow="hidden"
      >        
        {/* 背景画像 */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage="url('/images/choukatsu/choukatsu1.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          opacity="0.7"
        />

        {/* オーバーレイ */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="linear-gradient(135deg, green.500 0%, teal.500 50%, emerald.500 100%)"
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

            <Icon as={FaLeaf} boxSize={isMobile ? 12 : 16} />
            
            <Heading 
              size={isMobile ? "2xl" : "4xl"} 
              fontWeight="bold"
              textShadow="2px 2px 8px rgba(0,0,0,0.6)"
              letterSpacing="wider"
            >
              腸活お料理教室
            </Heading>
            
            <Text 
              fontSize={isMobile ? "lg" : "2xl"} 
              fontWeight="medium"
              textShadow="1px 1px 4px rgba(0,0,0,0.6)"
              maxW="800px"
              lineHeight="1.6"
            >
              毎日のごはんで、腸から元気に✨
            </Text>
            
            <Text 
              fontSize={isMobile ? "sm" : "lg"} 
              opacity="0.9"
              textShadow="1px 1px 2px rgba(0,0,0,0.6)"
              maxW="700px"
            >
              発酵のチカラと食物繊維、オリゴ糖をたっぷり取り入れた「腸活レシピ」を一緒に作ってみませんか？
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* メインコンテンツ */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12} align="stretch">
          {/* 教室について */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="green.100">
            <VStack spacing={8} textAlign="center">
              <VStack spacing={4}>
                <Heading size="xl" color="green.700" letterSpacing="wide">
                  腸活お料理教室について
                </Heading>
                <Text fontSize="lg" lineHeight="1.8" color="gray.700" maxW="800px">
                  麹を使ったやさしい味わいのお料理や、野菜の食物繊維を活かしたメニューをご紹介します。
                </Text>
              </VStack>
              
              <Box bg="green.50" p={6} borderRadius="xl" border="2px" borderColor="green.200">
                <VStack spacing={4}>
                  <Text fontSize="xl" fontWeight="bold" color="green.700">
                    作ったあとは、みんなで試食タイム♪
                  </Text>
                  <Text color="gray.700">
                    体にやさしい美味しさをその場で楽しめます
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* おすすめの方 */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="teal.100">
            <VStack spacing={8}>
              <VStack spacing={4}>
                <Heading size="xl" color="teal.700" textAlign="center" letterSpacing="wide">
                  こんな方におすすめ
                </Heading>
              </VStack>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                {recommendedFor.map((item, index) => (
                  <Card
                    key={index}
                    p={6}
                    bg="teal.50"
                    borderRadius="xl"
                    border="2px"
                    borderColor="teal.200"
                    shadow="md"
                    transition="all 0.3s"
                    _hover={{
                      borderColor: "teal.300",
                      shadow: "lg",
                      transform: "translateY(-2px)"
                    }}
                  >
                    <HStack spacing={4} align="start">
                      <Icon as={FaCheckCircle} color="teal.500" boxSize={6} mt={1} />
                      <Text fontSize="md" color="gray.700" fontWeight="medium" lineHeight="1.6">
                        {item}
                      </Text>
                    </HStack>
                  </Card>
                ))}
              </SimpleGrid>
              
              <Box bg="emerald.50" p={6} borderRadius="lg" border="1px" borderColor="emerald.200" maxW="600px">
                <Text fontSize="lg" color="emerald.700" fontWeight="bold" textAlign="center">
                  リピーターの方も多くいらっしゃいます
                </Text>
                <Text fontSize="md" color="gray.700" textAlign="center" mt={2}>
                  毎回違うメニューでお待ちしています
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* メニュー例 */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="orange.100">
            <VStack spacing={10}>
              <VStack spacing={4}>
                <Heading size="xl" color="orange.700" textAlign="center" letterSpacing="wide">
                  メニュー（例）
                </Heading>
                <Text color="gray.600" textAlign="center" fontSize="lg">
                  季節に合わせた腸活レシピをご紹介
                </Text>
              </VStack>

              {/* 味噌料理 */}
              <Card bg="orange.50" p={6} borderRadius="xl" border="2px" borderColor="orange.200" w="full">
                <VStack spacing={4}>
                  <Badge colorScheme="orange" size="lg" px={4} py={2} borderRadius="full">
                    味噌を使ったお料理
                  </Badge>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                    {misoMenus.map((menu, index) => (
                      <Box key={index} bg="white" p={4} borderRadius="lg" shadow="sm">
                        <HStack spacing={3}>
                          <Text fontSize="lg">🍽️</Text>
                          <Text fontSize="md" fontWeight="medium" color="gray.700">
                            {menu}
                          </Text>
                        </HStack>
                      </Box>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Card>

              {/* 麹料理 */}
              <Card bg="green.50" p={6} borderRadius="xl" border="2px" borderColor="green.200" w="full">
                <VStack spacing={6}>
                  <Badge colorScheme="green" size="lg" px={4} py={2} borderRadius="full">
                    麹で調味料作り & お料理
                  </Badge>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    塩麹、醤油麹、ピーマン味噌、レモン麹、玉ねぎ麹などを作り、それらを使ったお料理
                  </Text>
                  
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                    {kojiMenus.map((item, index) => (
                      <Box key={index} bg="white" p={4} borderRadius="lg" shadow="sm">
                        <VStack spacing={2} align="start">
                          <HStack spacing={2}>
                            <Text fontSize="sm" color="green.600" fontWeight="bold">
                              {item.koji}
                            </Text>
                            <Text fontSize="xs" color="gray.500">→</Text>
                          </HStack>
                          <HStack spacing={3}>
                            <Text fontSize="lg">🍽️</Text>
                            <Text fontSize="sm" fontWeight="medium" color="gray.700">
                              {item.dish}
                            </Text>
                          </HStack>
                        </VStack>
                      </Box>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Card>

              {/* 人気メニュー */}
              <Card bg="purple.50" p={6} borderRadius="xl" border="2px" borderColor="purple.200" w="full">
                <VStack spacing={4}>
                  <Badge colorScheme="purple" size="lg" px={4} py={2} borderRadius="full">
                    美加の台所の人気メニュー伝授
                  </Badge>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    定期的にご参加いただいている方への特別レシピ
                  </Text>
                  <HStack spacing={3}>
                    <Icon as={FaSeedling} color="purple.500" boxSize={6} />
                    <Text fontSize="md" color="purple.700" fontWeight="medium">
                      季節ごとに変わる特別メニューをお楽しみに
                    </Text>
                  </HStack>
                </VStack>
              </Card>
            </VStack>
          </Box>

          {/* スケジュール・料金情報 */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
            <Card shadow="xl" borderRadius="xl" border="1px" borderColor="green.200">
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon as={FaClock} boxSize={8} color="green.500" mb={4} />
                    <Heading size="lg" color="green.700">
                      スケジュール
                    </Heading>
                  </Box>
                  <VStack spacing={4} align="start">
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="green" px={3} py={1} borderRadius="full">開催頻度</Badge>
                      <Text fontWeight="medium">月2回（第2・第4土曜日）</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="green" px={3} py={1} borderRadius="full">時間</Badge>
                      <Text fontWeight="medium">2時間30分</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="green" px={3} py={1} borderRadius="full">開催時間</Badge>
                      <Text fontWeight="medium">10:00〜12:30</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="green" px={3} py={1} borderRadius="full">定員</Badge>
                      <Text fontWeight="medium">最大8名</Text>
                    </Flex>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            <Card shadow="xl" borderRadius="xl" border="1px" borderColor="teal.200">
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon as={FaYenSign} boxSize={8} color="teal.500" mb={4} />
                    <Heading size="lg" color="teal.700">
                      料金
                    </Heading>
                  </Box>
                  <VStack spacing={4} align="start">
                    <Box
                      p={4}
                      bg="teal.50"
                      borderRadius="lg"
                      border="2px"
                      borderColor="teal.200"
                      w="full"
                    >
                      <Badge colorScheme="teal" mb={2} px={3} py={1} borderRadius="full">通常料金</Badge>
                      <Text fontSize="xl" fontWeight="bold" color="teal.700">
                        4,500円
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        材料費込み
                      </Text>
                    </Box>
                    <Box
                      p={4}
                      bg="green.50"
                      borderRadius="lg"
                      border="2px"
                      borderColor="green.200"
                      w="full"
                    >
                      <Badge colorScheme="green" mb={2} px={3} py={1} borderRadius="full">初回限定</Badge>
                      <Text fontSize="xl" fontWeight="bold" color="green.700">
                        2,500円
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        お試し体験価格
                      </Text>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* お申し込み・お問い合わせ */}
          <Box 
            bg="linear-gradient(135deg, green.100 0%, teal.100 100%)" 
            p={8} 
            borderRadius="xl" 
            textAlign="center"
            border="1px"
            borderColor="green.200"
          >
            <VStack spacing={6}>
              <Icon as={FaLeaf} boxSize={12} color="green.500" />
              <Heading size="lg" color="green.700">
                腸から健康な毎日を始めませんか？
              </Heading>
              <Text color="gray.700" fontSize="lg" maxW="600px">
                発酵食品と食物繊維の力で、体の内側から輝く健康を手に入れましょう
              </Text>
              <VStack spacing={4}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button 
                    colorScheme="green" 
                    size="lg"
                    borderRadius="full"
                    px={8}
                    _hover={{
                      transform: "translateY(-2px)",
                      shadow: "xl"
                    }}
                    transition="all 0.2s"
                  >
                    お申し込み・お問い合わせ
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
              <Button variant="outline" colorScheme="green" size="lg" borderRadius="full">
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
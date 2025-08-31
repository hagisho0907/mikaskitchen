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
  Icon,
  Flex,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FaDumbbell, FaClock, FaYenSign, FaCheckCircle, FaBullseye, FaUsers, FaAppleAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AthletePage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const handleBackToTop = () => {
    router.push('/');
  };

  const timingTopics = [
    "試合前後に適した食事と補食",
    "トレーニング前の消化にやさしい食材選び",
    "リカバリーを早める栄養素の摂り方"
  ];

  const ageSpecificNutrition = [
    {
      category: "成長期のジュニアアスリート",
      description: "必要なエネルギーと栄養バランスの取り方"
    },
    {
      category: "高校・大学生アスリート",
      description: "身体づくりに役立つ食事のポイント"
    },
    {
      category: "成人アスリート",
      description: "パフォーマンス維持と疲労回復のための栄養戦略"
    }
  ];

  return (
    <Box minH="100vh" bg="red.25">
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
          backgroundImage="linear-gradient(135deg, red.600 0%, orange.600 50%, red.600 100%)"
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

            <Icon as={FaDumbbell} boxSize={isMobile ? 12 : 16} />
            
            <Heading 
              size={isMobile ? "2xl" : "4xl"} 
              fontWeight="bold"
              textShadow="2px 2px 8px rgba(0,0,0,0.6)"
              letterSpacing="wider"
            >
              アスリートのための栄養・料理教室
            </Heading>
            
            <Box
              bg="whiteAlpha.200"
              p={6}
              borderRadius="xl"
              backdropFilter="blur(10px)"
              border="1px"
              borderColor="whiteAlpha.300"
              maxW="800px"
            >
              <Text 
                fontSize={isMobile ? "md" : "lg"} 
                fontWeight="medium"
                lineHeight="1.8"
                fontStyle="italic"
              >
                『何を食べさせてあげて良いのかなわからないと悩む母、私もそうでした。<br />
                実際に一緒に作って食べてみましょう』
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* メインコンテンツ */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12} align="stretch">
          {/* 教室について */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="red.100">
            <VStack spacing={8} textAlign="center">
              <VStack spacing={4}>
                <Heading size="xl" color="red.700" letterSpacing="wide">
                  アスリートのための栄養教室について
                </Heading>
              </VStack>
              
              <Text fontSize="lg" lineHeight="1.8" color="gray.700" maxW="800px">
                スポーツのパフォーマンスを最大限に発揮するためには、質の高いトレーニングと同じくらい、
                <Text as="span" fontWeight="bold" color="red.600">栄養と食事の戦略</Text>が重要です。
              </Text>
              
              <Text fontSize="lg" lineHeight="1.8" color="gray.700" maxW="800px">
                本講座では、競技力向上やリカバリーに直結する
                <Text as="span" fontWeight="bold" color="red.600">「食べるタイミング」「栄養素の選び方」「年齢別の食事の工夫」</Text>
                について学びます。
              </Text>
            </VStack>
          </Box>

          {/* 講座内容 */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="orange.100">
            <VStack spacing={10}>
              <VStack spacing={4}>
                <Text fontSize="2xl">📌</Text>
                <Heading size="xl" color="orange.700" textAlign="center" letterSpacing="wide">
                  講座内容
                </Heading>
              </VStack>

              {/* 食べるタイミング */}
              <Card bg="red.50" p={6} borderRadius="xl" border="2px" borderColor="red.200" w="full">
                <VStack spacing={6}>
                  <Box textAlign="center">
                    <Icon as={FaClock} boxSize={8} color="red.500" mb={2} />
                    <Badge colorScheme="red" size="lg" px={4} py={2} borderRadius="full">
                      食べるタイミング
                    </Badge>
                  </Box>
                  
                  <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} w="full">
                    {timingTopics.map((topic, index) => (
                      <Box key={index} bg="white" p={4} borderRadius="lg" shadow="sm">
                        <HStack spacing={3} align="start">
                          <Icon as={FaCheckCircle} color="red.500" boxSize={4} mt={1} />
                          <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                            {topic}
                          </Text>
                        </HStack>
                      </Box>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Card>

              {/* 年齢に応じた食事法 */}
              <Card bg="orange.50" p={6} borderRadius="xl" border="2px" borderColor="orange.200" w="full">
                <VStack spacing={6}>
                  <Box textAlign="center">
                    <Icon as={FaUsers} boxSize={8} color="orange.500" mb={2} />
                    <Badge colorScheme="orange" size="lg" px={4} py={2} borderRadius="full">
                      年齢に応じた食事法
                    </Badge>
                  </Box>
                  
                  <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} w="full">
                    {ageSpecificNutrition.map((item, index) => (
                      <Card key={index} bg="white" p={4} borderRadius="lg" shadow="sm">
                        <VStack spacing={3} align="start">
                          <Text fontSize="sm" fontWeight="bold" color="orange.600">
                            {item.category}
                          </Text>
                          <Text fontSize="xs" color="gray.700" lineHeight="1.5">
                            {item.description}
                          </Text>
                        </VStack>
                      </Card>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Card>

              {/* 実践メニュー */}
              <Card bg="yellow.50" p={6} borderRadius="xl" border="2px" borderColor="yellow.200" w="full">
                <VStack spacing={4}>
                  <Box textAlign="center">
                    <Icon as={FaAppleAlt} boxSize={8} color="yellow.600" mb={2} />
                    <Badge colorScheme="yellow" size="lg" px={4} py={2} borderRadius="full">
                      実践メニュー
                    </Badge>
                  </Box>
                  <Text fontSize="md" color="gray.700" textAlign="center" lineHeight="1.7" maxW="600px">
                    日常の食卓に取り入れやすい、栄養バランスの取れた料理をご紹介。
                    実習を通して「食べ方」を体得できます。
                  </Text>
                  <HStack spacing={3}>
                    <Icon as={FaBullseye} color="yellow.600" boxSize={6} />
                    <Text fontSize="md" color="yellow.700" fontWeight="medium">
                      実習メニューは季節や参加者のレベルに合わせて変更いたします
                    </Text>
                  </HStack>
                </VStack>
              </Card>
            </VStack>
          </Box>

          {/* スケジュール・料金情報 */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
            <Card shadow="xl" borderRadius="xl" border="1px" borderColor="red.200">
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon as={FaClock} boxSize={8} color="red.500" mb={4} />
                    <Heading size="lg" color="red.700">
                      スケジュール
                    </Heading>
                  </Box>
                  <VStack spacing={4} align="start">
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="red" px={3} py={1} borderRadius="full">開催頻度</Badge>
                      <Text fontWeight="medium">月1回（火曜日or日曜日）</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="red" px={3} py={1} borderRadius="full">定員</Badge>
                      <Text fontWeight="medium">最大5名</Text>
                    </Flex>
                    <Box
                      p={4}
                      bg="red.50"
                      borderRadius="lg"
                      border="2px"
                      borderColor="red.200"
                      w="full"
                      mt={2}
                    >
                      <Badge colorScheme="red" mb={2} px={3} py={1} borderRadius="full">個人レッスン</Badge>
                      <Text fontSize="sm" fontWeight="bold" color="red.700">
                        個人レッスンも可
                      </Text>
                      <Text fontSize="xs" color="gray.600">
                        ご相談ください
                      </Text>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            <Card shadow="xl" borderRadius="xl" border="1px" borderColor="orange.200">
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon as={FaYenSign} boxSize={8} color="orange.500" mb={4} />
                    <Heading size="lg" color="orange.700">
                      料金
                    </Heading>
                  </Box>
                  <VStack spacing={4} align="start">
                    <Box
                      p={4}
                      bg="orange.50"
                      borderRadius="lg"
                      border="2px"
                      borderColor="orange.200"
                      w="full"
                    >
                      <Badge colorScheme="orange" mb={2} px={3} py={1} borderRadius="full">料金</Badge>
                      <Text fontSize="xl" fontWeight="bold" color="orange.700">
                        5,000円〜
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        材料費込み
                      </Text>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* お申し込み・お問い合わせ */}
          <Box 
            bg="linear-gradient(135deg, red.100 0%, orange.100 100%)" 
            p={8} 
            borderRadius="xl" 
            textAlign="center"
            border="1px"
            borderColor="red.200"
          >
            <VStack spacing={6}>
              <Icon as={FaDumbbell} boxSize={12} color="red.500" />
              <Heading size="lg" color="red.700">
                アスリートの可能性を最大限に引き出しませんか？
              </Heading>
              <Text color="gray.700" fontSize="lg" maxW="600px">
                正しい栄養知識で、競技力向上と健康な身体づくりをサポートいたします
              </Text>
              <VStack spacing={4}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button 
                    colorScheme="red" 
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
              <Button variant="outline" colorScheme="red" size="lg" borderRadius="full">
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
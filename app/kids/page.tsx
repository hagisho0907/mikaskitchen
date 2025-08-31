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
  Flex
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FaHeart, FaUtensils, FaUsers, FaClock, FaYenSign, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function KidsPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const handleBackToTop = () => {
    router.push('/');
  };

  const features = [
    {
      icon: FaUsers,
      title: "年齢に合わせた安全な調理指導",
      description: "4歳〜12歳まで、お子様の年齢に応じた安全で楽しい調理体験"
    },
    {
      icon: FaUtensils,
      title: "食材の栄養や季節について学習",
      description: "野菜の栄養や旬の食材について、遊びながら自然に学べます"
    },
    {
      icon: FaHeart,
      title: "親子で協力して作る楽しいレシピ",
      description: "家族の絆を深める親子クッキング体験"
    },
    {
      icon: FaStar,
      title: "手作りおやつや簡単パン作り",
      description: "お子様でも作れる簡単で美味しいおやつとパン"
    },
    {
      icon: FaHeart,
      title: "食べ物への感謝の気持ちを育成",
      description: "食材や作ってくれる人への感謝の心を育みます"
    },
    {
      icon: FaUsers,
      title: "アレルギー対応メニューも用意",
      description: "事前にご相談いただければ、アレルギーに配慮したメニューもご用意"
    }
  ];

  const galleryImages = [
    { src: "/images/child/child1.jpg", alt: "子供たちが楽しくお料理している様子" },
    { src: "/images/child/child2.jpg", alt: "親子で一緒に調理を楽しむ様子" },
    { src: "/images/child/child3.jpg", alt: "完成した料理を嬉しそうに見せる子供たち" }
  ];

  return (
    <Box minH="100vh" bg="orange.25">
      <Header />
      <Navigation />
      
      {/* ヒーローセクション */}
      <Box
        position="relative"
        h={isMobile ? "400px" : "600px"}
        overflow="hidden"
      >        
        {/* 背景画像 */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage="url('/images/child/child1.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          opacity="0.6"
        />

        {/* オーバーレイ */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="linear-gradient(135deg, orange.400 0%, red.400 50%, pink.400 100%)"
          opacity="0.85"
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

            <Icon as={FaHeart} boxSize={isMobile ? 16 : 20} />
            <Heading 
              size={isMobile ? "2xl" : "4xl"} 
              fontWeight="bold"
              textShadow="2px 2px 8px rgba(0,0,0,0.6)"
              letterSpacing="wider"
            >
              子供お料理教室
            </Heading>
            
            <Text 
              fontSize={isMobile ? "lg" : "2xl"} 
              fontWeight="medium"
              textShadow="1px 1px 4px rgba(0,0,0,0.6)"
              maxW="800px"
              lineHeight="1.6"
            >
              楽しく学ぶ食の基本
            </Text>
            
            <Text 
              fontSize={isMobile ? "sm" : "lg"} 
              opacity="0.9"
              textShadow="1px 1px 2px rgba(0,0,0,0.6)"
            >
              親子で一緒に、料理の楽しさと食べ物の大切さを学びましょう
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* メインコンテンツ */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12} align="stretch">
          {/* 概要セクション */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="orange.100">
            <VStack spacing={6} textAlign="center">
              <Heading size="xl" color="orange.700" letterSpacing="wide">
                教室について
              </Heading>
              <Text fontSize="lg" lineHeight="1.8" color="gray.700" maxW="800px">
                お子様と一緒に参加できる親子料理教室です。包丁の使い方、食材の栄養、季節の食べ物など、
                食に関する基本的な知識を楽しく学びながら、簡単で美味しい料理を作ります。
                お子様の食育にもつながり、親子のコミュニケーションを深める貴重な時間となります。
                安全で楽しい環境で、料理の楽しさを体験してください。
              </Text>
            </VStack>
          </Box>

          {/* ギャラリーセクション */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="orange.100">
            <VStack spacing={8}>
              <VStack spacing={4}>
                <Heading size="xl" color="orange.700" textAlign="center" letterSpacing="wide">
                  教室の様子
                </Heading>
                <Text color="gray.600" textAlign="center" fontSize="lg">
                  子供たちの笑顔あふれる料理教室
                </Text>
              </VStack>
              
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} w="full">
                {galleryImages.map((image, index) => (
                  <Box
                    key={index}
                    borderRadius="xl"
                    overflow="hidden"
                    shadow="lg"
                    transition="all 0.3s"
                    _hover={{
                      transform: "scale(1.05)",
                      shadow: "2xl"
                    }}
                  >
                    <AspectRatio ratio={4/3}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        objectFit="cover"
                        fallback={
                          <Box bg="orange.100" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
                            <Icon as={FaHeart} color="orange.400" boxSize={8} />
                          </Box>
                        }
                      />
                    </AspectRatio>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* 特徴・ポイント */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="orange.100">
            <VStack spacing={8}>
              <VStack spacing={4}>
                <Heading size="xl" color="orange.700" textAlign="center" letterSpacing="wide">
                  特徴・ポイント
                </Heading>
                <Text color="gray.600" textAlign="center" fontSize="lg">
                  安心・安全で楽しい学びの時間
                </Text>
              </VStack>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    p={6}
                    bg="orange.50"
                    borderRadius="xl"
                    border="2px"
                    borderColor="orange.200"
                    shadow="md"
                    transition="all 0.3s"
                    _hover={{
                      borderColor: "orange.300",
                      shadow: "lg",
                      transform: "translateY(-2px)"
                    }}
                  >
                    <VStack spacing={4} align="center" textAlign="center">
                      <Box
                        p={3}
                        bg="orange.100"
                        borderRadius="full"
                        border="2px"
                        borderColor="orange.300"
                      >
                        <Icon as={feature.icon} boxSize={6} color="orange.600" />
                      </Box>
                      <Heading size="sm" color="orange.700">
                        {feature.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                        {feature.description}
                      </Text>
                    </VStack>
                  </Card>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* スケジュール・料金情報 */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
            <Card shadow="xl" borderRadius="xl" border="1px" borderColor="orange.200">
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon as={FaClock} boxSize={8} color="orange.500" mb={4} />
                    <Heading size="lg" color="orange.700">
                      スケジュール
                    </Heading>
                  </Box>
                  <VStack spacing={4} align="start">
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="orange" px={3} py={1} borderRadius="full">開催頻度</Badge>
                      <Text fontWeight="medium">月1回（第3土曜日）</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="orange" px={3} py={1} borderRadius="full">時間</Badge>
                      <Text fontWeight="medium">2時間</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="orange" px={3} py={1} borderRadius="full">開催時間</Badge>
                      <Text fontWeight="medium">14:00〜16:00</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="orange" px={3} py={1} borderRadius="full">定員</Badge>
                      <Text fontWeight="medium">親子6組（最大12名）</Text>
                    </Flex>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            <Card shadow="xl" borderRadius="xl" border="1px" borderColor="pink.200">
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon as={FaYenSign} boxSize={8} color="pink.500" mb={4} />
                    <Heading size="lg" color="pink.700">
                      料金
                    </Heading>
                  </Box>
                  <VStack spacing={4} align="start">
                    <Box
                      p={4}
                      bg="pink.50"
                      borderRadius="lg"
                      border="2px"
                      borderColor="pink.200"
                      w="full"
                    >
                      <Badge colorScheme="pink" mb={2} px={3} py={1} borderRadius="full">通常料金</Badge>
                      <Text fontSize="xl" fontWeight="bold" color="pink.700">
                        3,800円
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        親子1組・材料費込み
                      </Text>
                    </Box>
                    <Box
                      p={4}
                      bg="orange.50"
                      borderRadius="lg"
                      border="2px"
                      borderColor="orange.200"
                      w="full"
                    >
                      <Badge colorScheme="orange" mb={2} px={3} py={1} borderRadius="full">初回限定</Badge>
                      <Text fontSize="xl" fontWeight="bold" color="orange.700">
                        2,200円
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
            bg="linear-gradient(135deg, orange.100 0%, pink.100 100%)" 
            p={8} 
            borderRadius="xl" 
            textAlign="center"
            border="1px"
            borderColor="orange.200"
          >
            <VStack spacing={6}>
              <Icon as={FaHeart} boxSize={12} color="orange.500" />
              <Heading size="lg" color="orange.700">
                親子で楽しい時間を過ごしませんか？
              </Heading>
              <Text color="gray.700" fontSize="lg" maxW="600px">
                お子様の「できた！」という笑顔と、親子の素敵な思い出作りを
                お手伝いさせていただきます
              </Text>
              <VStack spacing={4}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button 
                    colorScheme="orange" 
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
              <Button variant="outline" colorScheme="orange" size="lg" borderRadius="full">
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
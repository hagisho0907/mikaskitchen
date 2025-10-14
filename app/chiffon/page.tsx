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
  Flex
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { GiCakeSlice, GiCherry } from 'react-icons/gi';
import { FaHeart, FaGift, FaHome, FaMagic } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ChiffonPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const handleBackToTop = () => {
    router.push('/');
  };

  const features = [
    {
      icon: FaHeart,
      title: "すべて丁寧に手作り",
      description: "計量からメレンゲ作り、焼き上げまで、一つひとつ心を込めて"
    },
    {
      icon: FaHeart,
      title: "「とよんちのたまご」使用",
      description: "贅沢に使用し、コクと風味豊かに仕上げました"
    },
    {
      icon: GiCherry,
      title: "季節限定フレーバー",
      description: "毎月、季節を感じる限定フレーバーをご用意"
    },
    {
      icon: FaMagic,
      title: "特別な食感",
      description: "ふんわりしっとりとした、素材本来の美味しさ"
    }
  ];

  return (
    <Box minH="100vh" bg="pink.25">
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
          backgroundImage="url('/images/chiffon/chiffon.jpg')"
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
          bg="linear-gradient(135deg, pink.400 0%, purple.400 50%, pink.500 100%)"
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

            <Icon as={GiCakeSlice} boxSize={isMobile ? 12 : 16} />
            
            <Heading 
              size={isMobile ? "2xl" : "4xl"} 
              fontWeight="bold"
              textShadow="2px 2px 8px rgba(0,0,0,0.6)"
              letterSpacing="wider"
            >
              シフォンケーキ
            </Heading>
            
            <Text 
              fontSize={isMobile ? "lg" : "2xl"} 
              fontWeight="medium"
              textShadow="1px 1px 4px rgba(0,0,0,0.6)"
              maxW="800px"
              lineHeight="1.6"
            >
              ふんわりしっとりとした特別な食感
            </Text>
            
            <Text 
              fontSize={isMobile ? "sm" : "lg"} 
              opacity="0.9"
              textShadow="1px 1px 2px rgba(0,0,0,0.6)"
              maxW="700px"
            >
              素材本来の美味しさを大切にした手作りシフォンケーキ
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* メインコンテンツ */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12} align="stretch">
          {/* シフォンケーキについて */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="pink.100">
            <VStack spacing={8} textAlign="center">
              <VStack spacing={4}>
                <Heading size="xl" color="pink.700" letterSpacing="wide">
                  シフォンケーキについて
                </Heading>
              </VStack>
              
              <Text fontSize="lg" lineHeight="1.8" color="gray.700" maxW="800px">
                計量からメレンゲ作り、焼き上げまで、すべて丁寧に手作り。
                ふんわりしっとりとした食感のシフォンケーキは、素材本来の美味しさを大切にしています。
              </Text>
              
            </VStack>
          </Box>

          {/* 特徴 */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="purple.100">
            <VStack spacing={10}>
              <VStack spacing={4}>
                <Heading size="xl" color="purple.700" textAlign="center" letterSpacing="wide">
                  こだわりのポイント
                </Heading>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    p={6}
                    bg="purple.50"
                    borderRadius="xl"
                    border="2px"
                    borderColor="purple.200"
                    shadow="lg"
                    transition="all 0.3s"
                    _hover={{
                      borderColor: "purple.300",
                      shadow: "xl",
                      transform: "translateY(-3px)"
                    }}
                  >
                    <VStack spacing={5} align="center" textAlign="center">
                      <Box
                        p={4}
                        bg="purple.100"
                        borderRadius="full"
                        border="3px"
                        borderColor="purple.300"
                      >
                        <Icon as={feature.icon} boxSize={8} color="purple.600" />
                      </Box>
                      
                      <Heading size="md" color="purple.700">
                        {feature.title}
                      </Heading>
                      
                      <Text fontSize="sm" color="gray.700" lineHeight="1.7">
                        {feature.description}
                      </Text>
                    </VStack>
                  </Card>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>


          {/* 用途 */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
            <Card shadow="xl" borderRadius="xl" border="1px" borderColor="pink.200">
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon as={FaHome} boxSize={8} color="pink.500" mb={4} />
                    <Heading size="lg" color="pink.700">
                      ご自宅用に
                    </Heading>
                  </Box>
                  <VStack spacing={4} align="center">
                    <Text fontSize="md" color="gray.700" textAlign="center" lineHeight="1.7">
                      日々の食卓に彩りと幸せをお届け。
                      家族みんなで楽しめる優しい甘さです。
                    </Text>
                    <Box bg="pink.50" p={4} borderRadius="lg" w="full" textAlign="center">
                      <Text fontSize="sm" fontWeight="bold" color="pink.700">
                        毎日のおやつタイムが特別な時間に
                      </Text>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            <Card shadow="xl" borderRadius="xl" border="1px" borderColor="purple.200">
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon as={FaGift} boxSize={8} color="purple.500" mb={4} />
                    <Heading size="lg" color="purple.700">
                      大切な方への贈り物に
                    </Heading>
                  </Box>
                  <VStack spacing={4} align="center">
                    <Text fontSize="md" color="gray.700" textAlign="center" lineHeight="1.7">
                      お誕生日、お祝い事、お世話になった方への
                      心のこもった贈り物として。
                    </Text>
                    <Box bg="purple.50" p={4} borderRadius="lg" w="full" textAlign="center">
                      <Text fontSize="sm" fontWeight="bold" color="purple.700">
                        想いを込めた手作りの温もりをお届け
                      </Text>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* 販売情報 */}
          <Card shadow="xl" borderRadius="xl" border="1px" borderColor="yellow.200">
            <CardBody p={8}>
              <VStack spacing={6} align="stretch">
                <Box textAlign="center">
                  <Icon as={GiCakeSlice} boxSize={8} color="yellow.600" mb={4} />
                  <Heading size="lg" color="yellow.700">
                    販売について
                  </Heading>
                </Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                  <VStack spacing={4} align="start">
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="yellow" px={3} py={1} borderRadius="full">販売日</Badge>
                      <Text fontWeight="medium">木曜日</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="yellow" px={3} py={1} borderRadius="full">時間</Badge>
                      <Text fontWeight="medium">11時〜16時</Text>
                    </Flex>
                  </VStack>
                  <VStack spacing={4} align="start">
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="pink" px={3} py={1} borderRadius="full">予約</Badge>
                      <Text fontWeight="medium">予約、お取り置き承ります</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="purple" px={3} py={1} borderRadius="full">価格</Badge>
                      <Text fontWeight="medium">ミニホール 1100円〜 / カット 400円〜</Text>
                    </Flex>
                  </VStack>
                </SimpleGrid>
              </VStack>
            </CardBody>
          </Card>

          {/* お申し込み・お問い合わせ */}
          <Box 
            bg="linear-gradient(135deg, pink.100 0%, purple.100 100%)" 
            p={8} 
            borderRadius="xl" 
            textAlign="center"
            border="1px"
            borderColor="pink.200"
          >
            <VStack spacing={4}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button 
                  colorScheme="pink" 
                  size="lg"
                  borderRadius="full"
                  px={8}
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "xl"
                  }}
                  transition="all 0.2s"
                >
                  ご予約・お問い合わせ
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
              <Button variant="outline" colorScheme="pink" size="lg" borderRadius="full">
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
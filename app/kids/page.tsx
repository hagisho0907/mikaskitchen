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
      title: "安全で楽しい調理体験",
      description: "子どもたち自身の手で、安全に配慮しながら楽しくお料理を作ります"
    },
    {
      icon: FaUtensils,
      title: "栄養の知識を身につける",
      description: "年齢に合わせて知っておきたい栄養と体の成長のひみつを学べます"
    },
    {
      icon: FaHeart,
      title: "食べることの楽しさ",
      description: "みんなで一緒に作って食べる喜びと、食の大切さを実感できます"
    },
    {
      icon: FaStar,
      title: "体を大切にする心",
      description: "自分の体を大切にする気持ちと、健康な食生活の基礎を育みます"
    }
  ];

  const galleryImages = [
    { src: "/images/child/child1.jpg", alt: "子供たちが楽しくお料理している様子" },
    { src: "/images/child/child2.jpg", alt: "子供たちが一緒に調理を楽しむ様子" },
    { src: "/images/child/child3.jpg", alt: "完成した料理を嬉しそうに見せる子供たち" }
  ];

  return (
    <Box minH="100vh" bg="orange.25">
      <Header />
      
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
          backgroundPosition="center top"
          opacity="0.6"
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

            <Icon as={FaHeart} boxSize={isMobile ? 12 : 16} />
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
              「からだは食べ物からできている」
            </Text>
            
            <Text 
              fontSize={isMobile ? "sm" : "lg"} 
              opacity="0.9"
              textShadow="1px 1px 2px rgba(0,0,0,0.6)"
              maxW="700px"
            >
              そんな大切なことを楽しく学びながら、実際に作って食べる体験をしてみませんか？
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* メインコンテンツ */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12} align="stretch">
          {/* 概要セクション */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="orange.100">
            <VStack spacing={8} textAlign="center">
              <VStack spacing={4}>
                <Heading size="xl" color="orange.700" letterSpacing="wide">
                  子どもお料理教室について
                </Heading>
                <Text fontSize="2xl" fontWeight="bold" color="orange.600" fontStyle="italic">
                  「からだは食べ物からできている」
                </Text>
              </VStack>
              
              <Text fontSize="lg" lineHeight="1.8" color="gray.700" maxW="800px">
                そんな大切なことを楽しく学びながら、実際に作って食べる体験をしてみませんか？
              </Text>
              
              <Text fontSize="lg" lineHeight="1.8" color="gray.700" maxW="800px">
                このお料理教室では、年齢に合わせて知っておきたい栄養や体の成長のひみつをお話ししながら、
                子どもたち自身の手でお料理を作ります。子どもたちが主役となって、特別な体験をしていただきます。
              </Text>
              
              <Box bg="orange.50" p={6} borderRadius="lg" border="2px" borderColor="orange.200" maxW="600px">
                <VStack spacing={3}>
                  <Badge colorScheme="orange" size="lg" px={4} py={1} borderRadius="full">
                    対象年齢
                  </Badge>
                  <Text fontSize="lg" fontWeight="bold" color="orange.700">
                    小学生、中学生
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* 教室の内容セクション */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="green.100">
            <VStack spacing={8}>
              <VStack spacing={4}>
                <Text fontSize="2xl" color="green.600">🥦</Text>
                <Heading size="xl" color="green.700" textAlign="center" letterSpacing="wide">
                  教室の内容
                </Heading>
              </VStack>
              
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} w="full">
                <Card
                  p={6}
                  bg="green.50"
                  borderRadius="xl"
                  border="2px"
                  borderColor="green.200"
                  shadow="md"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: "green.300",
                    shadow: "lg",
                    transform: "translateY(-2px)"
                  }}
                >
                  <VStack spacing={4} align="center" textAlign="center">
                    <Box
                      p={3}
                      bg="green.100"
                      borderRadius="full"
                      border="2px"
                      borderColor="green.300"
                    >
                      <Text fontSize="xl">📚</Text>
                    </Box>
                    <Heading size="sm" color="green.700">
                      栄養のおはなし
                    </Heading>
                    <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                      年齢ごとのからだの成長に必要な栄養についてのおはなし
                    </Text>
                  </VStack>
                </Card>

                <Card
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
                      <Text fontSize="xl">👩‍🍳</Text>
                    </Box>
                    <Heading size="sm" color="orange.700">
                      実際に作って食べる
                    </Heading>
                    <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                      体にやさしいごはんを自分の手で作って、みんなで美味しく食べよう
                    </Text>
                  </VStack>
                </Card>

                <Card
                  p={6}
                  bg="pink.50"
                  borderRadius="xl"
                  border="2px"
                  borderColor="pink.200"
                  shadow="md"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: "pink.300",
                    shadow: "lg",
                    transform: "translateY(-2px)"
                  }}
                >
                  <VStack spacing={4} align="center" textAlign="center">
                    <Box
                      p={3}
                      bg="pink.100"
                      borderRadius="full"
                      border="2px"
                      borderColor="pink.300"
                    >
                      <Text fontSize="xl">💝</Text>
                    </Box>
                    <Heading size="sm" color="pink.700">
                      心を育てる
                    </Heading>
                    <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                      食べることの楽しさを知り、自分の体を大切にする気持ちを育てます
                    </Text>
                  </VStack>
                </Card>
              </SimpleGrid>
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

          {/* 教室の魅力 */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="purple.100">
            <VStack spacing={8}>
              <VStack spacing={4}>
                <Heading size="xl" color="purple.700" textAlign="center" letterSpacing="wide">
                  教室の魅力
                </Heading>
                <Text color="gray.600" textAlign="center" fontSize="lg">
                  子どもたちが楽しく学べる4つのポイント
                </Text>
              </VStack>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    p={6}
                    bg="purple.50"
                    borderRadius="xl"
                    border="2px"
                    borderColor="purple.200"
                    shadow="md"
                    transition="all 0.3s"
                    _hover={{
                      borderColor: "purple.300",
                      shadow: "lg",
                      transform: "translateY(-2px)"
                    }}
                  >
                    <VStack spacing={4} align="center" textAlign="center">
                      <Box
                        p={3}
                        bg="purple.100"
                        borderRadius="full"
                        border="2px"
                        borderColor="purple.300"
                      >
                        <Icon as={feature.icon} boxSize={6} color="purple.600" />
                      </Box>
                      <Heading size="sm" color="purple.700">
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
                    <Box
                      p={4}
                      bg="orange.50"
                      borderRadius="lg"
                      border="1px"
                      borderColor="orange.200"
                      w="full"
                    >
                      <Badge colorScheme="orange" mb={2} px={3} py={1} borderRadius="full">開催時期</Badge>
                      <Text fontSize="lg" fontWeight="bold" color="orange.700">
                        夏休み、冬休み、春休み
                      </Text>
                    </Box>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="orange" px={3} py={1} borderRadius="full">対象</Badge>
                      <Text fontWeight="medium">小学生・中学生</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="orange" px={3} py={1} borderRadius="full">定員</Badge>
                      <Text fontWeight="medium">最大5名</Text>
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
                      <Badge colorScheme="pink" mb={2} px={3} py={1} borderRadius="full">料金</Badge>
                      <Text fontSize="xl" fontWeight="bold" color="pink.700">
                        1,000円
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
            bg="linear-gradient(135deg, orange.100 0%, pink.100 100%)" 
            p={8} 
            borderRadius="xl" 
            textAlign="center"
            border="1px"
            borderColor="orange.200"
          >
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
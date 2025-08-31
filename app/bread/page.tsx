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
import { GiBread, GiWheat } from 'react-icons/gi';
import { FaHeart, FaLeaf } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function BreadPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const handleBackToTop = () => {
    router.push('/');
  };

  const ingredients = [
    {
      name: "塩麹",
      icon: FaLeaf,
      description: "ふんわり柔らかく、ほんのり旨味を感じる生地",
      color: "green"
    },
    {
      name: "喜界島のきび砂糖",
      icon: FaHeart,
      description: "優しい甘さで、からだにすっとなじむ味わい",
      color: "orange"
    },
    {
      name: "国産小麦粉",
      icon: GiWheat,
      description: "しっとり、もっちりとした食感",
      color: "yellow"
    }
  ];

  return (
    <Box minH="100vh" bg="yellow.25">
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
          bg="linear-gradient(135deg, yellow.500 0%, orange.500 50%, red.400 100%)"
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

            <Icon as={GiBread} boxSize={isMobile ? 12 : 16} />
            
            <Heading 
              size={isMobile ? "2xl" : "4xl"} 
              fontWeight="bold"
              textShadow="2px 2px 8px rgba(0,0,0,0.6)"
              letterSpacing="wider"
            >
              各種コッペパンサンド
            </Heading>
            
            <Text 
              fontSize={isMobile ? "lg" : "2xl"} 
              fontWeight="medium"
              textShadow="1px 1px 4px rgba(0,0,0,0.6)"
              maxW="800px"
              lineHeight="1.6"
            >
              からだにやさしいコッペパンサンド
            </Text>
            
            <Text 
              fontSize={isMobile ? "sm" : "lg"} 
              opacity="0.9"
              textShadow="1px 1px 2px rgba(0,0,0,0.6)"
              maxW="700px"
            >
              麹や厳選した食材・調味料で作った手作りの具材を挟みます
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* メインコンテンツ */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12} align="stretch">
          {/* 商品について */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="yellow.100">
            <VStack spacing={8} textAlign="center">
              <VStack spacing={4}>
                <Heading size="xl" color="yellow.700" letterSpacing="wide">
                  コッペパンサンドについて
                </Heading>
              </VStack>
              
              <Text fontSize="lg" lineHeight="1.8" color="gray.700" maxW="800px">
                麹や厳選した食材・調味料で作った手作りの具材を挟みます。
              </Text>
              
              <Box bg="yellow.50" p={6} borderRadius="xl" border="2px" borderColor="yellow.200" maxW="700px">
                <Text fontSize="xl" fontWeight="bold" color="yellow.700">
                  シンプルだけど素材そのものを感じる
                </Text>
                <Text fontSize="lg" color="gray.700" mt={2}>
                  「からだにやさしいコッペパンサンド」です
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* 使用材料 */}
          <Box bg="white" p={8} borderRadius="xl" shadow="xl" border="1px" borderColor="orange.100">
            <VStack spacing={10}>
              <VStack spacing={4}>
                <Heading size="xl" color="orange.700" textAlign="center" letterSpacing="wide">
                  使用材料
                </Heading>
                <Text color="gray.600" textAlign="center" fontSize="lg">
                  厳選された3つの主要材料
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
                {ingredients.map((ingredient, index) => (
                  <Card
                    key={index}
                    p={6}
                    bg={`${ingredient.color}.50`}
                    borderRadius="xl"
                    border="2px"
                    borderColor={`${ingredient.color}.200`}
                    shadow="lg"
                    transition="all 0.3s"
                    _hover={{
                      borderColor: `${ingredient.color}.300`,
                      shadow: "xl",
                      transform: "translateY(-3px)"
                    }}
                  >
                    <VStack spacing={5} align="center" textAlign="center">
                      <Box
                        p={4}
                        bg={`${ingredient.color}.100`}
                        borderRadius="full"
                        border="3px"
                        borderColor={`${ingredient.color}.300`}
                      >
                        <Icon as={ingredient.icon} boxSize={8} color={`${ingredient.color}.600`} />
                      </Box>
                      
                      <Heading size="md" color={`${ingredient.color}.700`}>
                        {ingredient.name}
                      </Heading>
                      
                      <Text fontSize="sm" color="gray.700" lineHeight="1.7">
                        {ingredient.description}
                      </Text>
                    </VStack>
                  </Card>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* 販売情報 */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
            <Card shadow="xl" borderRadius="xl" border="1px" borderColor="yellow.200">
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon as={GiBread} boxSize={8} color="yellow.600" mb={4} />
                    <Heading size="lg" color="yellow.700">
                      販売について
                    </Heading>
                  </Box>
                  <VStack spacing={4} align="start">
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="yellow" px={3} py={1} borderRadius="full">販売日</Badge>
                      <Text fontWeight="medium">毎週水曜・土曜日</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="yellow" px={3} py={1} borderRadius="full">販売時間</Badge>
                      <Text fontWeight="medium">10:00〜売り切れまで</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="yellow" px={3} py={1} borderRadius="full">予約</Badge>
                      <Text fontWeight="medium">予約優先（推奨）</Text>
                    </Flex>
                    <Flex align="center" gap={3}>
                      <Badge colorScheme="yellow" px={3} py={1} borderRadius="full">種類</Badge>
                      <Text fontWeight="medium">各種コッペパンサンド</Text>
                    </Flex>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            <Card shadow="xl" borderRadius="xl" border="1px" borderColor="orange.200">
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon as={FaHeart} boxSize={8} color="orange.500" mb={4} />
                    <Heading size="lg" color="orange.700">
                      こだわり
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
                      <Text fontSize="sm" fontWeight="bold" color="orange.700" mb={2}>
                        手作りの具材
                      </Text>
                      <Text fontSize="xs" color="gray.700">
                        麹や厳選した調味料を使用した自家製具材
                      </Text>
                    </Box>
                    <Box
                      p={4}
                      bg="yellow.50"
                      borderRadius="lg"
                      border="1px"
                      borderColor="yellow.200"
                      w="full"
                    >
                      <Text fontSize="sm" fontWeight="bold" color="yellow.700" mb={2}>
                        素材本来の味
                      </Text>
                      <Text fontSize="xs" color="gray.700">
                        シンプルだけど素材そのものを感じる味わい
                      </Text>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* お申し込み・お問い合わせ */}
          <Box 
            bg="linear-gradient(135deg, yellow.100 0%, orange.100 100%)" 
            p={8} 
            borderRadius="xl" 
            textAlign="center"
            border="1px"
            borderColor="yellow.200"
          >
            <VStack spacing={6}>
              <Icon as={GiBread} boxSize={12} color="yellow.600" />
              <Heading size="lg" color="yellow.700">
                からだにやさしいパンをお試しください
              </Heading>
              <Text color="gray.700" fontSize="lg" maxW="600px">
                厳選した材料と心を込めた手作りで、毎日の食卓を豊かにします
              </Text>
              <VStack spacing={4}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button 
                    colorScheme="yellow" 
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
            </VStack>
          </Box>

          {/* ホームに戻る */}
          <Box textAlign="center" pt={8}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="outline" colorScheme="yellow" size="lg" borderRadius="full">
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
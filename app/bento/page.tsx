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
  Icon 
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FaUtensils } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BentoPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const handleBackToTop = () => {
    router.push('/');
  };

  return (
    <Box minH="100vh" bg="red.50">
      <Header />
      
      {/* ヒーローセクション */}
      <Box
        position="relative"
        h={isMobile ? "500px" : "700px"}
        bg="linear-gradient(135deg, red.100 0%, red.200 100%)"
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

            <Icon as={FaUtensils} boxSize={isMobile ? 12 : 16} />
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
              <Heading size="lg" color="red.700">
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
              <Heading size="lg" color="amber.700" textAlign="center">
                特徴・ポイント
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                <Box
                  p={4}
                  bg="red.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="red.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    発酵食品（味噌・醤油・酢・麹）を積極活用
                  </Text>
                </Box>
                <Box
                  p={4}
                  bg="red.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="red.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    食物繊維豊富な野菜中心のメニュー
                  </Text>
                </Box>
                <Box
                  p={4}
                  bg="red.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="red.400"
                >
                  <Text fontWeight="medium" color="gray.700">
                    玄米・雑穀米で栄養価アップ
                  </Text>
                </Box>
                <Box
                  p={4}
                  bg="red.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="red.400"
                >
                  <Text fontWeight="medium" color="gray.700" fontSize={{ base: "sm", md: "md" }}>
                    お肉料理と魚料理を両方入れているので、しっかりタンパク質も摂れます
                  </Text>
                </Box>
                <Box
                  p={4}
                  bg="red.50"
                  borderRadius="md"
                  borderLeft="4px"
                  borderColor="red.400"
                >
                  <Text fontWeight="medium" color="gray.700" fontSize={{ base: "sm", md: "md" }}>
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
                  <Heading size="md" color="red.700" textAlign="center">
                    スケジュール
                  </Heading>
                  <VStack spacing={3} align="start">
                    <Box>
                      <Badge colorScheme="red" mb={2}>販売日</Badge>
                      <Text>毎週金曜日</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="red" mb={2}>販売時間</Badge>
                      <Text>11:00〜売り切れ次第終了</Text>
                    </Box>
                    <Box>
                      <Badge colorScheme="red" mb={2}>販売方法</Badge>
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
                  <Heading size="md" color="red.700" textAlign="center">
                    料金
                  </Heading>
                  <VStack spacing={3} align="start">
                    <Box>
                      <Badge colorScheme="red" mb={2}>通常料金</Badge>
                      <VStack spacing={1} align="start">
                        <Text fontSize="xl" fontWeight="bold">腸活弁当：1100円</Text>
                        <Text fontSize="xl" fontWeight="bold">のっけ弁当：650円</Text>
                      </VStack>
                    </Box>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* ご予約・お問い合わせ */}
          <Box 
            bg="linear-gradient(135deg, red.100 0%, red.50 100%)"
            p={8} 
            borderRadius="xl" 
            border="1px"
            borderColor="red.200"
            textAlign="center"
          >
            <VStack spacing={4}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button 
                  colorScheme="red" 
                  variant="solid"
                  size="lg"
                  borderRadius="full"
                  px={8}
                  bg="red.500"
                  color="white"
                  _hover={{
                    bg: "red.600",
                    transform: "translateY(-2px)",
                    shadow: "xl"
                  }}
                  transition="all 0.2s"
                >
                  ご予約・お問い合わせ
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
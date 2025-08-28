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
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

interface DetailPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  schedule?: {
    frequency: string;
    duration: string;
    time: string;
    capacity: string;
  };
  pricing?: {
    regular: string;
    trial?: string;
  };
  images: string[];
  backgroundColor?: string;
  accentColor?: string;
}

export default function DetailPageLayout({
  title,
  subtitle,
  description,
  features,
  schedule,
  pricing,
  images,
  backgroundColor = "gray.50",
  accentColor = "green"
}: DetailPageProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const handleBackToTop = () => {
    router.push('/');
  };

  return (
    <Box minH="100vh" bg={backgroundColor}>
      <Header />
      <Navigation />
      
      {/* ヒーローセクション */}
      <Box
        position="relative"
        h={isMobile ? "300px" : "400px"}
        bg={`linear-gradient(135deg, ${accentColor}.100 0%, ${accentColor}.200 100%)`}
        overflow="hidden"
      >
        {/* 背景画像 */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage={`url('${images[0]}')`}
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
              {title}
            </Heading>
            
            <Text 
              fontSize={isMobile ? "lg" : "xl"} 
              fontWeight="medium"
              textShadow="1px 1px 2px rgba(0,0,0,0.5)"
            >
              {subtitle}
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
              <Heading size="lg" color={`${accentColor}.700`}>
                概要・詳細
              </Heading>
              <Text fontSize="lg" lineHeight="1.8" color="gray.700">
                {description}
              </Text>
            </VStack>
          </Box>

          {/* 特徴・ポイント */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack spacing={6}>
              <Heading size="lg" color={`${accentColor}.700`} textAlign="center">
                特徴・ポイント
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                {features.map((feature, index) => (
                  <Box
                    key={index}
                    p={4}
                    bg={`${accentColor}.50`}
                    borderRadius="md"
                    borderLeft="4px"
                    borderColor={`${accentColor}.400`}
                  >
                    <Text fontWeight="medium" color="gray.700">
                      {feature}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* スケジュール・料金情報 */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
            {schedule && (
              <Card shadow="md">
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    <Heading size="md" color={`${accentColor}.700`} textAlign="center">
                      スケジュール
                    </Heading>
                    <VStack spacing={3} align="start">
                      <Box>
                        <Badge colorScheme={accentColor} mb={2}>開催頻度</Badge>
                        <Text>{schedule.frequency}</Text>
                      </Box>
                      <Box>
                        <Badge colorScheme={accentColor} mb={2}>時間</Badge>
                        <Text>{schedule.duration}</Text>
                      </Box>
                      <Box>
                        <Badge colorScheme={accentColor} mb={2}>開催時間</Badge>
                        <Text>{schedule.time}</Text>
                      </Box>
                      <Box>
                        <Badge colorScheme={accentColor} mb={2}>定員</Badge>
                        <Text>{schedule.capacity}</Text>
                      </Box>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            )}

            {pricing && (
              <Card shadow="md">
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    <Heading size="md" color={`${accentColor}.700`} textAlign="center">
                      料金
                    </Heading>
                    <VStack spacing={3} align="start">
                      <Box>
                        <Badge colorScheme={accentColor} mb={2}>通常料金</Badge>
                        <Text fontSize="xl" fontWeight="bold">{pricing.regular}</Text>
                      </Box>
                      {pricing.trial && (
                        <Box>
                          <Badge colorScheme="orange" mb={2}>体験料金</Badge>
                          <Text fontSize="lg" fontWeight="medium">{pricing.trial}</Text>
                        </Box>
                      )}
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            )}
          </SimpleGrid>

          {/* お申し込み・お問い合わせ */}
          <Box bg={`${accentColor}.50`} p={8} borderRadius="lg" textAlign="center">
            <VStack spacing={6}>
              <Heading size="md" color={`${accentColor}.700`}>
                お申し込み・お問い合わせ
              </Heading>
              <Text color="gray.700">
                ご興味をお持ちの方は、お気軽にお問い合わせください。
              </Text>
              <VStack spacing={4}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button 
                    colorScheme={accentColor} 
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
              <Button variant="outline" colorScheme={accentColor}>
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
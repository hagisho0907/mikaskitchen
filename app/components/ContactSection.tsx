'use client';

import { 
  Box, 
  Container, 
  Heading, 
  VStack, 
  HStack, 
  Text, 
  Link,
  SimpleGrid,
  Icon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useBreakpointValue
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaClock, FaInstagram } from 'react-icons/fa';

const contactMethods = [
  {
    icon: FaPhone,
    label: '電話でのお問い合わせ',
    value: '090-1792-2130',
    link: 'tel:090-1792-2130',
    description: '受付時間：10:00-17:00',
    color: 'green.500'
  },
  {
    icon: FaEnvelope,
    label: 'メールでのお問い合わせ',
    value: 'xxxxxxxx@xxxxx.com',
    link: 'mailto:xxxxxxxx@xxxxx.com',
    description: '24時間受付（返信は営業時間内）',
    color: 'blue.500'
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: '@mikanodaidokoro',
    link: 'https://www.instagram.com/mikanodaidokoro/',
    description: '最新情報をお届け',
    color: 'pink.500'
  }
];

export default function ContactSection() {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box py={16} bg="gray.50" id="contact">
      <Container maxW="1200px">
        <VStack gap={12}>
          <Heading size="lg" color="green.700" fontWeight="bold" textAlign="center">
            お問い合わせ・ご連絡
          </Heading>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="full" alignItems="start">
            {/* 左側：連絡方法 */}
            <VStack gap={8} align="stretch">
              <Text fontSize="lg" color="gray.700" textAlign="center" fontWeight="medium">
                お気軽にお問い合わせください
              </Text>

              {contactMethods.map((method, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={6}
                  borderRadius="lg"
                  shadow="md"
                  border="1px"
                  borderColor="gray.100"
                  _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <HStack gap={4} align="start">
                    <Box
                      bg={`${method.color.split('.')[0]}.50`}
                      p={3}
                      borderRadius="lg"
                      flexShrink={0}
                    >
                      <Icon as={method.icon} w={5} h={5} color={method.color} />
                    </Box>
                    <VStack align="start" gap={2} flex="1">
                      <Text fontWeight="bold" color="gray.700">
                        {method.label}
                      </Text>
                      <Link
                        href={method.link}
                        target={method.link.startsWith('http') ? "_blank" : undefined}
                        rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        color="blue.600"
                        fontSize="lg"
                        fontWeight="medium"
                        _hover={{ color: 'blue.700', textDecoration: 'underline' }}
                      >
                        {method.value}
                      </Link>
                      <Text fontSize="sm" color="gray.500">
                        {method.description}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              ))}

              {/* 営業時間の詳細 */}
              <Box
                bg="green.50"
                p={6}
                borderRadius="lg"
                border="1px"
                borderColor="green.200"
              >
                <HStack gap={4} mb={3}>
                  <Icon as={FaClock} color="green.600" w={5} h={5} />
                  <Text fontWeight="bold" color="green.700">
                    営業時間
                  </Text>
                </HStack>
                <VStack align="start" gap={1} pl={9}>
                  <Text color="gray.700">平日: 10:00 - 17:00</Text>
                  <Text color="gray.700">土日祝: 10:00 - 16:00</Text>
                  <Text fontSize="sm" color="gray.600" mt={2}>
                    ※ 教室やイベント開催時は変更となる場合があります
                  </Text>
                </VStack>
              </Box>
            </VStack>

            {/* 右側：お問い合わせフォーム */}
            <Box
              bg="white"
              p={8}
              borderRadius="lg"
              shadow="md"
              border="1px"
              borderColor="gray.100"
            >
              <VStack gap={6} align="stretch">
                <Heading size="md" color="gray.800" textAlign="center">
                  お問い合わせフォーム
                </Heading>

                <VStack gap={4} align="stretch">
                  <FormControl>
                    <FormLabel color="gray.700" fontWeight="medium">
                      お名前 <Text as="span" color="red.500">*</Text>
                    </FormLabel>
                    <Input
                      placeholder="山田太郎"
                      bg="gray.50"
                      border="1px"
                      borderColor="gray.200"
                      _focus={{
                        borderColor: "green.400",
                        boxShadow: "0 0 0 1px #68D391"
                      }}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color="gray.700" fontWeight="medium">
                      メールアドレス <Text as="span" color="red.500">*</Text>
                    </FormLabel>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      bg="gray.50"
                      border="1px"
                      borderColor="gray.200"
                      _focus={{
                        borderColor: "green.400",
                        boxShadow: "0 0 0 1px #68D391"
                      }}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color="gray.700" fontWeight="medium">
                      電話番号
                    </FormLabel>
                    <Input
                      type="tel"
                      placeholder="090-1234-5678"
                      bg="gray.50"
                      border="1px"
                      borderColor="gray.200"
                      _focus={{
                        borderColor: "green.400",
                        boxShadow: "0 0 0 1px #68D391"
                      }}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color="gray.700" fontWeight="medium">
                      お問い合わせ内容 <Text as="span" color="red.500">*</Text>
                    </FormLabel>
                    <Textarea
                      placeholder="教室の詳細について教えてください..."
                      rows={5}
                      bg="gray.50"
                      border="1px"
                      borderColor="gray.200"
                      _focus={{
                        borderColor: "green.400",
                        boxShadow: "0 0 0 1px #68D391"
                      }}
                      resize="vertical"
                    />
                  </FormControl>

                  <Button
                    colorScheme="green"
                    size="lg"
                    w="full"
                    mt={4}
                    _hover={{
                      transform: "translateY(-1px)",
                      shadow: "lg"
                    }}
                    transition="all 0.2s"
                  >
                    送信する
                  </Button>

                  <Text fontSize="xs" color="gray.500" textAlign="center" mt={2}>
                    ※ 現在フォーム機能は実装されていません。<br />
                    実際のお問い合わせは電話またはメールでお願いします。
                  </Text>
                </VStack>
              </VStack>
            </Box>
          </SimpleGrid>

          {/* 管理ページリンク */}
          <Box
            bg="orange.50"
            p={4}
            borderRadius="lg"
            border="1px"
            borderColor="orange.200"
            textAlign="center"
          >
            <Text color="orange.700" fontWeight="medium" mb={2}>
              管理者の方へ
            </Text>
            <Link
              href="/admin"
              color="orange.600"
              fontWeight="medium"
              _hover={{ color: 'orange.700', textDecoration: 'underline' }}
            >
              管理ページへのリンク →
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
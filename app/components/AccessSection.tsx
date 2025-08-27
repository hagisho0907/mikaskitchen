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
  useBreakpointValue
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaTrain, FaPhone, FaExternalLinkAlt } from 'react-icons/fa';

const accessInfo = [
  {
    icon: FaMapMarkerAlt,
    label: '住所',
    value: '千葉県千葉市稲毛区園生町887-4',
    link: null,
    color: 'red.500'
  },
  {
    icon: FaTrain,
    label: '最寄駅',
    value: '千葉都市モノレール 穴川駅',
    link: null,
    color: 'blue.500'
  },
  {
    icon: FaPhone,
    label: '電話番号',
    value: '090-1792-2130',
    link: 'tel:090-1792-2130',
    color: 'green.500'
  }
];

export default function AccessSection() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={16} bg="white" id="access">
      <Container maxW="1200px">
        <VStack gap={10}>
          <Heading size="lg" color="green.700" fontWeight="bold" textAlign="center">
            アクセス
          </Heading>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10} w="full" alignItems="start">
            {/* 左側：アクセス情報 */}
            <VStack gap={8} align="stretch">
              {accessInfo.map((info, index) => (
                <HStack key={index} gap={4} align="start">
                  <Box
                    bg={`${info.color.split('.')[0]}.50`}
                    p={3}
                    borderRadius="lg"
                    flexShrink={0}
                  >
                    <Icon as={info.icon} w={5} h={5} color={info.color} />
                  </Box>
                  <VStack align="start" gap={1} flex="1">
                    <Text fontWeight="bold" color="gray.700" fontSize="sm">
                      {info.label}
                    </Text>
                    {info.link ? (
                      <Link 
                        href={info.link} 
                        color="blue.600" 
                        fontSize="lg"
                        _hover={{ color: 'blue.700', textDecoration: 'underline' }}
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <Text fontSize="lg" color="gray.800">
                        {info.value}
                      </Text>
                    )}
                  </VStack>
                </HStack>
              ))}

              {/* Googleマップリンク */}
              <Box mt={6}>
                <Link
                  href="https://www.google.com/maps/place/テイクアウトカフェ+美加の台所/data=!4m2!3m1!1s0x0:0x86a87182887366cd?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  bg="blue.500"
                  color="white"
                  px={6}
                  py={3}
                  borderRadius="lg"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  fontWeight="medium"
                  _hover={{
                    bg: "blue.600",
                    transform: "translateY(-1px)",
                    shadow: "md"
                  }}
                  transition="all 0.2s"
                >
                  <Icon as={FaMapMarkerAlt} />
                  Googleマップで見る
                  <Icon as={FaExternalLinkAlt} w={3} h={3} />
                </Link>
              </Box>
            </VStack>

            {/* 右側：地図埋め込み（仮置き） */}
            <Box>
              <Box
                w="full"
                h={isMobile ? "250px" : "350px"}
                bg="gray.200"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                overflow="hidden"
                border="2px"
                borderColor="gray.200"
              >
                {/* 仮の地図表示 */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  backgroundImage="url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                  opacity="0.7"
                />
                <Box
                  position="relative"
                  zIndex="1"
                  bg="whiteAlpha.900"
                  px={4}
                  py={2}
                  borderRadius="md"
                  textAlign="center"
                >
                  <Text fontSize="sm" color="gray.600" fontWeight="medium">
                    地図表示エリア
                  </Text>
                  <Text fontSize="xs" color="gray.500" mt={1}>
                    実際にはGoogleマップが埋め込まれます
                  </Text>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>

          {/* 営業時間など追加情報 */}
          <Box
            bg="green.50"
            p={6}
            borderRadius="lg"
            border="1px"
            borderColor="green.200"
            w="full"
          >
            <VStack gap={4}>
              <Heading size="md" color="green.700">
                営業情報
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                <VStack align="start" gap={2}>
                  <Text fontWeight="bold" color="gray.700">営業時間</Text>
                  <Text color="gray.600">平日: 10:00 - 17:00</Text>
                  <Text color="gray.600">土日祝: 10:00 - 16:00</Text>
                </VStack>
                <VStack align="start" gap={2}>
                  <Text fontWeight="bold" color="gray.700">定休日</Text>
                  <Text color="gray.600">不定休</Text>
                  <Text fontSize="sm" color="gray.500">
                    ※ イベント開催時は変更の場合があります
                  </Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
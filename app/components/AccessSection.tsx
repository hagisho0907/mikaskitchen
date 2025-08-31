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
    value: '080-6011-7498',
    link: 'tel:080-6011-7498',
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
                  href="https://www.google.com/maps/place/%E3%83%86%E3%82%A4%E3%82%AF%E3%82%A2%E3%82%A6%E3%83%88%E3%82%AB%E3%83%95%E3%82%A7+%E7%BE%8E%E5%8A%A0%E3%81%AE%E5%8F%B0%E6%89%80/@35.6425076,140.1082017,17z/data=!3m1!4b1!4m6!3m5!1s0x60228531bbf15a39:0x86a87182887366cd!8m2!3d35.6425076!4d140.1082017!16s%2Fg%2F11qfkzkzz1"
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

            {/* 右側：Googleマップ埋め込み */}
            <Box>
              <Box
                w="full"
                h={isMobile ? "250px" : "350px"}
                borderRadius="lg"
                overflow="hidden"
                border="2px"
                borderColor="gray.200"
                shadow="md"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.683464565809!2d140.10564917632845!3d35.64250757259374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60228531bbf15a39%3A0x86a87182887366cd!2z44OG44Kk44Kv44Ki44Km44OI44Kr44OV44KnIOe+juWKoOOBruWPsOaJgA!5e0!3m2!1sja!2sjp!4v1703123456789!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="テイクアウトカフェ 美加の台所の地図"
                />
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
                  <Text color="gray.600">木曜日: 11:00 - 16:00</Text>
                  <Text color="gray.600">金曜日: 11:00 - 完売まで</Text>
                  <Text color="gray.600">土曜日: 7:00 - 完売まで</Text>
                  <Text fontSize="sm" color="gray.500" mt={1}>
                    ※時期によって異なるため、詳細は
                    <Link 
                      href="https://www.instagram.com/mikanodaidokoro/"
                      color="blue.600"
                      textDecoration="underline"
                      _hover={{ color: "blue.700" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      インスタグラム
                    </Link>
                    をご覧ください
                  </Text>
                </VStack>
                <VStack align="start" gap={2}>
                  <Text fontWeight="bold" color="gray.700">定休日</Text>
                  <Text color="gray.600">日曜日〜水曜日</Text>
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
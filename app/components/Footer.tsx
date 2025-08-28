'use client';

import { 
  Box, 
  Container, 
  VStack, 
  HStack, 
  Text, 
  Link, 
  Divider,
  SimpleGrid,
  Icon,
  useBreakpointValue
} from '@chakra-ui/react';
import { FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const quickLinks = [
  { name: 'トップページ', href: '/' },
  { name: '美加の台所について', href: '/#about' },
  { name: 'お知らせ', href: '/#news' },
  { name: 'イベントカレンダー', href: '/#calendar' },
  { name: 'アクセス', href: '/#access' },
  { name: 'お問い合わせ', href: '/contact' },
];

const menuLinks = [
  { name: '腸活教室', href: '/chokatsu' },
  { name: 'アスリートお料理教室', href: '/athlete' },
  { name: '子供お料理教室', href: '/kids' },
  { name: 'パン販売', href: '/bread' },
  { name: 'シフォン販売', href: '/chiffon' },
  { name: '腸活弁当・のっけ弁当', href: '/bento' },
  { name: 'お庭ランチ', href: '/garden' },
];

export default function Footer() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="green.800" color="white" py={12}>
      <Container maxW="1200px">
        <VStack gap={8}>
          {/* メインフッターコンテンツ */}
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 4 }} 
            gap={8} 
            w="full"
          >
            {/* 店舗情報 */}
            <VStack align="start" gap={4}>
              <Text fontSize="lg" fontWeight="bold" color="green.100">
                美加の台所
              </Text>
              <VStack align="start" gap={2}>
                <HStack gap={2}>
                  <Icon as={FaMapMarkerAlt} color="green.300" w={4} h={4} />
                  <Text fontSize="sm" color="green.200">
                    千葉県千葉市稲毛区<br />園生町887-4
                  </Text>
                </HStack>
                <HStack gap={2}>
                  <Icon as={FaPhone} color="green.300" w={4} h={4} />
                  <Link 
                    href="tel:090-1792-2130" 
                    fontSize="sm" 
                    color="green.200"
                    _hover={{ color: "green.100" }}
                  >
                    090-1792-2130
                  </Link>
                </HStack>
                <HStack gap={2}>
                  <Icon as={FaInstagram} color="green.300" w={4} h={4} />
                  <Link 
                    href="https://www.instagram.com/mikanodaidokoro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    fontSize="sm" 
                    color="green.200"
                    _hover={{ color: "green.100" }}
                  >
                    @mikanodaidokoro
                  </Link>
                </HStack>
              </VStack>
            </VStack>

            {/* サイトリンク */}
            <VStack align="start" gap={4}>
              <Text fontSize="md" fontWeight="bold" color="green.100">
                サイトマップ
              </Text>
              <VStack align="start" gap={1}>
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    fontSize="sm"
                    color="green.200"
                    _hover={{ color: "green.100", textDecoration: "underline" }}
                    transition="color 0.2s"
                  >
                    {link.name}
                  </Link>
                ))}
              </VStack>
            </VStack>

            {/* メニューリンク */}
            <VStack align="start" gap={4}>
              <Text fontSize="md" fontWeight="bold" color="green.100">
                メニュー・サービス
              </Text>
              <VStack align="start" gap={1}>
                {menuLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    fontSize="sm"
                    color="green.200"
                    _hover={{ color: "green.100", textDecoration: "underline" }}
                    transition="color 0.2s"
                  >
                    {link.name}
                  </Link>
                ))}
              </VStack>
            </VStack>

            {/* 営業時間 */}
            <VStack align="start" gap={4}>
              <Text fontSize="md" fontWeight="bold" color="green.100">
                営業時間
              </Text>
              <VStack align="start" gap={1}>
                <Text fontSize="sm" color="green.200">
                  平日：10:00 - 17:00
                </Text>
                <Text fontSize="sm" color="green.200">
                  土日祝：10:00 - 16:00
                </Text>
                <Text fontSize="xs" color="green.300" mt={2}>
                  定休日：不定休<br />
                  ※ イベント開催時は変更の場合があります
                </Text>
              </VStack>
              
              <Box mt={4}>
                <Link
                  href="/admin"
                  fontSize="sm"
                  color="orange.200"
                  _hover={{ color: "orange.100", textDecoration: "underline" }}
                >
                  管理ページ
                </Link>
              </Box>
            </VStack>
          </SimpleGrid>

          <Divider borderColor="green.600" />

          {/* コピーライト */}
          <VStack gap={2} textAlign="center">
            <Text fontSize="xs" color="green.300">
              古民家を利用した心と体に優しい自然食品の飲食店
            </Text>
            <Text fontSize="xs" color="green.400">
              © {currentYear} 美加の台所 (Mika's Kitchen). All rights reserved.
            </Text>
            <Text fontSize="xs" color="green.500">
              Built with Next.js & Chakra UI
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
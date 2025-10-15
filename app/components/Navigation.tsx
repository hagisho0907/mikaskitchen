'use client';

import { 
  Box, 
  Flex, 
  useBreakpointValue, 
  HStack, 
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const menuItems = [
  { name: '腸活お料理教室', href: '/chokatsu' },
  { name: 'アスリートお料理教室', href: '/athlete' },
  { name: '子供お料理教室', href: '/kids' },
  { name: 'パン販売', href: '/bread' },
  { name: 'シフォン販売', href: '/chiffon' },
  { name: '腸活弁当・のっけ弁当', href: '/bento' },
  { name: 'お庭ランチ', href: '/garden' },
  { name: 'イベント', href: '/events' },
];

export default function Navigation() {
  const isLarge = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

  // スマホ・タブレットでは何も表示しない
  if (!isLarge) {
    return null;
  }

  return (
    <Box bg="green.50" py={3} borderTop="1px" borderColor="green.100">
      <Flex maxW="1200px" mx="auto" px={6}>
        <HStack spacing={4} mx="auto" flexWrap="nowrap" justify="center" overflowX="auto">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} style={{ textDecoration: 'none' }}>
              <Box
                px={3}
                py={2}
                rounded="md"
                fontSize="xs"
                fontWeight="medium"
                color="green.700"
                cursor="pointer"
                whiteSpace="nowrap"
                minW="fit-content"
                _hover={{
                  bg: "green.100",
                  color: "green.800",
                  transform: "translateY(-1px)"
                }}
                transition="all 0.2s"
              >
                {item.name}
              </Box>
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
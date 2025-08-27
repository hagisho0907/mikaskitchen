'use client';

import { 
  Box, 
  Flex, 
  Link, 
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

const menuItems = [
  { name: '腸活教室', href: '#chokatsu' },
  { name: 'アスリートお料理教室', href: '#athlete' },
  { name: '子供お料理教室', href: '#kids' },
  { name: 'パン販売', href: '#bread' },
  { name: 'シフォン販売', href: '#chiffon' },
  { name: '腸活弁当・のっけ弁当', href: '#bento' },
  { name: 'お庭ランチ', href: '#garden' },
];

export default function Navigation() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isMobile) {
    return (
      <>
        <Box bg="green.50" py={2}>
          <Flex maxW="1200px" mx="auto" px={6} justify="flex-end">
            <IconButton
              aria-label="メニューを開く"
              variant="ghost"
              colorScheme="green"
              onClick={onOpen}
            >
              <HamburgerIcon />
            </IconButton>
          </Flex>
        </Box>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bg="green.50" color="green.800">メニュー</DrawerHeader>
            <DrawerBody p={0}>
              <VStack spacing={0} align="stretch">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={onClose}
                    px={6}
                    py={4}
                    display="block"
                    borderBottom="1px"
                    borderColor="gray.100"
                    _hover={{
                      bg: "green.50",
                      color: "green.700",
                      textDecoration: "none"
                    }}
                    transition="all 0.2s"
                  >
                    {item.name}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <Box bg="green.50" py={3} borderTop="1px" borderColor="green.100">
      <Flex maxW="1200px" mx="auto" px={6}>
        <HStack spacing={8} mx="auto" flexWrap="wrap" justify="center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              px={4}
              py={2}
              rounded="md"
              fontSize="sm"
              fontWeight="medium"
              color="green.700"
              _hover={{
                bg: "green.100",
                color: "green.800",
                textDecoration: "none",
                transform: "translateY(-1px)"
              }}
              transition="all 0.2s"
            >
              {item.name}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
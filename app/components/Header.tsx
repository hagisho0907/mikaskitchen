'use client';

import { 
  Box, 
  Flex, 
  Image, 
  Link, 
  IconButton, 
  useBreakpointValue,
  HStack, 
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons';

const menuItems = [
  { name: '腸活教室', href: '/chokatsu' },
  { name: 'アスリートお料理教室', href: '/athlete' },
  { name: '子供お料理教室', href: '/kids' },
  { name: 'パン販売', href: '/bread' },
  { name: 'シフォン販売', href: '/chiffon' },
  { name: '腸活弁当・のっけ弁当', href: '/bento' },
  { name: 'お庭ランチ', href: '/garden' },
  { name: 'イベント', href: '/events' },
];

export default function Header() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isLarge = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg="white" shadow="md" position="sticky" top="0" zIndex="1000">
      {/* Header Section */}
      <Flex
        maxW="1200px"
        mx="auto"
        px={6}
        py={4}
        align="center"
        justify="space-between"
        h="80px"
      >
        {/* Logo - 中央寄せ */}
        <Flex flex="1" justify="center">
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            <Image
              src="/images/Logo_trans.png"
              alt="美加の台所 - MIKA NO DAIDOKORO"
              height={isMobile ? "50px" : "60px"}
              objectFit="contain"
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.2s"
            />
          </Link>
        </Flex>

        {/* Instagram Icon - 右寄せ */}
        <Box position="absolute" right="6">
          <IconButton
            as={Link}
            href="https://www.instagram.com/mikanodaidokoro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            colorScheme="pink"
            size={isMobile ? "md" : "lg"}
            _hover={{
              bg: "pink.50",
              color: "pink.600",
              transform: "scale(1.1)",
            }}
            transition="all 0.2s"
          />
        </Box>
      </Flex>

      {/* Navigation Section */}
      {isLarge ? (
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
      ) : (
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
      )}

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="green.50" color="green.800">メニュー</DrawerHeader>
          <DrawerBody p={0}>
            <VStack spacing={0} align="stretch">
              {menuItems.map((item, index) => (
                <Box
                  key={index}
                  borderBottom="1px"
                  borderColor="gray.100"
                >
                  <Link href={item.href} style={{ textDecoration: 'none' }}>
                    <Box
                      onClick={onClose}
                      px={6}
                      py={4}
                      display="block"
                      cursor="pointer"
                      _hover={{
                        bg: "green.50",
                        color: "green.700"
                      }}
                      transition="all 0.2s"
                    >
                      {item.name}
                    </Box>
                  </Link>
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
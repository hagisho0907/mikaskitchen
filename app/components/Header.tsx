'use client';

import { Box, Flex, Image, Link, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';

export default function Header() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="header" bg="white" shadow="md" position="sticky" top="0" zIndex="1000">
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
    </Box>
  );
}
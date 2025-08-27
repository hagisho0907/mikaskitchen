'use client';

import { 
  Box, 
  Container, 
  IconButton, 
  Flex, 
  useBreakpointValue,
  Heading
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "美加の台所の外観"
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
    alt: "手作り料理"
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "料理教室の様子"
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "手作りパン"
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "お庭ランチ"
  }
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box py={16} bg="gray.50">
      <Container maxW="1200px">
        <Heading 
          size="lg" 
          color="green.700" 
          textAlign="center" 
          mb={10}
          fontWeight="bold"
        >
          お店の様子
        </Heading>

        <Box position="relative" maxW="800px" mx="auto">
          {/* 画像表示 */}
          <Box 
            position="relative" 
            h={isMobile ? "300px" : "400px"}
            overflow="hidden"
            borderRadius="lg"
            shadow="xl"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                transition: "all 0.3s ease"
              }}
            />
          </Box>

          {/* 左矢印 */}
          <IconButton
            aria-label="前の画像"
            position="absolute"
            left={4}
            top="50%"
            transform="translateY(-50%)"
            bg="whiteAlpha.800"
            color="green.600"
            size="lg"
            borderRadius="full"
            shadow="md"
            _hover={{
              bg: "white",
              transform: "translateY(-50%) scale(1.1)"
            }}
            transition="all 0.2s"
            onClick={prevImage}
          >
            <ChevronLeftIcon w={6} h={6} />
          </IconButton>

          {/* 右矢印 */}
          <IconButton
            aria-label="次の画像"
            position="absolute"
            right={4}
            top="50%"
            transform="translateY(-50%)"
            bg="whiteAlpha.800"
            color="green.600"
            size="lg"
            borderRadius="full"
            shadow="md"
            _hover={{
              bg: "white",
              transform: "translateY(-50%) scale(1.1)"
            }}
            transition="all 0.2s"
            onClick={nextImage}
          >
            <ChevronRightIcon w={6} h={6} />
          </IconButton>

          {/* インジケーター */}
          <Flex justify="center" mt={4} gap={2}>
            {images.map((_, index) => (
              <Box
                key={index}
                w={3}
                h={3}
                borderRadius="full"
                bg={currentIndex === index ? "green.500" : "gray.300"}
                cursor="pointer"
                transition="all 0.2s"
                onClick={() => setCurrentIndex(index)}
                _hover={{
                  bg: currentIndex === index ? "green.600" : "gray.400"
                }}
              />
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
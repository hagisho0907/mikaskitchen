'use client';

import { 
  Box, 
  Container, 
  IconButton, 
  Flex, 
  useBreakpointValue
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

const images = [
  {
    src: "/images/Image1.jpg",
    alt: "美加の台所の様子1"
  },
  {
    src: "/images/Image2.jpg",
    alt: "美加の台所の様子2"
  },
  {
    src: "/images/Image3.jpg",
    alt: "美加の台所の様子3"
  },
  {
    src: "/images/Image4.jpg",
    alt: "美加の台所の様子4"
  },
  {
    src: "/images/Image5.jpg",
    alt: "美加の台所の様子5"
  },
  {
    src: "/images/Image6.jpg",
    alt: "美加の台所の様子6"
  },
  {
    src: "/images/Image7.jpg",
    alt: "美加の台所の様子7"
  }
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box py={16} bg="gray.50">
      <Container maxW="1200px">

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
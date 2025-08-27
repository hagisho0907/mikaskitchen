'use client';

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  useBreakpointValue
} from '@chakra-ui/react';

export default function HeroSection() {
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box
      position="relative"
      h={useBreakpointValue({ base: '60vh', md: '70vh' })}
      bg="linear-gradient(135deg, rgba(56, 161, 105, 0.1) 0%, rgba(68, 202, 99, 0.1) 100%)"
      overflow="hidden"
    >
      {/* 背景画像（仮置き） */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        backgroundSize="cover"
        backgroundPosition="center"
        opacity="0.3"
      />
      
      {/* オーバーレイ */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.300"
      />

      {/* コンテンツ */}
      <Container 
        maxW="1200px" 
        h="full" 
        position="relative" 
        zIndex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} textAlign="center" color="white">
          <Heading 
            size={headingSize} 
            fontWeight="bold"
            textShadow="2px 2px 4px rgba(0,0,0,0.5)"
          >
            美加の台所
          </Heading>
          
          <Text 
            fontSize={textSize} 
            fontWeight="medium"
            textShadow="1px 1px 2px rgba(0,0,0,0.5)"
          >
            Mika's Kitchen
          </Text>
          
          <Text 
            fontSize={useBreakpointValue({ base: 'sm', md: 'md' })} 
            maxW="600px"
            textShadow="1px 1px 2px rgba(0,0,0,0.5)"
            lineHeight="1.6"
          >
            千葉市稲毛区の古民家で、心と体に優しい自然食品をお届けします。
            腸活教室やお料理教室、手作りパンやお弁当で皆様の健康をサポートいたします。
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
'use client';

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  useBreakpointValue,
  Image
} from '@chakra-ui/react';

export default function HeroSection() {
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const isMobile = useBreakpointValue({ base: true, md: false });

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
        backgroundImage="url('/images/Image1.jpg')"
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
          <Image
            src="/images/Logo_trans.png"
            alt="美加の台所 - MIKA NO DAIDOKORO"
            height={isMobile ? "80px" : "120px"}
            objectFit="contain"
            filter="drop-shadow(2px 2px 4px rgba(0,0,0,0.5))"
          />
          
          
          <Box
            bg="whiteAlpha.700"
            p={6}
            borderRadius="xl"
            backdropFilter="blur(10px)"
            border="1px"
            borderColor="whiteAlpha.400"
            maxW="650px"
            shadow="lg"
          >
            <Text 
              fontSize={useBreakpointValue({ base: 'sm', md: 'md' })} 
              color="gray.800"
              lineHeight="1.7"
              textAlign="center"
            >
            美加の台所は、住宅街にある小さなお店です。
            なるべくシンプルで厳選された食材を選び手作りで販売しています。
            数席ですが、お庭で座って召し上がれるスペースもご用意してあります。
            
            お散歩がてら是非覗きに来てください。
            
            腸活講座などの各種講座も開催しております。
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
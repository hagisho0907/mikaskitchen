'use client';

import { Box, Container, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

export default function AboutSection() {
  const headingSize = useBreakpointValue({ base: 'lg', md: 'xl' });

  return (
    <Box py={16} bg="white">
      <Container maxW="1200px">
        <VStack spacing={8} textAlign="center">
          <Heading size="lg" color="green.700" fontWeight="bold">
            美加の台所について
          </Heading>
          
          <Box maxW="800px">
            <Text fontSize="lg" lineHeight="1.8" color="gray.700" mb={6}>
              千葉市稲毛区の古民家を利用した、心と体に優しい自然食品を扱う飲食店です。
            </Text>
            
            <Text fontSize="md" lineHeight="1.8" color="gray.600" mb={4}>
              店主の想いは、食を通じて皆様の健康と幸せをサポートすることです。
              腸活に特化した教室やアスリート向けの料理教室、お子様向けの料理教室など、
              様々な年代の方に食の大切さと楽しさをお伝えしています。
            </Text>
            
            <Text fontSize="md" lineHeight="1.8" color="gray.600" mb={4}>
              手作りのパンやシフォンケーキ、栄養バランスを考えた腸活弁当・のっけ弁当の販売、
              そして季節を感じられるお庭でのランチタイムもご提供しております。
            </Text>
            
            <Text fontSize="md" lineHeight="1.8" color="gray.600">
              古民家の温かい雰囲気の中で、食を通じた豊かな時間をお過ごしください。
              皆様のご来店を心よりお待ちしております。
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
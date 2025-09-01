'use client';

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack,
  SimpleGrid,
  Card,
  CardBody,
  Badge,
  Icon,
  useBreakpointValue 
} from '@chakra-ui/react';
import { FaClock, FaUtensils } from 'react-icons/fa';

export default function AboutSection() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const businessDays = [
    {
      day: "木",
      service: "シフォンケーキ",
      time: "11:00〜16:00",
      color: "orange"
    },
    {
      day: "金",
      service: "腸活弁当",
      time: "11:00〜売り切れまで",
      specialTime: "6月から9月は\nのっけ弁当 11:00〜13:00\nおばんざい 15:30〜売り切れまで",
      color: "blue"
    },
    {
      day: "土",
      service: "コッペパンサンド",
      time: "9:00〜売り切れまで",
      specialTime: "6月から9月はサマータイム 7:00〜売り切れまで",
      color: "red"
    }
  ];

  return (
    <Box py={16} bg="white">
      <Container maxW="1200px">
        <VStack spacing={10} textAlign="center">
          <VStack spacing={4}>
            <Heading size="lg" color="green.700" fontWeight="bold">
              美加の台所について
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px">
              木・金・土曜日営業
            </Text>
            <Text fontSize="md" color="red.600" fontWeight="bold">
              祝日定休日
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, lg: 3 }} gap={6} w="full">
            {businessDays.map((day, index) => (
              <Card
                key={index}
                shadow="lg"
                borderRadius="xl"
                border="2px"
                borderColor={`${day.color}.200`}
                bg={`${day.color}.50`}
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  shadow: "xl"
                }}
              >
                <CardBody p={6}>
                  <VStack spacing={4} align="stretch">
                    <HStack justify="center" spacing={3}>
                      <Box
                        w="50px"
                        h="50px"
                        borderRadius="lg"
                        bg={`${day.color}.500`}
                        color="white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="xl"
                        fontWeight="bold"
                        border="3px"
                        borderColor={`${day.color}.600`}
                      >
                        {day.day}
                      </Box>
                    </HStack>
                    
                    <VStack spacing={3}>
                      <Heading size="md" color={`${day.color}.700`}>
                        {day.service}
                      </Heading>
                      
                      <Badge colorScheme={day.color} fontSize="sm" p={2} borderRadius="md">
                        <Icon as={FaClock} mr={2} />
                        {day.time}
                      </Badge>
                      
                      {day.specialTime && (
                        <Box bg={`${day.color}.100`} p={3} borderRadius="md" border="1px" borderColor={`${day.color}.300`}>
                          <Text fontSize="xs" color={`${day.color}.800`} fontWeight="bold" whiteSpace="pre-line">
                            {day.specialTime}
                          </Text>
                        </Box>
                      )}
                      
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
          
          <Box 
            bg="red.50" 
            p={4} 
            borderRadius="lg" 
            border="2px" 
            borderColor="red.200"
            maxW="600px"
          >
            <Text fontSize="md" color="red.700" fontWeight="bold" textAlign="center">
              売り切れの場合は閉店時間が早まります。ご了承ください。
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
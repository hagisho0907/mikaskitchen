'use client';

import { 
  Box, 
  Container, 
  Heading, 
  VStack, 
  HStack, 
  Text, 
  Badge, 
  Card,
  CardBody,
  useBreakpointValue
} from '@chakra-ui/react';
import { useData } from '../contexts/DataContext';

export default function NewsSection() {
  const { newsItems } = useData();
  const cardColumns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Box py={16} bg="white" id="news">
      <Container maxW="1200px">
        <VStack gap={10}>
          <Heading size="lg" color="green.700" fontWeight="bold" textAlign="center">
            お知らせ
          </Heading>

          <Box w="full">
            <VStack gap={6}>
              {newsItems.map((news) => (
                <Card 
                  key={news.id} 
                  w="full" 
                  shadow="md"
                  _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                  border="1px"
                  borderColor="gray.100"
                >
                  <CardBody>
                    <VStack align="start" gap={3}>
                      <HStack justify="space-between" w="full">
                        <HStack gap={3}>
                          <Text fontSize="sm" color="gray.500">
                            {news.date}
                          </Text>
                          <Badge 
                            colorScheme={
                              news.category === '教室' ? 'green' :
                              news.category === '販売' ? 'blue' :
                              news.category === 'イベント' ? 'purple' : 'gray'
                            }
                            variant="subtle"
                          >
                            {news.category}
                          </Badge>
                        </HStack>
                        {news.isNew && (
                          <Badge colorScheme="red" variant="solid" fontSize="xs">
                            NEW
                          </Badge>
                        )}
                      </HStack>
                      
                      <Heading size="md" color="gray.800">
                        {news.title}
                      </Heading>
                      
                      <Text color="gray.600" lineHeight="1.6">
                        {news.content}
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </VStack>
          </Box>

        </VStack>
      </Container>
    </Box>
  );
}
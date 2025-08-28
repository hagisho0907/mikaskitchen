'use client';

import { 
  Box, 
  Container, 
  Heading, 
  SimpleGrid, 
  VStack, 
  Text, 
  Badge,
  Card,
  CardBody,
  useBreakpointValue
} from '@chakra-ui/react';
import { useData } from '../contexts/DataContext';

const getTypeColor = (type: string) => {
  switch (type) {
    case 'class': return 'green';
    case 'kids': return 'orange';
    case 'lunch': return 'blue';
    case 'athlete': return 'red';
    case 'bread': return 'yellow';
    case 'special': return 'purple';
    default: return 'gray';
  }
};

const getStatusColor = (participants: string) => {
  switch (participants) {
    case '予約受付中':
      return 'blue';
    case '空きあり':
      return 'green';
    case '残りわずか':
      return 'orange';
    case '満席':
      return 'red';
    case 'キャンセル待ち':
      return 'purple';
    case '開催終了':
      return 'gray';
    default:
      return 'gray';
  }
};

export default function EventCalendar() {
  const { events } = useData();
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box py={16} bg="gray.50" id="calendar">
      <Container maxW="1200px">
        <VStack gap={10}>
          <Heading size="lg" color="green.700" fontWeight="bold" textAlign="center">
            イベントカレンダー
          </Heading>

          <SimpleGrid columns={columns} gap={6} w="full">
            {events.map((event) => (
              <Card 
                key={event.id}
                shadow="md"
                _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                border="1px"
                borderColor="gray.200"
                bg="white"
              >
                <CardBody>
                  <VStack align="start" gap={4}>
                    {/* 日付ヘッダー */}
                    <Box
                      bg={`${getTypeColor(event.type)}.500`}
                      color="white"
                      px={4}
                      py={2}
                      borderRadius="md"
                      w="full"
                      textAlign="center"
                    >
                      <Text fontSize="lg" fontWeight="bold">
                        {event.date} ({event.day})
                      </Text>
                      <Text fontSize="sm">
                        {event.time}
                      </Text>
                    </Box>

                    {/* イベント内容 */}
                    <VStack align="start" gap={2} w="full">
                      <Heading size="md" color="gray.800">
                        {event.title}
                      </Heading>
                      
                      <Text color="gray.600" fontSize="sm" lineHeight="1.5">
                        {event.description}
                      </Text>
                      
                      <Badge 
                        colorScheme={getStatusColor(event.participants)}
                        variant="subtle"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        {event.participants}
                      </Badge>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          <Text fontSize="sm" color="gray.500" textAlign="center">
            イベントの詳細・お申し込みはお電話またはメールでお問い合わせください
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
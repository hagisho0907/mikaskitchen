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

const events = [
  {
    id: 1,
    date: '2024-01-20',
    day: '土',
    title: '腸活教室',
    time: '10:00-12:00',
    description: '発酵食品を使った健康レシピをご紹介',
    type: 'class',
    participants: '残り3名'
  },
  {
    id: 2,
    date: '2024-01-25',
    day: '木',
    title: '子供お料理教室',
    time: '15:00-17:00', 
    description: '親子で楽しむ手作りパン教室',
    type: 'kids',
    participants: '満員'
  },
  {
    id: 3,
    date: '2024-01-28',
    day: '日',
    title: 'お庭ランチ',
    time: '11:30-14:00',
    description: '季節の野菜を使った特別ランチ',
    type: 'lunch',
    participants: '予約受付中'
  },
  {
    id: 4,
    date: '2024-02-03',
    day: '土',
    title: 'アスリート料理教室',
    time: '13:00-15:30',
    description: 'スポーツ栄養学に基づいた食事法',
    type: 'athlete',
    participants: '残り2名'
  },
  {
    id: 5,
    date: '2024-02-10',
    day: '土',
    title: 'パン作り体験',
    time: '09:30-12:00',
    description: '天然酵母を使った本格パン作り',
    type: 'bread',
    participants: '残り4名'
  },
  {
    id: 6,
    date: '2024-02-14',
    day: '水',
    title: 'バレンタイン特別教室',
    time: '14:00-16:30',
    description: '手作りチョコレートスイーツ',
    type: 'special',
    participants: '予約受付中'
  }
];

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
  if (participants === '満員') return 'red';
  if (participants.includes('残り')) return 'orange';
  return 'green';
};

export default function EventCalendar() {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box py={16} bg="gray.50" id="calendar">
      <Container maxW="1200px">
        <VStack gap={10}>
          <Heading size="lg" color="green.700" fontWeight="bold" textAlign="center">
            イベントカレンダー
          </Heading>

          <SimpleGrid columns={columns} spacing={6} w="full">
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
            ※ 管理画面から編集可能です<br />
            イベントの詳細・お申し込みはお電話またはメールでお問い合わせください
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
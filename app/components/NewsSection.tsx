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

const newsItems = [
  {
    id: 1,
    date: '2024-01-15',
    category: '教室',
    title: '新春腸活教室開催のお知らせ',
    content: '新年最初の腸活教室を1月20日(土)に開催いたします。発酵食品を使った体に優しいメニューをご紹介します。',
    isNew: true
  },
  {
    id: 2,
    date: '2024-01-10', 
    category: '販売',
    title: 'バレンタイン限定シフォンケーキ予約開始',
    content: 'チョコレートとココアを使った特別なシフォンケーキの予約を開始しました。数量限定となります。',
    isNew: true
  },
  {
    id: 3,
    date: '2024-01-05',
    category: 'イベント',
    title: '1月のお庭ランチメニュー更新',
    content: '冬野菜をふんだんに使った温かいメニューをご用意しました。古民家のお庭で心温まるひとときをお過ごしください。',
    isNew: false
  },
  {
    id: 4,
    date: '2023-12-28',
    category: 'お知らせ',
    title: '年末年始営業のご案内',
    content: '12月29日〜1月3日まで年末年始のお休みをいただきます。新年は1月4日から通常営業いたします。',
    isNew: false
  }
];

export default function NewsSection() {
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

          <Text fontSize="sm" color="gray.500" textAlign="center">
            ※ 管理画面から編集可能です
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
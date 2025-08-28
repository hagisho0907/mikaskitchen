'use client';

import {
  Box,
  Container,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Text,
  Button,
  HStack
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';
import EventManager from './components/EventManager';
import NewsManager from './components/NewsManager';

export default function AdminPage() {
  const router = useRouter();

  const handleBackToMain = () => {
    router.push('/');
  };

  return (
    <Box py={8} bg="gray.50" minH="100vh">
      <Container maxW="1200px">
        <VStack gap={8}>
          <HStack justify="space-between" w="full" align="center">
            <Button
              leftIcon={<ArrowBackIcon />}
              colorScheme="gray"
              variant="outline"
              onClick={handleBackToMain}
            >
              メインページへ戻る
            </Button>
            
            <Heading size="xl" color="green.700" fontWeight="bold">
              管理画面
            </Heading>
            
            <Box w="150px" /> {/* スペーサー */}
          </HStack>
          
          <Text color="gray.600" textAlign="center">
            イベントカレンダーとお知らせの編集・管理を行えます
          </Text>

          <Tabs variant="enclosed" colorScheme="green" w="full">
            <TabList>
              <Tab>イベントカレンダー管理</Tab>
              <Tab>お知らせ管理</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <EventManager />
              </TabPanel>
              <TabPanel>
                <NewsManager />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Container>
    </Box>
  );
}
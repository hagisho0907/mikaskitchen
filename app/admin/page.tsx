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
  Text
} from '@chakra-ui/react';
import EventManager from './components/EventManager';
import NewsManager from './components/NewsManager';

export default function AdminPage() {
  return (
    <Box py={8} bg="gray.50" minH="100vh">
      <Container maxW="1200px">
        <VStack gap={8}>
          <Heading size="xl" color="green.700" fontWeight="bold" textAlign="center">
            管理画面
          </Heading>
          
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
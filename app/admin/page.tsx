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
import { useState, useEffect } from 'react';
import EventManager from './components/EventManager';
import NewsManager from './components/NewsManager';
import LoginForm from './components/LoginForm';

export default function AdminPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // サーバーサイドで認証状態をチェック
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/check-auth', {
        credentials: 'include'
      });
      
      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('認証チェックエラー:', error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/admin/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('ログアウトエラー:', error);
    }
  };

  const handleBackToMain = () => {
    router.push('/');
  };

  // ロード中の表示
  if (isLoading) {
    return (
      <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center">
        <Text>読み込み中...</Text>
      </Box>
    );
  }

  // ログインしていない場合はログイン画面を表示
  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

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
            
            <Button
              colorScheme="red"
              variant="outline"
              onClick={handleLogout}
            >
              ログアウト
            </Button>
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
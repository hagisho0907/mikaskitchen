'use client';

import {
  Box,
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
  Text,
  useToast,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, LockIcon } from '@chakra-ui/icons';
import { useState } from 'react';

interface LoginFormProps {
  onLogin: () => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // API経由でログイン認証を行う
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // ログイン成功時
        localStorage.setItem('adminLoggedIn', 'true');
        toast({
          title: 'ログイン成功',
          description: '管理画面にアクセスします',
          status: 'success',
          duration: 2000,
        });
        onLogin();
      } else {
        // ログイン失敗時
        setError('ユーザー名またはパスワードが正しくありません');
        toast({
          title: 'ログイン失敗',
          description: 'ユーザー名またはパスワードを確認してください',
          status: 'error',
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('ログインエラー:', error);
      setError('ログイン処理中にエラーが発生しました');
      toast({
        title: 'エラー',
        description: 'ログイン処理中にエラーが発生しました',
        status: 'error',
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="md">
        <Box
          bg="white"
          p={8}
          borderRadius="lg"
          shadow="lg"
          border="1px"
          borderColor="gray.200"
        >
          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              {/* ヘッダー */}
              <Box textAlign="center">
                <Box mb={4}>
                  <LockIcon w={8} h={8} color="green.500" />
                </Box>
                <Heading size="lg" color="green.700" mb={2}>
                  管理画面ログイン
                </Heading>
                <Text color="gray.600" fontSize="sm">
                  美加の台所 管理システム
                </Text>
              </Box>

              {/* エラーメッセージ */}
              {error && (
                <Alert status="error" borderRadius="md">
                  <AlertIcon />
                  {error}
                </Alert>
              )}

              {/* ユーザー名入力 */}
              <FormControl isRequired>
                <FormLabel>ユーザー名</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="ユーザー名を入力してください"
                  size="lg"
                />
              </FormControl>

              {/* パスワード入力 */}
              <FormControl isRequired>
                <FormLabel>パスワード</FormLabel>
                <InputGroup size="lg">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="パスワードを入力してください"
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={showPassword ? 'パスワードを非表示' : 'パスワードを表示'}
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {/* ログインボタン */}
              <Button
                type="submit"
                colorScheme="green"
                size="lg"
                width="full"
                isLoading={isLoading}
                loadingText="ログイン中..."
              >
                ログイン
              </Button>

              {/* フッター情報 */}
              <Text fontSize="xs" color="gray.500" textAlign="center">
                認証されたユーザーのみアクセス可能です
              </Text>
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
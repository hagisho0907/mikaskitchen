'use client';

import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  HStack,
  IconButton,
  useToast,
  Badge,
  VStack,
  Switch
} from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useData, NewsItem } from '../../contexts/DataContext';


const newsCategories = [
  { value: '教室', label: '教室', color: 'green' },
  { value: '販売', label: '販売', color: 'blue' },
  { value: 'イベント', label: 'イベント', color: 'purple' },
  { value: 'お知らせ', label: 'お知らせ', color: 'gray' }
];

const emptyNews: Omit<NewsItem, 'id'> = {
  date: new Date().toISOString().split('T')[0],
  category: '教室',
  title: '',
  content: '',
  isNew: true
};

export default function NewsManager() {
  const { newsItems, addNewsItem, updateNewsItem, deleteNewsItem } = useData();
  const [currentNews, setCurrentNews] = useState<Omit<NewsItem, 'id'>>(emptyNews);
  const [editingId, setEditingId] = useState<number | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSave = () => {
    if (!currentNews.title || !currentNews.content) {
      toast({
        title: 'エラー',
        description: 'タイトルと内容は必須項目です',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    if (editingId) {
      updateNewsItem(editingId, currentNews);
      toast({
        title: 'お知らせを更新しました',
        status: 'success',
        duration: 3000,
      });
    } else {
      addNewsItem(currentNews);
      toast({
        title: 'お知らせを追加しました',
        status: 'success',
        duration: 3000,
      });
    }

    handleClose();
  };

  const handleEdit = (news: NewsItem) => {
    setCurrentNews({
      date: news.date,
      category: news.category,
      title: news.title,
      content: news.content,
      isNew: news.isNew
    });
    setEditingId(news.id);
    onOpen();
  };

  const handleDelete = (id: number) => {
    if (window.confirm('このお知らせを削除しますか？')) {
      deleteNewsItem(id);
      toast({
        title: 'お知らせを削除しました',
        status: 'info',
        duration: 3000,
      });
    }
  };

  const handleAdd = () => {
    setCurrentNews({
      ...emptyNews,
      date: new Date().toISOString().split('T')[0]
    });
    setEditingId(null);
    onOpen();
  };

  const handleClose = () => {
    setCurrentNews(emptyNews);
    setEditingId(null);
    onClose();
  };

  const getCategoryColor = (category: string) => {
    const categoryConfig = newsCategories.find(c => c.value === category);
    return categoryConfig?.color || 'gray';
  };

  return (
    <VStack gap={6} align="stretch">
      <Box>
        <Button 
          leftIcon={<AddIcon />} 
          colorScheme="green" 
          onClick={handleAdd}
        >
          新しいお知らせを追加
        </Button>
      </Box>

      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>日付</Th>
              <Th>カテゴリ</Th>
              <Th>タイトル</Th>
              <Th>NEW</Th>
              <Th>操作</Th>
            </Tr>
          </Thead>
          <Tbody>
            {newsItems.map((news) => (
              <Tr key={news.id}>
                <Td>{news.date}</Td>
                <Td>
                  <Badge colorScheme={getCategoryColor(news.category)}>
                    {news.category}
                  </Badge>
                </Td>
                <Td maxW="300px" overflow="hidden" textOverflow="ellipsis">
                  {news.title}
                </Td>
                <Td>
                  {news.isNew && (
                    <Badge colorScheme="red" variant="solid" fontSize="xs">
                      NEW
                    </Badge>
                  )}
                </Td>
                <Td>
                  <HStack gap={2}>
                    <IconButton
                      aria-label="編集"
                      icon={<EditIcon />}
                      size="sm"
                      colorScheme="blue"
                      onClick={() => handleEdit(news)}
                    />
                    <IconButton
                      aria-label="削除"
                      icon={<DeleteIcon />}
                      size="sm"
                      colorScheme="red"
                      onClick={() => handleDelete(news.id)}
                    />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editingId ? 'お知らせを編集' : '新しいお知らせを追加'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={4}>
              <HStack w="full" gap={4}>
                <FormControl>
                  <FormLabel>日付</FormLabel>
                  <Input
                    type="date"
                    value={currentNews.date}
                    onChange={(e) => setCurrentNews({...currentNews, date: e.target.value})}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>カテゴリ</FormLabel>
                  <Select
                    value={currentNews.category}
                    onChange={(e) => setCurrentNews({...currentNews, category: e.target.value})}
                  >
                    {newsCategories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </HStack>

              <FormControl isRequired>
                <FormLabel>タイトル</FormLabel>
                <Input
                  value={currentNews.title}
                  onChange={(e) => setCurrentNews({...currentNews, title: e.target.value})}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>内容</FormLabel>
                <Textarea
                  value={currentNews.content}
                  onChange={(e) => setCurrentNews({...currentNews, content: e.target.value})}
                  rows={5}
                />
              </FormControl>

              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="is-new" mb="0">
                  NEWバッジを表示する
                </FormLabel>
                <Switch
                  id="is-new"
                  isChecked={currentNews.isNew}
                  onChange={(e) => setCurrentNews({...currentNews, isNew: e.target.checked})}
                  colorScheme="green"
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={handleClose}>
              キャンセル
            </Button>
            <Button colorScheme="green" onClick={handleSave}>
              保存
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
}
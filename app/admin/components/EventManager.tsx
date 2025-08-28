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
  VStack
} from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useState } from 'react';

interface Event {
  id: number;
  date: string;
  day: string;
  title: string;
  time: string;
  description: string;
  type: string;
  participants: string;
}

const initialEvents: Event[] = [
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

const eventTypes = [
  { value: 'class', label: '教室', color: 'green' },
  { value: 'kids', label: '子供向け', color: 'orange' },
  { value: 'lunch', label: 'ランチ', color: 'blue' },
  { value: 'athlete', label: 'アスリート', color: 'red' },
  { value: 'bread', label: 'パン作り', color: 'yellow' },
  { value: 'special', label: '特別教室', color: 'purple' }
];

const emptyEvent: Omit<Event, 'id'> = {
  date: '',
  day: '',
  title: '',
  time: '',
  description: '',
  type: 'class',
  participants: '予約受付中'
};

export default function EventManager() {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [currentEvent, setCurrentEvent] = useState<Omit<Event, 'id'>>(emptyEvent);
  const [editingId, setEditingId] = useState<number | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSave = () => {
    if (!currentEvent.title || !currentEvent.date || !currentEvent.time) {
      toast({
        title: 'エラー',
        description: 'タイトル、日付、時間は必須項目です',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    if (editingId) {
      setEvents(events.map(event => 
        event.id === editingId 
          ? { ...currentEvent, id: editingId }
          : event
      ));
      toast({
        title: 'イベントを更新しました',
        status: 'success',
        duration: 3000,
      });
    } else {
      const newId = Math.max(...events.map(e => e.id)) + 1;
      setEvents([...events, { ...currentEvent, id: newId }]);
      toast({
        title: 'イベントを追加しました',
        status: 'success',
        duration: 3000,
      });
    }

    handleClose();
  };

  const handleEdit = (event: Event) => {
    setCurrentEvent({
      date: event.date,
      day: event.day,
      title: event.title,
      time: event.time,
      description: event.description,
      type: event.type,
      participants: event.participants
    });
    setEditingId(event.id);
    onOpen();
  };

  const handleDelete = (id: number) => {
    if (window.confirm('このイベントを削除しますか？')) {
      setEvents(events.filter(event => event.id !== id));
      toast({
        title: 'イベントを削除しました',
        status: 'info',
        duration: 3000,
      });
    }
  };

  const handleAdd = () => {
    setCurrentEvent(emptyEvent);
    setEditingId(null);
    onOpen();
  };

  const handleClose = () => {
    setCurrentEvent(emptyEvent);
    setEditingId(null);
    onClose();
  };

  const getTypeColor = (type: string) => {
    const typeConfig = eventTypes.find(t => t.value === type);
    return typeConfig?.color || 'gray';
  };

  const getTypeLabel = (type: string) => {
    const typeConfig = eventTypes.find(t => t.value === type);
    return typeConfig?.label || type;
  };

  return (
    <VStack gap={6} align="stretch">
      <Box>
        <Button 
          leftIcon={<AddIcon />} 
          colorScheme="green" 
          onClick={handleAdd}
        >
          新しいイベントを追加
        </Button>
      </Box>

      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>日付</Th>
              <Th>タイトル</Th>
              <Th>時間</Th>
              <Th>種類</Th>
              <Th>参加状況</Th>
              <Th>操作</Th>
            </Tr>
          </Thead>
          <Tbody>
            {events.map((event) => (
              <Tr key={event.id}>
                <Td>{event.date} ({event.day})</Td>
                <Td>{event.title}</Td>
                <Td>{event.time}</Td>
                <Td>
                  <Badge colorScheme={getTypeColor(event.type)}>
                    {getTypeLabel(event.type)}
                  </Badge>
                </Td>
                <Td>{event.participants}</Td>
                <Td>
                  <HStack gap={2}>
                    <IconButton
                      aria-label="編集"
                      icon={<EditIcon />}
                      size="sm"
                      colorScheme="blue"
                      onClick={() => handleEdit(event)}
                    />
                    <IconButton
                      aria-label="削除"
                      icon={<DeleteIcon />}
                      size="sm"
                      colorScheme="red"
                      onClick={() => handleDelete(event.id)}
                    />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editingId ? 'イベントを編集' : '新しいイベントを追加'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={4}>
              <FormControl isRequired>
                <FormLabel>タイトル</FormLabel>
                <Input
                  value={currentEvent.title}
                  onChange={(e) => setCurrentEvent({...currentEvent, title: e.target.value})}
                />
              </FormControl>

              <HStack w="full" gap={4}>
                <FormControl isRequired>
                  <FormLabel>日付</FormLabel>
                  <Input
                    type="date"
                    value={currentEvent.date}
                    onChange={(e) => setCurrentEvent({...currentEvent, date: e.target.value})}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>曜日</FormLabel>
                  <Input
                    value={currentEvent.day}
                    onChange={(e) => setCurrentEvent({...currentEvent, day: e.target.value})}
                    placeholder="土"
                  />
                </FormControl>
              </HStack>

              <FormControl isRequired>
                <FormLabel>時間</FormLabel>
                <Input
                  value={currentEvent.time}
                  onChange={(e) => setCurrentEvent({...currentEvent, time: e.target.value})}
                  placeholder="10:00-12:00"
                />
              </FormControl>

              <FormControl>
                <FormLabel>種類</FormLabel>
                <Select
                  value={currentEvent.type}
                  onChange={(e) => setCurrentEvent({...currentEvent, type: e.target.value})}
                >
                  {eventTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>説明</FormLabel>
                <Textarea
                  value={currentEvent.description}
                  onChange={(e) => setCurrentEvent({...currentEvent, description: e.target.value})}
                  rows={3}
                />
              </FormControl>

              <FormControl>
                <FormLabel>参加状況</FormLabel>
                <Input
                  value={currentEvent.participants}
                  onChange={(e) => setCurrentEvent({...currentEvent, participants: e.target.value})}
                  placeholder="予約受付中"
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
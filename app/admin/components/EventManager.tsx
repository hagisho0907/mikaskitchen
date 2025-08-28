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
import { useData, Event } from '../../contexts/DataContext';


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

// 日付から曜日を取得する関数
const getDayFromDate = (dateString: string): string => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  return days[date.getDay()];
};

export default function EventManager() {
  const { events, addEvent, updateEvent, deleteEvent } = useData();
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
      updateEvent(editingId, currentEvent);
      toast({
        title: 'イベントを更新しました',
        status: 'success',
        duration: 3000,
      });
    } else {
      addEvent(currentEvent);
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
      deleteEvent(id);
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
          </Tbody>
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
                    onChange={(e) => {
                      const newDate = e.target.value;
                      const newDay = getDayFromDate(newDate);
                      setCurrentEvent({...currentEvent, date: newDate, day: newDay});
                    }}
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
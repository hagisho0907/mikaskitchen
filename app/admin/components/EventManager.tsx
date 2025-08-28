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

  const getParticipantStatusColor = (status: string) => {
    switch (status) {
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
                <Td>
                  <Badge colorScheme={getParticipantStatusColor(event.participants)}>
                    {event.participants}
                  </Badge>
                </Td>
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
                <HStack>
                  <Select
                    placeholder="開始時間"
                    value={currentEvent.time.split('-')[0] || ''}
                    onChange={(e) => {
                      const startTime = e.target.value;
                      const endTime = currentEvent.time.split('-')[1] || '';
                      setCurrentEvent({...currentEvent, time: endTime ? `${startTime}-${endTime}` : startTime});
                    }}
                  >
                    <option value="7:00">7:00</option>
                    <option value="8:00">8:00</option>
                    <option value="9:00">9:00</option>
                    <option value="9:30">9:30</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                    <option value="16:00">16:00</option>
                    <option value="16:30">16:30</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                  </Select>
                  <Box>〜</Box>
                  <Select
                    placeholder="終了時間"
                    value={currentEvent.time.split('-')[1] || ''}
                    onChange={(e) => {
                      const startTime = currentEvent.time.split('-')[0] || '';
                      const endTime = e.target.value;
                      setCurrentEvent({...currentEvent, time: startTime ? `${startTime}-${endTime}` : endTime});
                    }}
                  >
                    <option value="8:00">8:00</option>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                    <option value="16:00">16:00</option>
                    <option value="16:30">16:30</option>
                    <option value="17:00">17:00</option>
                    <option value="17:30">17:30</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="完売まで">完売まで</option>
                  </Select>
                </HStack>
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
                <Select
                  value={currentEvent.participants}
                  onChange={(e) => setCurrentEvent({...currentEvent, participants: e.target.value})}
                >
                  <option value="予約受付中">予約受付中</option>
                  <option value="空きあり">空きあり</option>
                  <option value="残りわずか">残りわずか</option>
                  <option value="満席">満席</option>
                  <option value="キャンセル待ち">キャンセル待ち</option>
                  <option value="開催終了">開催終了</option>
                </Select>
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
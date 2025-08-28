'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Event {
  id: number;
  date: string;
  day: string;
  title: string;
  time: string;
  description: string;
  type: string;
  participants: string;
}

export interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  content: string;
  isNew: boolean;
}

interface DataContextType {
  events: Event[];
  newsItems: NewsItem[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  updateEvent: (id: number, event: Omit<Event, 'id'>) => void;
  deleteEvent: (id: number) => void;
  addNewsItem: (newsItem: Omit<NewsItem, 'id'>) => void;
  updateNewsItem: (id: number, newsItem: Omit<NewsItem, 'id'>) => void;
  deleteNewsItem: (id: number) => void;
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

const initialNews: NewsItem[] = [
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

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEvents = localStorage.getItem('mikaskitchen-events');
      const savedNews = localStorage.getItem('mikaskitchen-news');
      
      if (savedEvents) {
        setEvents(JSON.parse(savedEvents));
      } else {
        setEvents(initialEvents);
      }
      
      if (savedNews) {
        setNewsItems(JSON.parse(savedNews));
      } else {
        setNewsItems(initialNews);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && events.length > 0) {
      localStorage.setItem('mikaskitchen-events', JSON.stringify(events));
    }
  }, [events]);

  useEffect(() => {
    if (typeof window !== 'undefined' && newsItems.length > 0) {
      localStorage.setItem('mikaskitchen-news', JSON.stringify(newsItems));
    }
  }, [newsItems]);

  const addEvent = (event: Omit<Event, 'id'>) => {
    const newId = Math.max(...events.map(e => e.id), 0) + 1;
    setEvents([...events, { ...event, id: newId }]);
  };

  const updateEvent = (id: number, event: Omit<Event, 'id'>) => {
    setEvents(events.map(e => e.id === id ? { ...event, id } : e));
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter(e => e.id !== id));
  };

  const addNewsItem = (newsItem: Omit<NewsItem, 'id'>) => {
    const newId = Math.max(...newsItems.map(n => n.id), 0) + 1;
    setNewsItems([{ ...newsItem, id: newId }, ...newsItems]);
  };

  const updateNewsItem = (id: number, newsItem: Omit<NewsItem, 'id'>) => {
    setNewsItems(newsItems.map(n => n.id === id ? { ...newsItem, id } : n));
  };

  const deleteNewsItem = (id: number) => {
    setNewsItems(newsItems.filter(n => n.id !== id));
  };

  const value: DataContextType = {
    events,
    newsItems,
    addEvent,
    updateEvent,
    deleteEvent,
    addNewsItem,
    updateNewsItem,
    deleteNewsItem,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
'use client';

import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ImageCarousel from './components/ImageCarousel';
import NewsSection from './components/NewsSection';
import EventCalendar from './components/EventCalendar';
import AccessSection from './components/AccessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      <HeroSection />
      <AboutSection />
      <ImageCarousel />
      <NewsSection />
      <EventCalendar />
      <AccessSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}

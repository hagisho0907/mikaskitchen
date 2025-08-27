'use client';

import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Navigation from './components/Navigation';
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
      <Navigation />
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

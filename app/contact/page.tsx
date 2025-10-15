'use client';

import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      <ContactSection />
      <Footer />
    </Box>
  );
}
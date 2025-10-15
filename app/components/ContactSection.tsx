'use client';

import { 
  Box, 
  Container, 
  Heading, 
  VStack, 
  HStack, 
  Text, 
  Link,
  SimpleGrid,
  Icon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useBreakpointValue,
  useToast
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaClock, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

const contactMethods = [
  {
    icon: FaPhone,
    label: '電話でのお問い合わせ',
    value: '080-6011-7498',
    link: 'tel:080-6011-7498',
    description: '受付時間：10:00-17:00',
    color: 'green.500'
  },
  {
    icon: FaEnvelope,
    label: 'メールでのお問い合わせ',
    value: 'senka08760102@gmail.com',
    link: 'mailto:senka08760102@gmail.com',
    description: '24時間受付（返信は営業時間内）',
    color: 'blue.500'
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: '@mikanodaidokoro',
    link: 'https://www.instagram.com/mikanodaidokoro/',
    description: '最新情報をお届け',
    color: 'pink.500'
  }
];

export default function ContactSection() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Google Forms configuration
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd2ezcMkj6jv3_bAxKLufCdlSfQ_m1x3c426ujRAmjNmn_0pA/formResponse';
    const ENTRY_IDS = {
      name: 'entry.2062181345',
      email: 'entry.18758225',
      phone: 'entry.495145787',
      message: 'entry.2066477936'
    };

    try {
      // Create form data for Google Forms
      const formDataToSend = new FormData();
      formDataToSend.append(ENTRY_IDS.name, formData.name);
      formDataToSend.append(ENTRY_IDS.email, formData.email);
      formDataToSend.append(ENTRY_IDS.phone, formData.phone);
      formDataToSend.append(ENTRY_IDS.message, formData.message);

      // Submit to Google Forms using fetch with no-cors mode
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend
      });

      // Show success message
      toast({
        title: '送信完了',
        description: 'お問い合わせありがとうございます。確認後、ご連絡させていただきます。',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: '送信エラー',
        description: 'フォームの送信に失敗しました。お手数ですが、電話またはメールでお問い合わせください。',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box py={16} bg="gray.50" id="contact">
      <Container maxW="1200px">
        <VStack gap={12}>
          <Heading size="lg" color="green.700" fontWeight="bold" textAlign="center">
            お問い合わせ・ご連絡
          </Heading>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} w="full" alignItems="start">
            {/* 左側：連絡方法 */}
            <VStack gap={8} align="stretch">
              <Text fontSize="lg" color="gray.700" textAlign="center" fontWeight="medium">
                お気軽にお問い合わせください
              </Text>

              {contactMethods.map((method, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={6}
                  borderRadius="lg"
                  shadow="md"
                  border="1px"
                  borderColor="gray.100"
                  _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <HStack gap={4} align="start">
                    <Box
                      bg={`${method.color.split('.')[0]}.50`}
                      p={3}
                      borderRadius="lg"
                      flexShrink={0}
                    >
                      <Icon as={method.icon} w={5} h={5} color={method.color} />
                    </Box>
                    <VStack align="start" gap={2} flex="1">
                      <Text fontWeight="bold" color="gray.700">
                        {method.label}
                      </Text>
                      <Link
                        href={method.link}
                        target={method.link.startsWith('http') ? "_blank" : undefined}
                        rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        color="blue.600"
                        fontSize="lg"
                        fontWeight="medium"
                        _hover={{ color: 'blue.700', textDecoration: 'underline' }}
                      >
                        {method.value}
                      </Link>
                      <Text fontSize="sm" color="gray.500">
                        {method.description}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              ))}

            </VStack>

            {/* 右側：お問い合わせフォーム */}
            <Box
              bg="white"
              p={8}
              borderRadius="lg"
              shadow="md"
              border="1px"
              borderColor="gray.100"
            >
              <form onSubmit={handleSubmit}>
                <VStack gap={6} align="stretch">
                  <Heading size="md" color="gray.800" textAlign="center">
                    お問い合わせフォーム
                  </Heading>

                  <VStack gap={4} align="stretch">
                    <FormControl isRequired>
                      <FormLabel color="gray.700" fontWeight="medium">
                        お名前
                      </FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="山田太郎"
                        bg="gray.50"
                        border="1px"
                        borderColor="gray.200"
                        _focus={{
                          borderColor: "green.400",
                          boxShadow: "0 0 0 1px #68D391"
                        }}
                        isDisabled={isSubmitting}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="gray.700" fontWeight="medium">
                        メールアドレス
                      </FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@email.com"
                        bg="gray.50"
                        border="1px"
                        borderColor="gray.200"
                        _focus={{
                          borderColor: "green.400",
                          boxShadow: "0 0 0 1px #68D391"
                        }}
                        isDisabled={isSubmitting}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel color="gray.700" fontWeight="medium">
                        電話番号
                      </FormLabel>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="090-1234-5678"
                        bg="gray.50"
                        border="1px"
                        borderColor="gray.200"
                        _focus={{
                          borderColor: "green.400",
                          boxShadow: "0 0 0 1px #68D391"
                        }}
                        isDisabled={isSubmitting}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="gray.700" fontWeight="medium">
                        お問い合わせ内容
                      </FormLabel>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="お問い合わせ内容をご記入ください"
                        rows={5}
                        bg="gray.50"
                        border="1px"
                        borderColor="gray.200"
                        _focus={{
                          borderColor: "green.400",
                          boxShadow: "0 0 0 1px #68D391"
                        }}
                        resize="vertical"
                        isDisabled={isSubmitting}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="green"
                      size="lg"
                      w="full"
                      mt={4}
                      isLoading={isSubmitting}
                      loadingText="送信中..."
                      _hover={{
                        transform: "translateY(-1px)",
                        shadow: "lg"
                      }}
                      transition="all 0.2s"
                    >
                      送信する
                    </Button>

                    <Text fontSize="xs" color="gray.500" textAlign="center" mt={2}>
                      ※ 送信されたお問い合わせは管理者に通知されます。
                    </Text>
                  </VStack>
                </VStack>
              </form>
            </Box>
          </SimpleGrid>

          {/* 管理ページリンク */}
          <Box
            bg="orange.50"
            p={4}
            borderRadius="lg"
            border="1px"
            borderColor="orange.200"
            textAlign="center"
          >
            <Text color="orange.700" fontWeight="medium" mb={2}>
              管理者の方へ
            </Text>
            <Link
              href="/admin"
              color="orange.600"
              fontWeight="medium"
              _hover={{ color: 'orange.700', textDecoration: 'underline' }}
            >
              管理ページへのリンク →
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
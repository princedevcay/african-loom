import React from 'react';
import {
  Box, Container, SimpleGrid, Heading, Text, Icon, Stack, useColorModeValue, 
} from '@chakra-ui/react';
import { FaGlobe, FaThumbsUp, FaLock, FaHeart } from 'react-icons/fa';

const WhyBookWithUs = () => {
  const features = [
    {
      icon: FaGlobe,
      title: 'Global Destinations',
      description: 'Explore a wide variety of destinations around the globe.'
    },
    {
      icon: FaThumbsUp,
      title: 'Trusted Quality',
      description: 'Enjoy top-notch experiences with our highly rated packages.'
    },
    {
      icon: FaLock,
      title: 'Secure Booking',
      description: 'Experience hassle-free and secure booking processes.'
    },
    {
      icon: FaHeart,
      title: 'Personalized Services',
      description: 'Get trips that are tailored to your preferences and interests.'
    },
    // Add more features as needed
  ];

  return (
  
    <Container maxW="container.xl" py={5} mb={10}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Why Book a Trip with Us
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {features.map((feature, index) => (
          <Box key={index} textAlign="center" p={5} bg={useColorModeValue('white', 'gray.700')} borderRadius="md" boxShadow="xl">
            <Icon as={feature.icon} w={10} h={10} mb={3} color="blue.500" />
            <Heading as="h3" size="lg" mb={2}>{feature.title}</Heading>
            <Text fontSize="md">{feature.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  
  );
};

export default WhyBookWithUs;

import React from 'react';
import {
  Box, Container, SimpleGrid, Heading, Text, VStack, List, ListItem, useColorModeValue, Image, Button, HStack, 
} from '@chakra-ui/react';

const DestinationsBlogs = () => {
  const destinations = [
    'Albania', 'Argentina', 'Australia', 'Austria', 'Bali', 'Belgium', 'Belize', 'Bhutan', 'Bolivia', 'Botswana',
    'Brazil', 'Bulgaria', 'Cambodia', 'Canada', 'Chile', 'China', 'Colombia', 'Cook Islands', 'Costa Rica', 'Croatia',
    'Cyprus', 'Czech Republic', 'Denmark', 'Ecuador', 'Egypt', 'England And Wales', 'Estonia', 'Fiji', 'Finland', 'France',
    'Germany', 'Ghana', 'Greece', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Island Of Ireland', 'Israel', 'Italy',
    'Jamaica', 'Japan', 'Jordan', 'Kenya', 'Laos', 'Latvia', 'Lithuania', 'Madagascar', 'Maldives', 'Malta',
    // ... continue listing other destinations
  ];

  return (
  
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container maxW="container.xl" py={5}>
        <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={10}>
          {/* Destination Columns */}
          <VStack alignItems="start" spacing={4}>
            <Heading size="md">Destinations</Heading>
            <List spacing={2}>
              {destinations.slice(0, Math.ceil(destinations.length / 3)).map((dest, index) => (
                <ListItem key={index}>{dest}</ListItem>
              ))}
            </List>
          </VStack>
          <VStack alignItems="start" spacing={4}>
            <List spacing={2}>
              {destinations.slice(Math.ceil(destinations.length / 3), Math.ceil(2 * destinations.length / 3)).map((dest, index) => (
                <ListItem key={index}>{dest}</ListItem>
              ))}
            </List>
          </VStack>
          <VStack alignItems="start" spacing={4}>
            <List spacing={2}>
              {destinations.slice(Math.ceil(2 * destinations.length / 3)).map((dest, index) => (
                <ListItem key={index}>{dest}</ListItem>
              ))}
            </List>
          </VStack>

          {/* Blog Posts Column */}
          <VStack alignItems="start" spacing={4}>
            <Heading size="md">Travels Blog</Heading>
            <Text>
              Looking for travel news, inspiration, or more information about Indus tours? Be the pilot of your journey and discover destinations you didn't know existed with insider tips and travel styles on this Indus blog! Fuel your wanderlust as you explore the best off-the-path destinations and awe-inspiring world wonders.
            </Text>
            <Button colorScheme="blue">Read More</Button>
            {/* Add more blog-related content here */}
          </VStack>
          
        </SimpleGrid>
      </Container>
    </Box>
  
  );
};

export default DestinationsBlogs;

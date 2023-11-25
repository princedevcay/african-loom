import React, { useState } from 'react';
import {
  Container, SimpleGrid, Box, Heading, Text, Input, Button, FormControl, FormLabel, useColorModeValue, 
} from '@chakra-ui/react';

const Giveaway = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data
    console.log(formData);
    // Redirect to a thank you page or display a modal, etc.
  };

  return (
    
    <Container maxW="container.xl" py={10} px={{ base: 4, md: 8 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Win a Free Trip!
          </Heading>
          <Text fontSize="lg" mb={4}>
            Enter our giveaway for a chance to win an all-inclusive adventure to your dream destination.
          </Text>
          <Text fontSize="sm">
            Join our contest today and start packing your bags for an unforgettable journey.
          </Text>
        </Box>
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl id="name" mb={4} isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Your Full Name"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
          </FormControl>
          <FormControl id="email" mb={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Your Email Address"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
          </FormControl>
          <Button colorScheme="teal" size="lg" w="full" type="submit">
            Enter to Win!
          </Button>
        </Box>
      </SimpleGrid>
    </Container>

  );
};

export default Giveaway;

import React from 'react';
import {
  Container, Box, Heading, Text, Input, Button, Stack, useColorModeValue, 
} from '@chakra-ui/react';

const Newsletter = () => {
  return (
    
    <Box bg="blue.500" color="white" py={10}>
      <Container maxW="container.xl">
        <Stack spacing={4} textAlign="center">
          <Heading>Stay Updated!</Heading>
          <Text fontSize="lg">Sign up for our newsletter to get the latest news and special offers.</Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent="center">
            <Input placeholder="Enter your email" bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('gray.800', 'white')} />
            <Button colorScheme="teal" px={10}>Subscribe</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Newsletter;

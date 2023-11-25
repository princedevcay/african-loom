import React from 'react';
import {
  Box, Container, Heading, Text, Image, Stack, useColorModeValue,
} from '@chakra-ui/react';

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.700');

  return (
    
    <Container maxW="container.xl" py={5} mb={3}>
      <Stack spacing={5} align="center">
        <Heading as="h2" size="xl">About African Loom Tours, Inc.</Heading>
        <Text fontSize="lg" textAlign="left">
        African Loom Tours, Inc. ("African Loom Tours") is not only a travel and tourism agency, it is a premier American-based destination and event manangement company. We specialize in developing discount travel packages to Africa, with an emphasis on West Africa. African Loom Tours, Inc. reconnects people (both African and otherwise) in the diaspora, to the African continent. We work with any budget and guarantee our clients life-altering experiences.
        </Text>
      </Stack>
    </Container>
  
  );
};

export default About;

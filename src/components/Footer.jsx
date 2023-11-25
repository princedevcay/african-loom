import React from 'react';
import {
  Box, Container, SimpleGrid, Text, Stack, Icon, Link, Divider, useColorModeValue, HStack, Image, Grid, 
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <Box bg={useColorModeValue('gray.200', 'gray.800')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {/* Contacts */}
          <Stack align="flex-start">
            <Text fontWeight="bold">Contact Us</Text>
            <Link href="tel:+1234567890">+1 234 567 890</Link>
            <Link href="mailto:info@example.com">info@africanloomtours.com</Link>
            <Text>4938 Hampden Lane, Suite 168,, Bethesda, MD 20814 </Text>
          </Stack>

          {/* Social Media */}
          <Stack align="flex-start">
            <Text fontWeight="bold">Follow Us</Text>
            <HStack spacing={2}>
              <Icon as={FaFacebook} w={5} h={5} />
              <Icon as={FaTwitter} w={5} h={5} />
              <Icon as={FaInstagram} w={5} h={5} />
              <Icon as={FaYoutube} w={5} h={5} />
              {/* Add more social media icons as needed */}
            </HStack>
          </Stack>

          {/* Privacy and Terms */}
          <Stack align="flex-start">
            <Text fontWeight="bold">Legal</Text>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            {/* Add more legal links as needed */}
          </Stack>

          {/* Payment Options */}
          <Stack align="flex-start">
            <Text fontWeight="bold">Payment Options</Text>
            <Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <HStack justifyContent={{ base: 'center', md: 'flex-start' }}>
              <Icon as={FaCcVisa} w={5} h={5} color={"blue"}/>
              <Icon as={FaCcMastercard} w={5} h={5} color={"red"} />
              <Icon as={FaCcAmex} w={5} h={5} color={"blue"} />
            </HStack>
              {/* Add more payment option logos as needed */}
            </Grid>
          </Box>
          </Stack>
        </SimpleGrid>

        <Divider my={10}  />

        {/* Copyright */}
        <Box>
          <Text textAlign="center" fontSize="sm">
            © {new Date().getFullYear()} African Loom Tours Inc. All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  
  );
};

export default Footer;

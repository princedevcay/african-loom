import React from 'react';
import Slider from 'react-slick';
import {
  Box, Container, Heading, Text, Image, Stack, useColorModeValue, 
} from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Packages = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const adventureTypes = [ {
    title: 'Private Adventures',
    description: 'Tailor-made journeys designed for individual privacy and luxury.',
    imageUrl: 'private.jpeg', // Replace with actual image path
  },
  {
    title: 'Personalized Adventures',
    description: 'Customized trips that match your interests and travel style.',
    imageUrl: 'adventure.jpg', // Replace with actual image path
  },
  {
    title: 'Group Adventures',
    description: 'Join like-minded travelers on exciting group excursions.',
    imageUrl: '2.jpg', // Replace with actual image path
  },
  {
    title: 'Adventure Cruises',
    description: 'Explore remote destinations and enjoy luxury onboard our exclusive adventure cruises.',
    imageUrl: '3.jpg', // Replace with actual image path
  },
  ];

  return (
    
    <Container maxW="container.xl" py={5} mb={5}>
      <Heading as="h2" size="xl" mb={4} textAlign="center">
        Explore Adventure Types
      </Heading>
      <Text fontSize="lg" mb={6} textAlign="center">
        Whether you seek solitude, a tailored experience, or the joy of group travel, we have it all.
      </Text>
      <Slider {...sliderSettings}>
        {adventureTypes.map((type, index) => (
          <Box key={index} bg={useColorModeValue('white', 'white.700')} boxShadow="xl" borderRadius="md" overflow="hidden" w={"100%"} 
          h={""}
          _hover={{ transform: 'translateY(-10px)', transition: 'transform 0.2s' }}>
            <Image src={type.imageUrl} alt={type.title} w={"100%"} h={"300px"} />
            <Stack p={5}>
              <Heading as="h3" size="md">{type.title}</Heading>
              <Text>{type.description}</Text>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Container>
  
  );
};

export default Packages;

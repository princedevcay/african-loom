import Slider from 'react-slick';
import { Box, Text, Button, Flex, Image, SlideFade, VStack,  } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const TourSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const tours = [
    {
      name: 'BEST OF BOTSWANA',
      imageUrl: '22.webp', // Replace with path to your image
      detailUrl: '/santorini-tour' // Replace with your routing path
    },
    {
        name: 'KENYAN DELIGHT WITH LAKE NAIVASHA',
        imageUrl: '2.jpg', // Replace with path to your image
        detailUrl: '/santorini-tour' // Replace with your routing path
      },
      {
        name: 'SPECTACULAR SOUTH AFRICA',
        imageUrl: '3.jpg', // Replace with path to your image
        detailUrl: '/santorini-tour' // Replace with your routing path
      },
  ];

  return (
  
    <Box>
      <Slider {...settings}>
        {tours.map((tour, index) => (
          <Box key={index} position="relative" height="450px" width="full" bgImage={`url(${tour.imageUrl})`} bgSize="cover" bgPos="center">
            <VStack position="absolute" top="14" left="14" alignItems="flex-start" spacing="2" color="white" p="15px">
              <SlideFade in={true} offsetX='-20px' offsetY='0'>
                <Text fontSize="7xl" fontWeight="bold" width="70%" wordBreak="break-word">
                  {tour.name}
                </Text>
              </SlideFade>
              <SlideFade in={true} offsetX='-20px' offsetY='0' delay={0.3}>
                <Button as="a" href={tour.detailUrl} rightIcon={<ArrowForwardIcon />} colorScheme="teal">
                  View Details
                </Button>
              </SlideFade>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Box>
   
  );
};

export default TourSlider;

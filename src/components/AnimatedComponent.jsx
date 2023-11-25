import React from 'react';
import { Box, SlideFade } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1 // Adjust as needed
  });

  return (
    <SlideFade in={inView} offsetY="30px">
      <Box ref={ref}>
        {children}
      </Box>
    </SlideFade>
  );
};

export default AnimatedComponent;

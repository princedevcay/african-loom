import { Flex, Box, Text, Link,  } from '@chakra-ui/react';

const Topbar = () => {
  return (
    
    <Flex bg="gray.100" p={2} color="gray.600">
      <Box>
        <Text>Toll-Free Number: 1-800-123-4567</Text>
      </Box>
      <Box ml="auto">
        <Link href="#" mr={4}>Contact Us</Link>
        <Link href="#" mr={4}>Login</Link>
        <Link href="#" mr={4}>Register</Link>
        {/* Add currency switch component here */}
      </Box>
    </Flex>

  );
};

export default Topbar;

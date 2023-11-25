import { Flex, Box, Text, Image, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Link, Heading } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1rem">
      {/* Logo Section */}
      <Flex justifyContent="center" alignItems="center" p={4}>
      <Image src="logo.png" alt="Logo" w={"100px"} mx={4} /> {/* Adjust size as needed */}
      <Heading fontSize={"2xl"} flex={1} textAlign="right" display={['none', 'none', 'block']}> AFRICAN LOOM TOURS</Heading>
      </Flex>

      {/* Desktop Links */}
      <Box display={{ base: 'none', md: 'block' }}>
        <Link fontSize={"16px"} href="/" mr={4} textTransform={"Uppercase"}>Home</Link>
        <Link fontSize={"16px"} href="/" mr={4} textTransform={"Uppercase"}>Destinations</Link>
        <Link fontSize={"16px"} href="/" mr={4} textTransform={"Uppercase"}>Specials</Link>
        <Link fontSize={"16px"} href="/" mr={4} textTransform={"Uppercase"}>Cruises</Link>
        <Link fontSize={"16px"} href="/" mr={4} textTransform={"Uppercase"}>Groups</Link>
        {/* Add more links as needed */}
      </Box>

      {/* Mobile Menu Button */}
      <IconButton
        display={{ base: 'block', md: 'none' }}
        onClick={onOpen}
        icon={<HamburgerIcon />}
        variant="outline"
        aria-label="Open Menu"
      />

      {/* Mobile Menu Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Link href="#" onClick={onClose} display="block" mb={2}>Home</Link>
            <Link href="#" onClick={onClose} display="block" mb={2}>About</Link>
            <Link href="#" onClick={onClose} display="block" mb={2}>Contact</Link>
            {/* Add more links as needed */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;

import React, { useState } from 'react';
import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Icon,
  Stack,
  useColorModeValue,
  Center,
  
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaMoneyBillAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const TourSearch = () => {
  const [startDate, setStartDate] = useState(null); // For the start date
  const [duration, setDuration] = useState(''); // For the duration
  const [budget, setBudget] = useState(''); // For the budget
  const bgColor = useColorModeValue('white', 'gray.700');

  const isDateInFuture = (date) => {
    return new Date(date).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0);
  };

  return (
    
    <Center position="relative" bottom={{ base: '50px', md: '35px' }} w="full" zIndex={2}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} bg={bgColor} borderRadius="md" boxShadow="2xl" p={4} width={{ base: "auto", md: "90%", lg: "80%" }} maxWidth="1200px" mx="auto">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaMapMarkerAlt} color="green.500" />
          </InputLeftElement>
          <Input type="text" placeholder="Where to?" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaCalendarAlt} color="green.500" />
          </InputLeftElement>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} filterDate={isDateInFuture} customInput={<Input />} dateFormat="MMMM d, yyyy" placeholderText="     Select a date" minDate={new Date()} showDisabledMonthNavigation />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaClock} color="green.500" />
          </InputLeftElement>
          <Input type="text" placeholder="Duration (e.g., 7 days)" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaMoneyBillAlt} color="green.500" />
          </InputLeftElement>
          <Input type="text" placeholder="Budget (e.g., $2000)" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </InputGroup>
        <Button colorScheme="green" px="8">
          Search
        </Button>
      </Stack>
    </Center>
   
  );
};

export default TourSearch;

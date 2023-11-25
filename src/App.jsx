import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import theme from './theme';
// Import other components or pages as needed

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Define other routes here */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;

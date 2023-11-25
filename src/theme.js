// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Fira Sans', sans-serif`,
    body: `'Fira Sans', sans-serif`,
    // You can also add other font weights or styles if needed
  },
});

export default theme;

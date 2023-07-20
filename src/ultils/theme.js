import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#DA1A5D',
      50: '12323',
      100: '1122'
    },
    secondary: {
      main: '#1D96D2',
    },
    error: {
      main: red.A400,
    },
    white: {
      main: '#fff'
    },
    black:{
      main: '#222'
    },
    gray:{
      main: '#888'
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1:{
      fontSize: '2rem',
      color: '#F80759',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h2:{
      fontSize: '1.6rem',
      color: '#F80759',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h3:{
      fontSize: '1.4rem',
      color: '#F80759',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h4:{
      fontSize: '1.2rem',
      color: '#F80759',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h5:{
      fontSize: '1rem',
      color: '#F80759',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h6:{
      fontSize: '1rem',
      color: '#F80759',
      fontWeight: 500,
      lineHeight: 1.5
    },
    body1:{
      fontSize: '1rem',
      color: '#333',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2:{
      fontSize: '0.9rem',
      color: '#333',
      fontWeight: 300,
      lineHeight: 1.5
    }
  },
});

export default theme;
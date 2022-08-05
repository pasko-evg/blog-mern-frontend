import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  shadows: ['none', '1px'],
  palette: {
    primary: {
      main: '#4361ee',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 400,
    },
  },
});

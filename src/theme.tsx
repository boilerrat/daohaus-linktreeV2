import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  typography: {
    fontFamily: 'Manofa, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Manofa';
          src: url('/manofa-regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `,
    },
  },
});

export default theme;

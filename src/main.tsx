import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Make sure the path is correct
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';  // Import your custom theme from theme.tsx

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

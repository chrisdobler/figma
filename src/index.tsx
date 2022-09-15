import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import globalStyles from './globalStyles';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <App />
    </ThemeProvider>
);

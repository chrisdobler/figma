import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from './components/AppBar';

export default function App() {
    return (
        <>
            <AppBar />
            <Container>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        A better way to
                    </Typography>
                    <Typography
                        color="primary.light"
                        variant="h4"
                        component="h1"
                        gutterBottom
                    >
                        ship web apps
                    </Typography>
                </Box>
            </Container>
        </>
    );
}

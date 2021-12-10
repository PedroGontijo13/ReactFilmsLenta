import React from 'react';
import { Container, Typography, } from "@mui/material"
import Box from '@mui/material/Box';

export default function Home() {
    return (
        <Container spacing="margin-top" maxWidth="sm">
            <Typography component="div">
                <Box mt="1rem">
                    <div>
                        <h1><b>Home</b></h1>
                    </div>
                </Box>
            </Typography>
        </Container>
    )
}
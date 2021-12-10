import React from 'react';
import { Container, Typography } from "@mui/material"
import Box from '@mui/material/Box';

export default function CardFilms ({ filmes }) {
    return (
        <div>
            <Container spacing="margin-top" maxWidth="sm">
                <Typography component="div">
                    <Box mt="1rem">
                        {filmes.data.results.map ((filme) => (
                            <div>
                                <img src={"https://image.tmdb.org/t/p/w500/" + (filme.backdrop_path)} alt="background-image" />
                                <h4><b>{filme.original_title}</b></h4>
                                <p>{filme.overview}</p>
                            </div>
                        ))}
                    </Box>
                </Typography>
            </Container>
        </div>
    )
}
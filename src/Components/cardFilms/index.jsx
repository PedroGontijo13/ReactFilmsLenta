import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import { Typography } from '@mui/material';

export default function CardFilms ({ filmes }) {
    const Margin = styled.div`
        margin-top: 1%
    `

    return (
        <Typography align='center'>
            {filmes.data.results.map ((filme) => (
                <Margin>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            image={"https://image.tmdb.org/t/p/w500/" + (filme.backdrop_path)}
                        />
                        <h4><b>{filme.original_title}</b></h4>
                        <p>{filme.overview}</p>
                    </Card>
                </Margin>
            ))}
        </Typography>
    )
}
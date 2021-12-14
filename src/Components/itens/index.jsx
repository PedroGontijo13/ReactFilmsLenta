import * as React from 'react';
import { Typography } from '@mui/material';

export default function Itens({Title}) {
    return (
        <Typography component="div" align="center">
            <a href='#'><h3>{Title}</h3></a>
        </Typography>
    )
}
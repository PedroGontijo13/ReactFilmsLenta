import { Typography } from '@mui/material';
import React from 'react';
import logoLenta from '../../logo/logolenta.png'

export default function LogoLenta() {
    return (
        <Typography component="div" align="center" maxHeight="200px">
            <img src={logoLenta} alt="Logo"/>
        </Typography>
    )
}
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Itens from '../itens';
import LogoLenta from '../logoLenta';

export default function LeftBar() {
    return (
        <div>
            <Grid item height="250px" display="flex" marginRight="10px" alignItems="center" xs={12}>
                <LogoLenta/>
                </Grid>
                <Grid item height="300px" display="flex" paddingLeft="35%" alignItems="center" xs={12}>
                <Itens Title="Home"/>
                </Grid>
                <Grid item height="300px" display="flex" paddingLeft="35%" alignItems="center" xs={12}>
                <Itens Title="Pesquisa"/>
            </Grid>
        </div>
    )
}
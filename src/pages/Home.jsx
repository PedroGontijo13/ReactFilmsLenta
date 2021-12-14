import * as React from 'react';
import Grid from '@mui/material/Grid';
import LogoLenta from '../Components/logoLenta';
import styled from 'styled-components';

export default function Home() {
    
    const Title = styled.h3`
        font-size: 1.5em;
        text-align: center;
        color: #4600dc;
    `;

    return (
        <Grid 
            xs={8}
        >
            <Grid 
                direction="column"
                justifyContent="center"
                height="900px" 
                display="flex" 
                padding="35%" 
                alignItems="center" 
                style={{borderStyle: "solid"}}
                xs={12}
            >
                <Grid item>
                    <LogoLenta/>
                </Grid>
                <Grid item>
                    <Title>
                        Home do LentaEnterprise
                    </Title>
                </Grid>
            </Grid>
        </Grid>
    );
}
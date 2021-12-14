import { Container, TextField, Typography, Button, Grid } from "@mui/material"
import { useState } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import CardFilms from "../Components/cardFilms";

export default function Pesquisa({onFormSubmit}) {

    const [query, setQuery] = useState("")

    
    const [movie, setMovie] = useState("")
  
    const getmovie = (data) => {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=0f3fb72a7a6f467451fc6b155705be3d&query=" + (data.query)).then((response) => {
        console.log(response)
        return (
          setMovie(
          <>
            <CardFilms filmes={response} />
          </>)
        )
      })
    }

    return (
        <Grid
            direction="column"
            justifyContent="center"
            marginTop="100px"
            display="flex" 
            alignItems="center" 
            xs={8}
        >
            <form onSubmit={(event) => {
                event.preventDefault()
                onFormSubmit({query})
                getmovie({query})
            }}>
                <Typography component="div" align="center">
                    <TextField value={query} onChange={event => {
                        setQuery(event.target.value)
                    }} fullWidth margin="normal" id="query" label="Search" variant="outlined" />
                    <Button margin="normal" size="large" type="submit" variant="contained" color="primary">Enviar</Button>
                </Typography>
            </form>
            <Box display="flex" justifyContent="center" flexDirection="row">
              {movie}
            </Box>
        </Grid>
    );
}
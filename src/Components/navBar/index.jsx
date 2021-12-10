import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import axios from 'axios';
import { Container } from '@mui/material';
import CardFilms from '../cardFilms/index'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({onFormSubmit}) {

    const [query, setQuery] = useState("")

    
    const [movie, setMovie] = useState("")
  
    const getmovie = (data) => {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=0f3fb72a7a6f467451fc6b155705be3d&query=" + (data.query)).then((response) => {
        console.log(response)
        return (
          setMovie(
          <>
            <CardFilms filmes={response} />
            <Container spacing="margin-top" maxWidth="sm">
                <Typography component="div">
                    <Box mt="1rem">
                        <img src={"https://image.tmdb.org/t/p/w500/" + (response.data.results[0].backdrop_path)} alt="background-image" />
                        <h4><b>{response.data.results[0].original_title}</b></h4>
                        <p>{response.data.results[0].overview}</p>
                    </Box>
                </Typography>
            </Container>
          </>)
        )
      })
    }

    return (
        <div>
            <Box sx={{ flexGrow: 2 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        LentaFilms
                    </Typography>
                    <Search>
                        
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            onFormSubmit({query})
                            getmovie({query})
                        }}> 
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            value={query} onChange={event => {
                                setQuery(event.target.value)
                            }} 
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </form>
                    </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            <Typography component="div" align="center">
                {movie}
            </Typography>
        </div>
    );
}
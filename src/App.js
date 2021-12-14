import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LeftBar from './Components/leftBar';
import Grid from '@mui/material/Grid';
import Home from './pages/Home';
import Pesquisa from './pages/Pesquisa';
import { createGlobalStyle } from 'styled-components';

function App() {
  const GlobalStyle = createGlobalStyle`
    body{
      background: #696969;
    }
  `
  return (
    <Router>
      <Grid 
        container
        direction="row"
        alignItems="flex-start"
        height="900px"
      >
      <GlobalStyle whiteColor/>
      <LeftBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/pesquisa" element={<Pesquisa onFormSubmit={onFormSubmit}/>}/>
        </Routes>
      </Grid>
    </Router>
  );
}

function onFormSubmit(data) {
  console.log(data.query)
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchAppBar from './Components/navBar/index'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <SearchAppBar onFormSubmit={onFormSubmit}/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

function onFormSubmit(data) {
  console.log(data.query)
}

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Headliner from './components/Headliner';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';


const theme = {
  colors: {
    blueBg: "#E9F8FF",
    blue1: "#273333",
    blue2: "#002138",
    green: "#006B40",
    yellow: "#FFBC00",
    accent: "#DEE1E1",
    text: "#364141",
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Headliner />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/plant/:id" component={DetailsPage}/>
        </Switch>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;

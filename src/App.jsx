import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Headliner from './components/Headliner';
import Hero from './components/Hero';
import Results from './components/Results';

import dataObj from './data.json';

const theme = {
  colors: {
    blueBg: "#E9F8FF",
    blue1: "#273333",
    blue2: "#002138",
    green: "#006B40",
    yellow: "#FFBC00",
    accent: "#DEE1E1",
    text: "#364141",
  },
  break: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px'
  }
};

function App() {
  /** 
   * @note
   * For the sake of simplicity, and since we're not querying
   * for data.json, App() will handle the lifecycle effects of 
   * data filtering. Normally this would be handled by a parent
   * page component with the query hook for testability.
   * */
  const [ filterValue, setFilterValue ] = useState('all');
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ data, setData ] = useState(dataObj.plants);


  useEffect(() => {
    const filteredData = dataObj.plants.filter((plant) => {
      const toxicity = !!plant.toxicity ? 'toxic' : 'nontoxic';
      const commonName = plant.names.common.toLowerCase();
      const sciName = plant.names.scientific.toLowerCase();

      const searchMarch = commonName.includes(searchQuery) || sciName.includes(searchQuery);
      const filterMatch = filterValue === 'all' || filterValue === toxicity;

      return searchMarch && filterMatch;
    })
    
    setData(filteredData);
  }, [filterValue, searchQuery])

  return (
    <ThemeProvider theme={theme}>
        <Headliner />
        <Hero onSearch={setSearchQuery} />
        <Results data={data} onFilter={setFilterValue} filterValue={filterValue} />
    </ThemeProvider>
  );
}

export default App;

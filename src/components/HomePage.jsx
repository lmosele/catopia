import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Results from './Results';

import dataObj from '../data.json';


function HomePage() {
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
    <React.Fragment>
        <Hero onSearch={setSearchQuery} />
        <Results data={data} onFilter={setFilterValue} filterValue={filterValue} />
    </React.Fragment>
  );
}

export default HomePage;

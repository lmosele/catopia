import React, { useState } from 'react';
import styled from 'styled-components';

import { H1, Sub } from './common/Type';
import ResultsGrid from './ResultsGrid';

import data from '../data.json';


/** Styles */
const ResultsContainer = styled.section`
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
`
const ResultsFilters = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
`

/** Render */
const Results = () => {
    const [ isGrid, setIsGrid ] = useState(true);

    return (
        <ResultsContainer>
            <ResultsFilters></ResultsFilters>
            {isGrid ? <ResultsGrid data={data.plants} /> : '<ResultsList />'}
        </ResultsContainer>
    );
}

export default Results;
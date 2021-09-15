import React from 'react';
import styled from 'styled-components';

import GridItem from './GridItem';


/** Styles */
const GridContainer = styled.div`
    display: grid;
    margin: 30px 0;
    padding: 0;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: minmax(320px, auto);
`
/** Render */
const ResultsGrid = ({ data }) => {
    return (
        <GridContainer>
            {data.map(({ image, names, toxicity, id }) => (
                <GridItem 
                    key={id} 
                    plantId={id}
                    image={image} 
                    commonName={names.common} 
                    toxicity={toxicity}
                />
            ))}
        </GridContainer>
    );
}

export default ResultsGrid;
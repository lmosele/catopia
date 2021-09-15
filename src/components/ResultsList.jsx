import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';


/** Styles */
const ListContainer = styled.ul`
    margin: 30px 0 0 0;
    padding: 0;
`
/** Render */
const ResultsGrid = ({ data }) => {
    return (
        <ListContainer>
            {data.map(({ image, names, toxicity, details }) => (
                <ListItem 
                    key={names.common} 
                    image={image} 
                    names={names} 
                    toxicity={toxicity}
                    details={details}
                />
            ))}
        </ListContainer>
    );
}

export default ResultsGrid;
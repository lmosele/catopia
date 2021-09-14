import React from 'react';
import styled from 'styled-components';

import { H3, Sub } from './common/Type';


/** Styles */
const GridContainer = styled.ul`
    display: grid;
    margin: 0;
    padding: 0;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(320px, auto);
    @media only screen and (max-width: ${({theme}) => theme.break['xs']}) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const GridItemContainer = styled.li`
    display: flex;
    list-style: none;
    margin: 0;
    background-color: grey;
`

const GridItem = ({commonName, image, toxicity}) => (
    <GridItemContainer>
        <img alt={commonName} src={`http://localhost:3000/images/${image}`} />
        <footer>
            <H3>{commonName}</H3>
        </footer>
    </GridItemContainer>
);

/** Render */
const ResultsGrid = ({ data }) => {
    console.log(process.env)
    return (
        <GridContainer>
            {data.map(({ image, names, toxicity }) => {
                console.log(image)
                return (<GridItem image={image} commonName={names.common} />)
            })}
        </GridContainer>
    );
}



export default ResultsGrid;
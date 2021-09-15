import React, { useState } from 'react';
import styled from 'styled-components';

import { H3 } from './common/Type';
import Tag from './common/Tag';

import leafLoader from '../assets/leaf-loader.svg'


/** Styles */
const GridItemContainer = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    overflow: hidden;
    background-color: white;
    border: 1px solid ${({theme}) => theme.colors['accent']};
    border-radius: 0.5em;
    max-width: 320px;
    transition: 0.3s all ease-in-out;
    &:hover,
    &:focus {
        border: 1px solid ${({theme}) => theme.colors['green']};
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        box-shadow: 5px 5px 13px 2px rgba(0,0,0,0.5);
    }
`

const GridImage = styled.img`
    display: flex;
    flex-grow: 1;
    width: 100%;
    &.loading {
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
        background-image: url(${leafLoader});
        background-repeat: no-repeat;
        background-position: 50% 50%;
        animation: 1s pulse ease-in-out infinite forwards;
    }
    @keyframes pulse {
        0% {
            opacity: 0.1;
        }
        100% {
            opacity: 0.9;
        }
        
    }
`

const GridContent = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`

/** Render */
const GridItem = ({ commonName, image, toxicity }) => {
    const [isLoaded, setLoaded] = useState(false);

    const handleLoaded = () => {
        setLoaded(true)
    }

    return ( 
        <GridItemContainer tabIndex={0} title={`See more information about ${commonName}`}>
            <GridImage className={!isLoaded && 'loading'} onLoad={handleLoaded} alt={commonName} src={`images/${image}`}  /> 
            <GridContent>
                <H3>{commonName}</H3>
                <Tag className={toxicity ? "toxic" : 'safe'}>{toxicity ? 'Toxic' : 'Non-Toxic'}</Tag>
            </GridContent>
        </GridItemContainer>
    );
}


export default GridItem;
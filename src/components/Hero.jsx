import React from 'react';
import styled from 'styled-components';

import { H1, Sub } from './common/Type';
import SearchField from './Search';

import catLeft from '../assets/cat-left.svg'
import catRight from '../assets/cat-right.svg'

/** Styles */
const HeroContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colors['blueBg']};
    min-height: 320px;
`;
const Column = styled.div`
    display: inline-flex;
    flex-direction: column;
    position: relative;
    width: 25%;
    &.center {
        flex-grow: 1;
        align-self: center;
        padding: 0 40px;
    }
    @media only screen and (max-width: 1024px) {
        &.hide-md {
            display: none;
        }
    }
    @media only screen and (max-width: 780px) {
        &.hide-sm {
            display: none;
        }
    }
`
const HeroImage = styled.img`
    position: absolute; 
    &.leftCat {
        bottom: 10%;
        right: 15%;
    }
    &.rightCat {
        bottom: 0%;
        left: 5%;
    }
`

/** Render */
const Hero = ({ onSearch }) => {
    return (
        <HeroContainer>
            <Column className="hide-md">
                <HeroImage className="leftCat" alt="Cute cat safely behind a Bird's Nest Fern" src={catLeft} />
            </Column>

            <Column className="center">
                <H1>Can my cat eat that?</H1>
                <Sub>Search and filter common house plants to see whats safe.</Sub>
                <SearchField onSearch={onSearch} />
            </Column>

            <Column className="hide-sm">
                <HeroImage className="rightCat" alt="Cute cat next to a dangerous Monstera plant" src={catRight} />
            </Column>
        </HeroContainer>
    )
}

export default Hero;
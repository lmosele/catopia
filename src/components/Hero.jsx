import React from 'react';
import styled from 'styled-components';

import { H1, P } from './common/Type';
import catLeft from '../assets/cat-left.svg'
import catRight from '../assets/cat-right.svg'

const HeroContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme['blueBg']};
    `;

const Hero = () => {
    return (
        <HeroContainer>
            <div>
                foo
            </div>
            <div>
            <H1>Can my cat eat that?</H1>
            <P>Search and filter common house plants to see whats safe.</P>
            {/* <SearchInput /> */}
            </div>
            <div>
                bar
            </div>
        </HeroContainer>
    )
}

export default Hero;
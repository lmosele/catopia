import React from 'react';
import styled from 'styled-components';
import catopiaLogo from '../assets/catopia-horizontal.svg'

const HeadlinerContainer = styled.header`
    display: flex;
    background-color: ${({ theme }) => theme['blue2']};
    width: 100%;
    height: 4.5em;
`

const HeadlinerImage = styled.img`
    max-width: 135px;
    margin-left: 30px;
`

const Headliner = () => {
    return (
        <HeadlinerContainer>
            <HeadlinerImage alt="Catopia Logo" src={catopiaLogo} />
        </HeadlinerContainer>
    )
}

export default Headliner;
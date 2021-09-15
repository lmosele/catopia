import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import catopiaLogo from '../assets/catopia-horizontal.svg'

/** Styles */
const HeadlinerContainer = styled.header`
    display: flex;
    background-color: ${({ theme }) => theme.colors['blue2']};
    width: 100%;
    height: 4.5em;
    align-items: center;
`

const LogoLink = styled(Link)`
    height: 40px;
    > img {
        max-width: 135px;
        margin-left: 30px;
    }
`


/** Render */
const Headliner = () => {
    return (
        <HeadlinerContainer>
            <LogoLink to="/" title="Back to home">
                <img alt="Catopia Logo" src={catopiaLogo} />
            </LogoLink>
        </HeadlinerContainer>
    )
}

export default Headliner;
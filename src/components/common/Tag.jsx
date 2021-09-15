import styled from "styled-components";

/** Displays Toxic & NonToxic Labels */
const Tag = styled.span`
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-self: center;
    align-content: center;
    padding: 5px 10px;
    border-radius: 3em;
    font-weight: 500;
    &.toxic {
        background-color: ${({theme}) => theme.colors['yellow']};
    }
    &.safe {
        color: white;
        background-color: ${({theme}) => theme.colors['green']};
    }
`

export default Tag;
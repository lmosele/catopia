import styled from 'styled-components';

/** 
 * Styles
 * Handles all styles for reusable themed typography based on mockups
 */
export const H1 = styled.h1`
    font-size: 2.5em;
    font-weight: 900;
    color: ${({ theme }) => theme.colors['blue1']};
`;

export const H3 = styled.h3`
    font-size: 1.1em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors['blue1']};
`;

export const Sub = styled.p`
    font-size: 1.3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['text']};
`;

export const P = styled.p`
    font-size: 1em;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['text']};
`;

export const Span = styled.span`
    font-size: 0.9em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors['blue1']};
`;
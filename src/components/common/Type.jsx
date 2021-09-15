import styled from 'styled-components';

/** 
 * Handles styles for reusable themed typography based on mockups
 */
export const H1 = styled.h1`
    font-size: 2.5em;
    font-weight: 900;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors['blue1']};
`;

export const H3 = styled.h3`
    font-size: 1.1em;
    font-weight: 500;
    margin: 0;
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
    margin-top: 0;
    max-width: ${({ maxWidth }) => maxWidth || '100%'};
    color: ${({ theme }) => theme.colors['text']};
    &.bold {
        font-weight: 500;
    }
    &.line {
        line-height: 2.5em;
        margin: 0 auto;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow:hidden;
    }
`;

export const Span = styled.span`
    font-size: 0.9em;
    font-weight: 300;
    color: ${({ theme }) => theme.colors['blue1']};
    &.spaced {
        margin-bottom: 15px;
    }
    &.bold {
        font-weight: 500;
    }
    &.italic {
        font-style: italic;
    }
`;
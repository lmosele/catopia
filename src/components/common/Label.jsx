import styled from 'styled-components';

/** Accessible Label for screen readers */
const Label = styled.label`
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
`;

export default Label;
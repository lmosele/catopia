import React from 'react';
import styled from 'styled-components';

import { H3, Span, P } from './common/Type';
import Tag from './common/Tag';

/** Styles */
const ListItemContainer = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 15px;
    list-style: none;
    background-color: white;
    border: 1px solid ${({theme}) => theme.colors['accent']};
    border-radius: 0.5em;
    transition: 0.3s all ease-in-out;
    &:hover,
    &:focus {
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        border: 1px solid ${({theme}) => theme.colors['green']};
        box-shadow: 5px 5px 13px 2px rgba(0,0,0,0.5);
    }
`

const ListImage = styled.img`
    display: flex;
    width: 48px;
    height: 48px;
    border-radius: 48px;
    margin-right: 30px;
`

const ListNames = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`

const ListContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    flex-basis: 100%;
    flex: 6;
    overflow:hidden;
`

/** Render */
const ListItem = ({ names, image, toxicity, details }) => {
    return ( 
        <ListItemContainer tabIndex={0} title={`See more information about ${names.common}`}>
            <ListImage alt={names.common} src={`images/${image}`}  /> 
            <ListNames>
                <H3>{names.common}</H3>
               <Span className="italic">{names.scientific}</Span>
            </ListNames>
            <ListContent>
                <Tag className={toxicity ? "toxic" : 'safe'}>{toxicity ? 'Toxic' : 'Non-Toxic'}</Tag>
                <P className="line" maxWidth="80%">{details}</P>
            </ListContent>
        </ListItemContainer>
    );
}


export default ListItem;
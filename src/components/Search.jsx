import React, { useState } from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';

/** Styles */

const SearchForm = styled.form`
    display: flex;
    width: 100%;
    max-width: 50em;
`
const SearchLabel = styled.label`
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
`;

const SearchInput = styled.input`
    padding: 1em;
    border-top-right-radius: 2em;
    border-bottom-right-radius: 2em;
    border: 1px solid ${({theme}) => theme['accent']};
    border-left: 0;
    font-size: 1.1em;
    width: 100%;
`;

const SearchButton = styled.button`
    padding: 1em;
    border-top-left-radius: 2em;
    border-bottom-left-radius: 2em;
    background-color: white;
    border: 1px solid ${({theme}) => theme['accent']};
    border-right: 0;
    &:hover,
    &:active,
    &:focus {
        cursor: pointer;
        color: white;
        background-color: ${({theme}) => theme['green']};
    }
`;

/** Render */
const SearchField = ({ onSearch }) => {
    const [ searchQuery, setSearchQuery ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();   
        console.log(searchQuery)
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.currentTarget.value)
    }

    return (
        <SearchForm onSubmit={handleSubmit}>
            {/* Screen Reader Only */}
            <SearchLabel for="search">Search safe &amp; unsafe plants</SearchLabel>

            <SearchButton value="search">
                <Search />
            </SearchButton>
            
            <SearchInput 
                value={searchQuery} 
                onChange={handleInputChange} 
                id="search" 
                type="text" 
                placeholder="Spider plant, fiddle leaf fig, etc..." 
            />
        </SearchForm>
    )
}

export default SearchField;
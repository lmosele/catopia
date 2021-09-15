import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, List } from 'react-feather';

import ResultsGrid from './ResultsGrid';
import ResultsList from './ResultsList';
import Label from './common/Label'
import { Span } from './common/Type'

import chevronDown from '../assets/chevron-down.svg'
import catEmpty from '../assets/cat-stare.svg'

/** Styles */
const ResultsContainer = styled.section`
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1280px;
`
const ResultsFilters = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 30px auto;
    max-width: 1280px;
`
const EmptyState = styled.div`
    display: flex;
    position: relative;
    margin: 0 auto;
    width: 300px;
    height: 500px;
    background-image: url(${catEmpty});
    background-repeat: no-repeat;
    background-size: 200px;
    &:before {
        position: absolute;
        bottom: 15%;
        left: 15%;
        font-family: inherit;
        content: 'No Results';
        font-weight: 900;
        font-size: 2em;
        color: ${({theme}) => theme.colors['blue2']};
    }
`

const FilterCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

const FilterSelectWrapper = styled.div`
    position: relative;
    select {
        width: 264px;
        padding: 1em 4em 1em 2em;
        border-radius: .4em;
        border: 1px solid ${({theme}) => theme.colors['accent']};
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance:none;
        -moz-appearance:none;
        &:hover {
            cursor: pointer;
            border: 1px solid ${({theme}) => theme.colors['green']};
        }
    }
    &:after {
        pointer-events: none;
        content: '';
        background-repeat: no-repeat;
        background-image: url(${chevronDown});
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 5px;
        top: 12px;
    }
`

const ViewButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-content: center;
    border: none;
    padding: 12px;
    margin: 0 5px;
    border-radius: 100%;
    background-color: white;
    &:hover,
    &:active,
    &:focus {
        cursor: pointer;
        background-color: ${({theme}) => theme.colors['accent']};
    }
    &.active {
        background-color: ${({theme}) => theme.colors['green']};
        > svg {
            color: white
        }
    }
    
`

/** Render */
const Results = ({ data, onFilter, filterValue }) => {
    const [ isGrid, setIsGrid ] = useState(true);
    const hasData = data && data.length > 0;

    const handleSetGrid = () => {
        setIsGrid(true)
    }
    const handleSetList = () => {
        setIsGrid(false)
    }
    const handleFilterChange = (e) => {
        onFilter(e.target.value)
    }

    return (
        <ResultsContainer>
            {/* Filter & Layout Controls */}
            <ResultsFilters>
                <FilterCol>
                    <Span className="bold spaced">Toxicity</Span>
                    <Label htmlFor="filter">Filter between toxic and non-toxic plants</Label>
                    <FilterSelectWrapper>
                        <select name="filter" id="filter" value={filterValue} onChange={handleFilterChange}>
                            <option value="toxic">Toxic</option>
                            <option value="nontoxic">Non-Toxic</option>
                            <option value="all">Show All</option>
                        </select>
                    </FilterSelectWrapper>
                </FilterCol>

                <FilterCol>
                    <Span className="bold spaced">View Options</Span>
                    <div>
                        <ViewButton className={isGrid && 'active'} onClick={handleSetGrid}><Grid /></ViewButton>
                        <ViewButton className={!isGrid && 'active'} onClick={handleSetList}><List /></ViewButton>
                    </div>
                </FilterCol>
            </ResultsFilters>

            {/* Grid & List Components */}
            {hasData ? isGrid ? <ResultsGrid data={data} /> : <ResultsList data={data} /> : <EmptyState />}
        </ResultsContainer>
    );
}

export default Results;
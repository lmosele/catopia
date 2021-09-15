import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { ChevronLeft } from 'react-feather';

import { H1, Span, P} from './common/Type';
import Tag from './common/Tag';

import dataObj from '../data.json';

/** Styles */
const FixedColumn = styled.div`
    width: 400px;
`
const DetailsContainer = styled.div`
    display: flex;
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

const DetailsBackButton = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.colors['blue2']};
    &:hover {
        color: ${({theme}) => theme.colors['green']};
    }
    svg {
        margin-bottom: -5px;
    }
`

const DetailsHero = styled.div`
    display: flex;
    flex-basis: 100%;
    flex: 1;
    height: 100vh;
    background-image: url(${({bg}) => "/images/" + bg});
    background-size: cover;
    background-position: 50% 50%;
    @media only screen and (max-width: 1024px) {
        flex: auto;
        height: 30vh;
    }
`
const DetailsContent = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    flex-basis: 100%;
    flex: 1;
    padding: 0 40px;
    section {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding: 40px 0;
        &:not(:first-of-type) {
            border-top: 1px solid ${({theme}) => theme.colors['accent']};
        }
    }
    ul {
        margin: 0;
        padding: 0;
    }
`

/** Render */
function DetailsPage({ match }) {

  const {
      details,
      image,
      names,
      toxicity
  } = dataObj.plants.find(plant => plant.id === match.params.id);

  return (
    <DetailsContainer>
        <DetailsHero bg={image} />
        <DetailsContent>
            <section>
                <FixedColumn>
                    <DetailsBackButton to="/" title="Back to results">
                        <ChevronLeft /> Back
                    </DetailsBackButton>
                    <H1>{names.common}</H1>
                    <Span className="italic">{names.scientific}</Span>
                </FixedColumn>
                <Tag className={toxicity ? "toxic" : 'safe'}>{toxicity ? 'Toxic' : 'Non-Toxic'}</Tag>
            </section>

            <section>
                <FixedColumn>
                    <Span className="bold">Details</Span>
                </FixedColumn>
                <P>{details}</P>
            </section>

            <section>
                <FixedColumn>
                    <Span className="bold">Toxicity</Span>
                </FixedColumn>
                {toxicity ? (
                    <ul>
                        <li><P>{toxicity.property}</P></li>
                        <li><P>{toxicity.symptoms}</P></li>
                    </ul>
                ) : 'No toxic properties'}
            </section>
            <section>
                <P className="bold">If you suspect your pet may have ingested a potentially toxic substance, contact your local veterinarian as soon as possible.</P>
            </section>
        </DetailsContent>
    </DetailsContainer>
  );
}

export default DetailsPage;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading = styled.div`
  font-size: 30px;
  font-weight: normal;
  margin-bottom: 1rem;
`;
const FlexRow = styled.div`
  display: flex;

  & > * {
    padding: 0.75rem 1.25rem;
    margin-right: 1.5rem;
    background: #3d9356;
    border-radius: 999px;
    color: white;
    text-decoration: none;
  }
`;

export default function LinkGroup({ links }) {
  function convertLinksToArray(links) {
    return links.split(',').map((item) => {
      const [name, url] = item.split('|');
      return { name, url };
    });
  }

  if (!links) return <></>;

  return (
    <Container>
      <Heading>Vidare läsning</Heading>
      <FlexRow>
        {convertLinksToArray(links).map((item, i) => {
          return (
            <Link key={i} to={`/sustest/${item.url}`}>
              {item.name}
            </Link>
          );
        })}
      </FlexRow>
    </Container>
  );
}

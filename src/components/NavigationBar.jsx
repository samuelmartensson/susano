import React from 'react';
import logo from '../media/susano.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.div`
  max-width: 164px;
  img {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 1.75rem;

  a {
    color: #343434;
    text-decoration: none;
    font-size: 18px;
  }
`;

export default function NavigationBar({ data }) {
  return (
    <Container>
      <Logo>
        <Link to={`/sustest/`}>
          <img src={logo} alt="susano" />
        </Link>
      </Logo>
      {data &&
        data.map((item, key) => (
          <Link key={key} to={`/sustest/${item.slug}`}>
            {item.title.rendered}
          </Link>
        ))}
    </Container>
  );
}

import React from 'react';
import styled from 'styled-components';
import LinkGroup from './LinkGroup';

const ContentWrapper = styled.div`
  width: 65%;
  padding-bottom: 7rem;
`;

const Container = styled.div`
  margin-top: 70px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 29px;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 18px;
    line-height: 1.75;
    margin-bottom: 4rem;
  }

  figure {
    margin: 0;
    padding: 0;
  }
`;
export default function Page({ title, content, links }) {
  return (
    <Container>
      <ContentWrapper>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <LinkGroup links={links} />
      </ContentWrapper>
    </Container>
  );
}

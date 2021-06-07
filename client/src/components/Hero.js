import React, {Fragment} from 'react';
import styled from 'styled-components';
import NavSection from './Nav';

const Title = styled.h1`
  font-size: 2.8em;
  text-align: center;
  color: #958b7d;
`;

const Wrapper = styled.section`
  padding: 1.8em;
  background: #231f20;
`;

const Hero = () => {
  return (
    <Fragment>
      <Wrapper>
        <Title>
          Auxita
        </Title>
      </Wrapper>

      <NavSection />

    </Fragment>
  );
};

export default Hero;

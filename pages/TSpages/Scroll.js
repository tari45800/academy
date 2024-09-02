import theme from '@/components/theme';
import React from 'react';
import styled from 'styled-components';

const Scroll = () => {
  return (
    <Container>
      <div className="scroll">◀ SCROLL</div>
    </Container>
  );
};

const Container = styled.div`
  @media ${theme.device.mobile} {
    display: none;
  }
  position: absolute;
  top: 0;
  right: 160px;
  height: 100vh;
  padding-bottom: 100px;

  @media ${theme.device.tabletSL} {
    right: 65px;
  }
  @media ${theme.device.tabletL} {
    right: -5px;
  }

  .scroll {
    position: sticky;
    top: 100%;

    transform: rotate(-90deg);
    color: gray;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 88px;
    letter-spacing: 1.6px;
  }
`;

export default Scroll;

import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const Texture = () => {
  return <Container></Container>;
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/Group_37464.png');
  opacity: 0.3;
  mix-blend-mode: multiply;
  @media ${theme.device.mobile} {
    display: none;
  }
`;

export default Texture;

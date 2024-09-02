import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';

const RightContentBox = ({ children }) => {
  return <Container className="RightContentBox">{children}</Container>;
};

const Container = styled.div`
  max-width: 55%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${theme.device.mobile} {
    max-width: 100%;
  }
`;

export default RightContentBox;

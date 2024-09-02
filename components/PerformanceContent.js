import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import theme from './theme';
import Image from 'next/image';
import performance from '@/public/images/svg/performance.png';

const PerformanceContent = () => {
  return (
    <Container>
      <ImageBox>
        <Image src={performance} alt="입시실적" with={2000} height={0} />
      </ImageBox>
    </Container>
  );
};
const Container = styled.div``;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default PerformanceContent;

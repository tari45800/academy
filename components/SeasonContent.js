import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import Image from 'next/image';
import Kimjaeha from '@/public/images/kimjaeha.png';
import winterschool from '@/public/images/winterschool_poster.png';
import summerschool from '@/public/images/summerschool.png';

const SeasonContnet = ({ tab }) => {
  return (
    <>
      {tab == 1 && (
        <>
          <Container>
            <ImageBox>
              <Image src={summerschool} alt="썸머스쿨" />
            </ImageBox>
          </Container>
        </>
      )}
      {tab == 2 && (
        <>
          <Container>
            <ImageBox>
              <Image src={winterschool} alt="윈터스쿨" />
            </ImageBox>
          </Container>
        </>
      )}
    </>
  );
};
const Container = styled.div`
  /* position: relative; */
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
  }
`;

export default SeasonContnet;

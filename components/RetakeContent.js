import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import regular from '@/public/images/svg/regular.svg';
import mobile1 from '@/public/images/ssn/mobile1.png';

const RetakeContnet = ({ tab }) => {
  return (
    <>
      <Container>
        <ImageBox>
          <Image src={mobile1} alt="투에스n" />
        </ImageBox>
      </Container>
    </>
  );
};
const Container = styled.div``;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
`;
// const ImageBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #fff;
//   p {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 34rem;
//   }
// `;

export default RetakeContnet;

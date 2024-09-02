import React from 'react';
import styled from 'styled-components';
import Button from './Button';
// import Image from 'next/image';
import { winterSchoolForm } from './formobjects/winterSchoolForm';

const RegularContnet = () => {
  return (
    <Container>
      <ImageBox>
        {/* <Image src={} alt="" /> */}
        <p>시간표 이미지</p>
      </ImageBox>
      <ButtonBox>
        {/* <button>
          <p>수강신청</p>
        </button> */}
        <Button form={winterSchoolForm}>수강신청</Button>
      </ButtonBox>
    </Container>
  );
};
const Container = styled.div`
  background-color: #fff;
  padding-bottom: 2.56rem;
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 34rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RegularContnet;

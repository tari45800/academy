import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Image from 'next/image';
import { consultingForm } from '@/components/formobjects/consultingForm';
import infosession from '@/public/images/svg/infosession.jpg';
import theme from '@/components/theme';

const InfosessionContent = () => {
  return (
    <Container>
      {/* <div className="center">
        <div>준비중인 이미지 입니다.</div>
      </div> */}
      <Image src={infosession} alt="입시 설명회" with={2000} height={0} />
      {/* <ButtonBox>
        <Button form={consultingForm}>신청하기</Button>
      </ButtonBox> */}
    </Container>
  );
};
const Container = styled.div`
  padding-bottom: 2.56rem;
  img {
    height: auto;
    width: 100%;
  }
  @media ${theme.device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

export default InfosessionContent;

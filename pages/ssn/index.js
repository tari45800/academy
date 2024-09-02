import React from 'react';
import Image from 'next/image';
import { TfiDownload } from 'react-icons/tfi';

import desktop1 from '@/public/images/ssn/desktop1.png';
import desktop2 from '@/public/images/ssn/desktop2.png';
import desktop3 from '@/public/images/ssn/desktop3.png';
import desktop4 from '@/public/images/ssn/desktop4.png';
import desktop5 from '@/public/images/ssn/desktop5.png';
import desktop6 from '@/public/images/ssn/desktop6.png';
import desktop7 from '@/public/images/ssn/desktop7.png';
import desktop8 from '@/public/images/ssn/desktop8.png';
import desktop9 from '@/public/images/ssn/desktop9.png';
import desktop10 from '@/public/images/ssn/desktop10.png';
import desktop11 from '@/public/images/ssn/desktop11.png';
import desktop12 from '@/public/images/ssn/desktop12.png';
import desktop13 from '@/public/images/ssn/desktop13.png';
import desktop14 from '@/public/images/ssn/desktop14.png';
import desktop15 from '@/public/images/ssn/desktop15.png';

import mobile1 from '@/public/images/ssn/mobile1.png';
import mobile2 from '@/public/images/ssn/mobile2.png';
import mobile3 from '@/public/images/ssn/mobile3.png';
import mobile4 from '@/public/images/ssn/mobile4.png';
import mobile5 from '@/public/images/ssn/mobile5.png';
import mobile6 from '@/public/images/ssn/mobile6.png';
import mobile7 from '@/public/images/ssn/mobile7.png';
import mobile8 from '@/public/images/ssn/mobile8.png';
import mobile9 from '@/public/images/ssn/mobile9.png';
import mobile10 from '@/public/images/ssn/mobile10.png';
import mobile11 from '@/public/images/ssn/mobile11.png';
import mobile12 from '@/public/images/ssn/mobile12.png';
import mobile13 from '@/public/images/ssn/mobile13.png';
import mobile14 from '@/public/images/ssn/mobile14.png';
import mobile15 from '@/public/images/ssn/mobile15.png';

import full from '@/public/images/ssn/full.png';
import full2 from '@/public/images/ssn/full2.png';

import theme from '@/components/theme';
import styled from 'styled-components';
import Head from 'next/head';
import Button from '@/components/Button';
import { ssnForm } from '@/components/formobjects/ssnForm';
import ttf from './ttf';
import Link from 'next/link';

const index = () => {
  return (
    <>
      <Container>
        <Head>
          <title>투에스N</title>
          <meta name="ssn" content="투에스N 페이지입니다." />
        </Head>
        <div className="sorry">
          <a className="sorry_name" href={'/files/ssn_brochure.pdf'} download="2025 투에스N 재수반 브로슈어"></a>
        </div>

        <Desktop>
          <DesktopFlyer src={desktop1} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop2} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop3} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop4} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop5} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop6} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop7} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop8} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop9} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop10} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop11} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop12} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop13} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop14} alt="winterSchool" with={2000} height={0} priority />
          <DesktopFlyer src={desktop15} alt="winterSchool" with={2000} height={0} priority />
          <CtaBtn>
            <Button form={ssnForm}>접수하기</Button>
          </CtaBtn>
        </Desktop>

        <Mobile>
          <MobileFlyer src={mobile1} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile2} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile3} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile4} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile5} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile6} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile7} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile8} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile9} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile10} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile11} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile12} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile13} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile14} alt="winterSchool" with={2000} height={0} priority />
          <MobileFlyer src={mobile15} alt="winterSchool" with={2000} height={0} priority />
          <CtaBtn>
            <Button form={ssnForm}>접수하기</Button>
          </CtaBtn>
        </Mobile>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #150505;
  position: relative;

  .sorry {
    position: absolute;
    bottom: 4%;

    .sorry_name {
      padding: 100px 350px;
      cursor: pointer;
    }

    @media ${theme.device.mobile} {
      bottom: 4.5%;

      .sorry_name {
        padding: 100px 350px;
        cursor: pointer;
      }
    }
  }
`;

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  display: block;
  @media ${theme.device.mobile} {
    display: none;
  }
`;

const DesktopFlyer = styled(Image)`
  height: 100%;
`;

const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  display: none;
  @media ${theme.device.mobile} {
    display: block;
  }
`;
const MobileFlyer = styled(Image)`
  height: 100%;
`;

const CtaBtn = styled.div`
  padding: 50px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  .button {
    width: 34rem;
    height: 4.2rem;
    font-size: 1.8rem;
  }
  @media ${theme.device.mobile} {
    padding-bottom: 120px;
    .button {
      width: 16rem;
      height: 3.4rem;
      font-size: 1.3rem;
    }
  }
`;
export default index;

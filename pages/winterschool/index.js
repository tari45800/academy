import React from 'react';
import Image from 'next/image';

import desktop1 from '@/public/images/winterschool/desktop1.svg';
import desktop2 from '@/public/images/winterschool/desktop2.svg';
import desktop3 from '@/public/images/winterschool/desktop3.svg';
import desktop4 from '@/public/images/winterschool/desktop4.svg';
import desktop5 from '@/public/images/winterschool/desktop5.svg';
import desktop6 from '@/public/images/winterschool/desktop6.svg';
import desktop7 from '@/public/images/winterschool/desktop7.svg';
import desktop8 from '@/public/images/winterschool/desktop8.svg';
import desktop9 from '@/public/images/winterschool/desktop9.png';
import desktop10 from '@/public/images/winterschool/desktop10.svg';
import desktop11 from '@/public/images/winterschool/desktop11.svg';
import desktop12 from '@/public/images/winterschool/desktop12.svg';
import desktop13 from '@/public/images/winterschool/desktop13.svg';
import desktop14 from '@/public/images/winterschool/desktop14.svg';
import desktop15 from '@/public/images/winterschool/desktop15.svg';

import mobile1 from '@/public/images/winterschool/mobile1.svg';
import mobile2 from '@/public/images/winterschool/mobile2.svg';
import mobile3 from '@/public/images/winterschool/mobile3.svg';
import mobile4 from '@/public/images/winterschool/mobile4.svg';
import mobile5 from '@/public/images/winterschool/mobile5.svg';
import mobile6 from '@/public/images/winterschool/mobile6.svg';
import mobile7 from '@/public/images/winterschool/mobile7.svg';
import mobile8 from '@/public/images/winterschool/mobile8.svg';
import mobile9 from '@/public/images/winterschool/mobile9.png';
import mobile10 from '@/public/images/winterschool/mobile10.svg';
import mobile11 from '@/public/images/winterschool/mobile11.svg';
import mobile12 from '@/public/images/winterschool/mobile12.svg';
import mobile13 from '@/public/images/winterschool/mobile13.svg';
import mobile14 from '@/public/images/winterschool/mobile14.svg';
import mobile15 from '@/public/images/winterschool/mobile15.svg';

import theme from '@/components/theme';
import styled from 'styled-components';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Container>
        <Head>
          <title>WinterSchool</title>
          <meta name="winterschool" content="김재하 윈터스쿨 페이지입니다." />
        </Head>
        <Desktop>
          <DesktopFlyer src={desktop1} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop2} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop3} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop4} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop5} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop6} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop7} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop8} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop9} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop10} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop11} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop12} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop13} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop14} alt="winterSchool" with={0} height={0} priority />
          <DesktopFlyer src={desktop15} alt="winterSchool" with={0} height={0} priority />
        </Desktop>

        <Mobile>
          <MobileFlyer src={mobile1} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile2} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile3} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile4} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile5} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile6} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile7} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile8} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile9} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile10} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile11} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile12} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile13} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile14} alt="winterSchool" with={0} height={0} priority />
          <MobileFlyer src={mobile15} alt="winterSchool" with={0} height={0} priority />
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

export default index;

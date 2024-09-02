import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import { useRecoilState } from 'recoil';
import { popup } from '../atom';
import Footer from '@/pages/TSpages/Footer';
import ApplyButton from '@/pages/TSpages/ApplyButton';
import Scroll from '@/pages/TSpages/Scroll';
import Image from 'next/image';
import background_img from '@/public/images/background_img.png';
// img = '/images/svg/image 367.svg';
// 접수 양식을 담고 있는 배열
const PageLayout = ({ children, background = true, img = '/images/background_img2.jpg' }) => {
  const [isVisible, setIsVisible] = useRecoilState(popup);

  return (
    <>
      <Container>
        {/* {background && <BackgroundImg img={img} />} */}
        <ContentBox $isVisible={isVisible}>{children}</ContentBox>
      </Container>
      <Footer />
      <Scroll></Scroll>
      <ApplyButton></ApplyButton>
    </>
  );
};
const Container = styled.div`
  // 페이지 전체 컨테이너
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 240px 40px 240px;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);

  @media ${theme.device.tabletSL} {
    padding: 0px 160px 40px 160px;
  }

  @media ${theme.device.tabletL} {
    padding: 0px 83px 40px 83px;
  }

  @media ${theme.device.mobile} {
    background: #ffffff;
    padding: 0 20px;
  }
`;

const ContentBox = styled.div`
  /* border: 3px solid red; */
  z-index: ${({ $isVisible }) => $isVisible && 20};
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-top: 200px;
  width: 100%;
  min-height: 100vh;
  max-width: 1440px;
  z-index: 100;
  /* padding-right: 30px; */

  @media ${theme.device.tabletL} {
    padding-top: 170px;
  }

  @media ${theme.device.mobile} {
    flex-direction: column;
    justify-content: start;
    margin-bottom: 0px;
    padding: 110px 0px 0px 0px;
    gap: 30px;
    /* max-width: 340px; */
  }
`;

export default PageLayout;

import React from 'react';
import styled from 'styled-components';
import Header from '@/pages/TSpages/Header';
import Nav from '@/pages/TSpages/Nav';
import theme from '@/components/theme';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import RightContent from '@/components/DetailLayout/RightContent';

const SectionLayout = ({
  link,
  mode,
  currentDetailPage,
  title,
  text,
  text2,
  rightContentItems,
  layoutType,
  currentPage,
}) => {
  return (
    <Container>
      <Header currentPage={currentPage}></Header>
      <ContentBox>
        <LeftContentBox title={title} text={text} text2={text2} />
        <RightContent
          link={link}
          mode={mode}
          rightContentItems={rightContentItems}
          layoutType={layoutType}
          currentPage={currentPage}
        />
      </ContentBox>
      <Nav currentPage={currentPage}></Nav>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${theme.device.mobile} {
    background: #ffffff;
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 40px 80px;
  margin-top: 131px;
  margin-bottom: 89px;
  width: 100%;
  min-height: 80vh;
  @media ${theme.device.tabletL} {
    padding: 40px;
  }
  @media ${theme.device.mobile} {
    margin-bottom: 0px;
    flex-direction: column;
    justify-content: start;
    padding: 0 40px;
  }
`;

export default SectionLayout;

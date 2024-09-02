import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import Header from '@/pages/TSpages/Header';
import InstructorContnet from '../InstructorContent';
import SeasonContnet from '../SeasonContent';
import RetakeContnet from '../RetakeContent';
import RegularContnet from '../RegularContent';
import InfosessionContent from '../InfosessionContent';
import { useRouter } from 'next/router';
import FacilityContent from '../FacilityContent';
import Schedule from './Schedule';
import PerformanceContent from '../PerformanceContent';

const RightTabContent = ({ currentPage, contents, tab }) => {
  const router = useRouter();
  const { pathname } = router;
  const pathSegments = pathname.split('/'); // 경로를 슬래시('/')로 분할
  const location = pathSegments[pathSegments.length - 1];

  return (
    <>
      <Header currentPage={currentPage}></Header>
      <Container>
        <ContentBox>
          {/* 강사소개 페이지 */}
          {location == 'instructors' && <InstructorContnet />}
          {/* N수 페이지 */}
          {location == 'retake' && <RetakeContnet />}
          {/* 정규 페이지 */}
          {location == 'regular' && <Schedule contents={contents}></Schedule>}
          {/* 입시설명회 페이지 */}
          {location == 'infosession' && <InfosessionContent />}
          {/* 시설 안내 페이지 */}
          {location == 'facility' && <FacilityContent />}
          {/* 입시실적 안내 페이지 */}
          {location == 'performance' && <PerformanceContent />}
        </ContentBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  /* width: 50%; */
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 49.375rem;
  padding-bottom: 2rem;

  /* @media ${theme.device.tablet} {
    width: 60%;
  }*/
  @media ${theme.device.mobile} {
    padding: 0;
    max-width: 100%;
  }
`;
const TabBox = styled.div`
  display: flex;
  justify-content: center;
  max-width: 49.375rem;
  height: 3.75rem;
  flex-shrink: 0;
  width: 100%;
  p {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #969696;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.2rem;

    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem;
    border: 1px solid #e8eaf0;
    background: #f9f8f6;
    border-bottom: 1px solid #0b0b0b;
    cursor: pointer;
  }
  .pick {
    border: 1px solid #0b0b0b;
    border-bottom: none;
    color: #0b0b0b;
    background: none;
  }
  @media ${theme.device.tabletL} {
    p {
      color: #969696;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px; /* 155.556% */
    }
  }
  @media ${theme.device.mobile} {
    height: 28px;
    max-width: 100%;
    p {
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

const ContentBox = styled.div`
  /* margin-top: 2.5rem; */
  /* max-width: 49.3125rem;
  height: 100%; */
  flex-shrink: 0;
  @media ${theme.device.mobile} {
    margin-top: 0.5rem;
    height: 0%;
  }
`;

export default RightTabContent;

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import theme from '../../components/theme';

const SubNav = () => {
  const router = useRouter();
  const { pathname } = router;

  // 현재 경로의 url에서 일정 단어 추출
  const pathSegments = pathname.split('/'); // 경로를 슬래시('/')로 분할
  const location = pathSegments[pathSegments.length - 1];

  const main = pathSegments.includes('main');
  const program = pathSegments.includes('program');
  const consulting = pathSegments.includes('consulting');
  const community = pathSegments.includes('community');
  const management = pathSegments.includes('management');

  const apply = pathSegments.includes('apply');
  // const winter = pathSegments.includes('winterSchool');

  return (
    <Container>
      {/* SseduAcademy 페이지일 경우*/}
      {main && (
        <>
          <div
            className={`nav-box ${location === 'intro' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/main/intro',
              })
            }
          >
            <p>SSEDU 소개</p>
          </div>
          <div
            className={`nav-box ${location === 'instructors' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/main/instructors',
              })
            }
          >
            <p>강사 소개</p>
          </div>
          <div
            className={`nav-box ${location === 'facility' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/main/facility',
              })
            }
          >
            <p>시설안내</p>
          </div>
          <div
            className={`nav-box ${location === 'performance' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/main/performance',
              })
            }
          >
            <p>입시실적</p>
          </div>
        </>
      )}
      {/* program 페이지일 경우*/}
      {program && (
        <>
          <div
            className={`nav-box ${location === 'regular' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/program/regular',
              })
            }
          >
            <p>단과반</p>
          </div>
          <div
            className={`nav-box ${location === 'retake' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/program/retake',
              })
            }
          >
            <p>투에스N</p>
          </div>
          <div
            className={`nav-box ${location === 'season' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/program/season',
              })
            }
          >
            <p>시즌제</p>
          </div>
          {/* <div
            className={`nav-box ${location === 'online' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/program/online',
              })
            }
          >
            <p>온라인수업</p>
          </div> */}
        </>
      )}
      {/* consulting 페이지일 경우*/}
      {consulting && (
        <>
          <div
            className={`nav-box ${location === 'intro' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/consulting/intro',
              })
            }
          >
            <p>입시컨설팅</p>
          </div>
          <div
            className={`nav-box ${location === 'infosession' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/consulting/infosession',
              })
            }
          >
            <p>입시설명회</p>
          </div>
          <div
            className={`nav-box ${location === 'information' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/consulting/information',
              })
            }
          >
            <p>입시정보</p>
          </div>
        </>
      )}
      {/* Management 페이지일 경우*/}
      {management && (
        <>
          <div
            className={`nav-box ${location === 'intro' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/management/intro',
              })
            }
          >
            <p>강사 매니지먼트 소개</p>
          </div>
          <div
            className={`nav-box ${location === 'hiring' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/management/hiring',
              })
            }
          >
            <p>강사채용</p>
          </div>
          <div
            className={`nav-box ${location === 'hiring_assist' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/management/hiring_assist',
              })
            }
          >
            <p>조교채용</p>
          </div>
        </>
      )}
      {/* community 페이지일 경우*/}
      {community && (
        <>
          <div
            className={`nav-box ${location === 'notice' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/community/notice',
              })
            }
          >
            <p>공지사항</p>
          </div>
          <div
            className={`nav-box ${location === 'faq' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/community/faq',
              })
            }
          >
            <p>자주 묻는 질문</p>
          </div>
        </>
      )}
      {/* application 페이지일 경우*/}
      {/* {(application == true || winter == true) && ( */}
      {apply && (
        <>
          <div
            className={`nav-box ${location === 'apply' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/apply',
              })
            }
          >
            <p>원서접수</p>
          </div>
          {/* <div
            className={`nav-box ${location === 'WinterSchool' && 'current_page'}`}
            onClick={() =>
              router.push({
                pathname: '/TSpages/Application/WinterSchool',
              })
            }
          >
            <p>윈터스쿨</p>
          </div> */}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  max-width: 1440px;
  width: 100%;
  @media ${theme.device.mobile} {
    justify-content: center;
  }
  .nav-box {
    color: rgba(112, 30, 30, 0.3);
    text-decoration: none;
    cursor: pointer;
    /* border-bottom: 1.5px solid #701e1e; */
    @media ${theme.device.mobile} {
      border: none;
    }
    p {
      display: flex;
      padding: 0.25rem 1.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
    }
  }

  .current_page {
    /* border: 1.5px solid rgba(112, 30, 30, 1);
    border-bottom: none; */
    color: white;
    background-color: rgba(112, 30, 30, 1);
    @media ${theme.device.mobile} {
      border: none;
    }
  }

  @media ${theme.device.tabletL} {
    .nav-box {
      p {
        font-size: 16px;
      }
    }
  }

  @media ${theme.device.tablet} {
    .nav-box {
      p {
        padding: 0.25rem 1rem;
        font-size: 1rem;
      }
    }
  }

  @media ${theme.device.mobile} {
    width: 100%;
    background: rgba(238, 238, 238, 1);
    height: 26px;
    .current_page {
      background: rgba(238, 238, 238, 1);
      color: #701e1e;
      p {
        border-top: 2px solid #701e1e;
      }
    }
    .nav-box {
      height: 100%;
      padding: 0rem 0.62rem;
      p {
        height: 100%;
        font-size: 10px;
        padding: 0;
      }
    }
  }
`;

export default SubNav;

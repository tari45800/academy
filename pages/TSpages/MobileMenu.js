import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../components/theme';
import userStorage from '@/components/useUserStorage';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import logoRed from '@/public/images/svg/LogoRed.svg';
import close_btn from '@/public/images/svg/CloseMobile.svg';

const MobileMenu = ({ toggle, handleMenu }) => {
  const { storage, login, basic } = userStorage();

  const router = useRouter();
  const { pathname } = router;
  const pathSegments = pathname.split('/');
  const detailLocation = pathSegments[pathSegments.length - 1];
  const location = pathSegments[pathSegments.length - 2];

  return (
    <>
      <Container $toggle={toggle}>
        <div className="menu-header">
          <div className="header">
            <Link className="link" href={`/`}>
              <Image className="mobile-header" src={logoRed} alt="logo" priority />
            </Link>
            <Image className="mobile-header" src={close_btn} alt="logo" onClick={handleMenu} />
          </div>
        </div>
        <ContentBox>
          <div className="menu-nav-box">
            <div className={`line ${location === 'main' && 'current_page'}`}></div>
            <div className="menu-total">
              <Link className={`menu-title link ${location === 'main' && 'current'}`} href={`/main/intro`}>
                <div>학원소개</div>
              </Link>
              <div className="menu-content-box">
                <Link className="link" href={`/main/intro`}>
                  <li className={`${location === 'main' && detailLocation === 'intro' && 'current'}`}>SSEDU 소개</li>
                </Link>
                <Link className="link" href={`/main/instructors`}>
                  <li className={`${detailLocation === 'instructors' && 'current'}`}>강사 소개</li>
                </Link>
                <Link className=" link" href={`/main/facility`}>
                  <li className={`${detailLocation === 'facility' && 'current'}`}>시설안내</li>
                </Link>
                <Link className=" link" href={`/main/performance`}>
                  <li className={`${detailLocation === 'performance' && 'current'}`}>입시실적</li>
                </Link>
              </div>
            </div>
          </div>

          <div className="menu-nav-box">
            <div className={`line ${location === 'program' && 'current_page'}`}></div>
            <div className="menu-total">
              <Link className={`menu-title link ${location === 'program' && 'current'}`} href={`/program/regular`}>
                <div>프로그램</div>
              </Link>
              <div className="menu-content-box">
                <Link className="link" href={`/program/regular`}>
                  <li className={`${detailLocation === 'regular' && 'current'}`}>단과반</li>
                </Link>
                <Link className="link" href={`/program/retake`}>
                  <li className={`${detailLocation === 'retake' && 'current'}`}>투에스N</li>
                </Link>
                <Link className="link" href={`/program/season`}>
                  <li className={`${detailLocation === 'season' && 'current'}`}>시즌제</li>
                </Link>
                {/* <Link className="link" href={`/program/online`}>
                  <li className={`${detailLocation === 'online' && 'current'}`}>온라인수업</li>
                </Link> */}
              </div>
            </div>
          </div>

          <div className="menu-nav-box">
            <div className={`line ${location === 'consulting' && 'current_page'}`}></div>
            <div className="menu-total">
              <Link className={`menu-title link ${location === 'consulting' && 'current'}`} href={`/consulting/intro`}>
                <div>컨설팅</div>
              </Link>
              <div className="menu-content-box">
                <Link className=" link" href={`/consulting/intro`}>
                  <li className={`${location === 'consulting' && detailLocation === 'intro' && 'current'}`}>
                    입시컨설팅
                  </li>
                </Link>
                <Link className=" link" href={`/consulting/infosession`}>
                  <li className={`${detailLocation === 'infosession' && 'current'}`}>입시설명회</li>
                </Link>
                <Link className=" link" href={`/consulting/information`}>
                  <li className={`${detailLocation === 'information' && 'current'}`}>입시정보</li>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="menu-nav-box">
            <div className={`line ${location === 'management' && 'current_page'}`}></div>
            <div className="menu-total">
              <Link className={`menu-title link ${location === 'management' && 'current'}`} href={`/management/intro`}>
                <div>강사 채용</div>
              </Link>
              <div className="menu-content-box">
                <Link className=" link" href={`/management/intro`}>
                  <li className={`${location === 'management' && detailLocation === 'intro' && 'current'}`}>
                    강사 매니지먼트 소개
                  </li>
                </Link>
                <Link className=" link" href={`/management/hiring`}>
                  <li className={`${detailLocation === 'hiring' && 'current'}`}>강사채용</li>
                </Link>
                <Link className=" link" href={`/management/hiring_assist`}>
                  <li className={`${detailLocation === 'hiring_assist' && 'current'}`}>조교채용</li>
                </Link>
              </div>
            </div>
          </div> */}

          <div className="menu-nav-box">
            <div className={`line ${location === 'community' && 'current_page'}`}></div>
            <div className="menu-total">
              <Link className={`menu-title link ${location === 'community' && 'current'}`} href={`/community/notice`}>
                <div>커뮤니티</div>
              </Link>
              <div className="menu-content-box">
                <Link className=" link" href={`/community/notice`}>
                  <li className={`${detailLocation === 'notice' && 'current'}`}>공지사항</li>
                </Link>
                <Link className=" link" href={`/community/faq`}>
                  <li className={`${detailLocation === 'faq' && 'current'}`}>자주 묻는 질문</li>
                </Link>
              </div>
            </div>
          </div>

          <div className="menu-nav-box">
            <div className={`line ${detailLocation === 'apply' && 'current_page'}`}></div>
            <div className="menu-total">
              <Link className="menu-title link" href={`/apply`}>
                <div className="apply">원서접수</div>
              </Link>
            </div>
          </div>

          <div className="menu-bottom">{storage ? login : basic}</div>
        </ContentBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: none;
  @media ${theme.device.mobile} {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: ${(props) => (props.$toggle ? '0%' : '100%')};
    min-width: 100%;
    height: 100vh;
    overflow-y: scroll;
    padding-bottom: 80px;
    background-color: white;
    transition: 0.5s ease-in-out;
    .menu-header {
      display: flex;
      height: 100px;
      padding: 24px 32px 24px 32px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      cursor: pointer;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
      }
      .mobile-header {
        height: 30px;
        width: auto;
      }
    }
  }
`;

const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding-top: 4px;
  .link {
    color: #6b6b6c;
    list-style-type: none;
  }

  .menu-nav-box {
    display: flex;
    align-items: center;
    gap: 30px;
    align-self: stretch;
  }
  .line {
    width: 2px;
    height: 81px;
    background: #fcfcfd;
  }

  .current_page {
    background: #701e1e;
    color: #701e1e;
  }

  .menu-total {
    display: flex;
    align-items: flex-start;
    gap: 60px;
    @media ${theme.device.mobileS} {
      gap: 0px;
    }
  }

  .menu-title {
    width: 140px;
    color: rgba(11, 11, 11, 0.6);
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
  }
  .current {
    color: #701e1e;
  }
  .menu-content-box {
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
  }
  .apply {
    color: #701e1e;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    opacity: 0.6;
  }
  .menu-bottom {
    display: flex;
    padding: 30px;
    align-items: center;
    gap: 30px;
    align-self: stretch;
  }

  .menu-title,
  li {
    cursor: pointer;
  }

  .menu-title:hover,
  li:hover {
    color: #701e1e;
  }
`;

export default MobileMenu;

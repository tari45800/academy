import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import theme from '@/components/theme';

const HeaderMenu = ({ currentPage }) => {
  return (
    <>
      <MenuBox className="link" href={`/main/intro`}>
        <Menu className={`nav-box ${currentPage === 1 && 'current-page'}`}>
          <p>학원소개</p>
        </Menu>
      </MenuBox>
      <MenuBox className="link" href={`/program/regular`}>
        <Menu className={`nav-box ${currentPage === 2 && 'current-page'}`}>
          <p>프로그램</p>
        </Menu>
      </MenuBox>
      <MenuBox className="link" href={`/consulting/intro`}>
        <Menu className={`nav-box ${currentPage === 3 && 'current-page'}`}>
          <p>컨설팅</p>
        </Menu>
      </MenuBox>
      {/* <MenuBox className="link" href={`/management/intro`}>
        <Menu className={`nav-box ${currentPage === 4 && 'current-page'}`}>
          <p>강사채용</p>
        </Menu>
      </MenuBox> */}
      <MenuBox className="link" href={`/community/notice`}>
        <Menu className={`nav-box ${currentPage === 5 && 'current-page'}`}>
          <p>커뮤니티</p>
        </Menu>
      </MenuBox>
    </>
  );
};

const MenuBox = styled(Link)`
  /* margin-top: 37px; */
  height: 100%;
  @media ${theme.device.mobile} {
    display: none;
  }
  .nav-box:hover {
    /* border-bottom: 4px solid #701e1e; */
    /* margin-top: 2px; */
    cursor: pointer;
    color: #701e1e;
  }
  .current-page {
    color: #701e1e;
  }
`;

const Menu = styled.div`
  height: 100%;
  flex-shrink: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 5.59375rem;
  color: #2d2e2e;
  p {
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.6875rem; /* 135% */
    @media ${theme.device.tablet} {
      font-size: 1.05rem;
      font-weight: 600;
    }
  }
`;

export default HeaderMenu;

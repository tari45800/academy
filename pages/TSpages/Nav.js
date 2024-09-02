import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import theme from '../../components/theme';
import Texture from '@/components/Texture';

const Nav = ({ currentPage }) => {
  return (
    <>
      <Address>
        <p>주소 : 서울특별시 강남구 도곡로 331, 4층(역삼동, 영동에스씨빌딩) 06218</p>
      </Address>
      <Container className="mobile-none">
        {/* <Texture></Texture> */}
        <Link className={`link nav-box ${currentPage === 1 && 'current-page'}`} href={`/main/intro`}>
          <div>
            SSEDU
            <br />
            Academy
          </div>
        </Link>
        <Link className={`link nav-box ${currentPage === 2 && 'current-page'}`} href={`/program/regular`}>
          <div>Program</div>
        </Link>
        <Link className={`link nav-box ${currentPage === 3 && 'current-page'}`} href={`/consulting/infosession`}>
          <div>Consulting</div>
        </Link>
        <Link className={`link nav-box ${currentPage === 4 && 'current-page'}`} href={`/management/intro`}>
          <div>Management</div>
        </Link>
        <Link className={`link nav-box ${currentPage === 5 && 'current-page'}`} href={`/apply`}>
          <div>Community</div>
        </Link>
        <Link
          className={`link nav-box ${currentPage === 6 && 'current-page'}`}
          href={`/TSpages/Application/ApplicationPage`}
        >
          <div>원서접수</div>
        </Link>
      </Container>
    </>
  );
};
const Address = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-bottom: 110px;
  padding: 0 20px;
  width: 100%;
  color: rgba(112, 30, 30, 0.3);
  @media ${theme.device.mobile} {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  background-color: var(--cover-color);
  table-layout: fixed;

  @media ${theme.device.mobile} {
    display: none;
  }
  .nav-box {
    z-index: 10;
    display: table-cell;
    flex: 1;
    padding: 1rem;
    color: var(--dark-color);
    border-top: 0.1rem solid var(--tabs-color);
    border-left: 0.1rem solid var(--tabs-color);
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: 400;
    text-align: left;
    color: rgba(11, 11, 11, 0.7);
    width: 16.6vw;
    word-break: break-all;
    @media ${theme.device.tablet} {
      font-size: 18px;
      padding: 1rem 0.8rem;
    }
    @media ${theme.device.tabletS} {
      padding: 1rem 0.5rem;
    }
    @media ${theme.device.mobile} {
    }
    //nest hub
    @media only screen and (max-height: 600px) {
      padding: 0.5rem 0.8rem;
    }
  }
  .nav-box:hover {
    border-top: 0.3rem solid var(--tabs-color);
  }

  .nav-box:hover ~ .current-page {
    border-top: 0.1rem solid var(--tabs-color);
  }

  .current-page {
    border-top: 0.3rem solid var(--tabs-color);
    color: rgba(11, 11, 11, 1);
  }
`;

export default Nav;

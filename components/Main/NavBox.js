import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import Image from 'next/image';
import right_ico from '@/public/images/icon/right_ico.png';

// 컨텐츠 영역: 메뉴(네비게이션)

const NavBox = () => {
  return (
    <Container>
      <ul>
        <Link className="link" href={`/main/intro`}>
          <li>
            <p>
              학원소개
              {/* SSEDU
              <br />
              Academy */}
            </p>
          </li>
        </Link>
        <Link className="link" href={`/consulting/intro`}>
          <li>
            {/* <p>Consulting</p> */}
            <p>컨설팅</p>
          </li>
        </Link>
        <Link className="link" href={`/program/regular`}>
          <li>
            {/* <p>Program</p> */}
            <p>단과반</p>
          </li>
        </Link>
        <Link className="link" href={`/program/retake`}>
          <li>
            <p>투에스N</p>
          </li>
        </Link>
        <Link className="link" href={`/community/notice`}>
          <li>
            {/* <p>Community</p> */}
            <p>공지사항</p>
          </li>
        </Link>
        <Link className="link" href={`/apply`}>
          <li className="point_nav_box">
            <p>원서접수</p>
            <Image src={right_ico} alt="Academy" />
          </li>
        </Link>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 950px;
  margin-left: 10px;
  display: flex;
  justify-content: end;
  align-items: end;
  margin-top: 30px;
  @media ${theme.device.tablet} {
    width: 850px;
  }
  @media ${theme.device.tabletS} {
    width: 600px;
  }
  ul {
    width: 100%;
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    @media ${theme.device.tabletL} {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
    li {
      border: 2.5px solid rgba(255, 255, 255, 0.26);
      font-size: 1.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      transition: 0.5s;
      cursor: pointer;
      height: 198px;
      display: flex;
      align-items: end;
      padding: 14px 36px;
      box-shadow: 0px 3px 26px 0px #00000029;
      @media only screen and (max-height: 868px) {
        height: 180px;
      }
      @media only screen and (max-height: 814px) {
        height: 160px;
      }
      @media only screen and (max-height: 754px) {
        height: 140px;
      }
      @media only screen and (max-height: 694px) {
        height: 110px;
      }
      @media only screen and (max-height: 604px) {
        height: 100px;
      }
      @media ${theme.device.tabletXL} {
        height: 168.75px;
        @media only screen and (max-height: 780px) {
          height: 130px;
        }
        @media only screen and (max-height: 664px) {
          height: 120px;
        }
        @media only screen and (max-height: 634px) {
          height: 100px;
        }
      }

      @media ${theme.device.tabletL} {
        height: 150px;
        @media only screen and (max-height: 911px) {
          height: 120px;
        }
        @media only screen and (max-height: 851px) {
          height: 100px;
        }
        @media only screen and (max-height: 765px) {
          height: 80px;
        }
      }
      @media ${theme.device.tabletS} {
        padding: 5px 10px;
        height: 100px;
        font-size: 1rem;
        @media only screen and (max-height: 765px) {
          height: 80px;
          font-size: 0.8rem;
        }
      }

      p {
        color: #ffffff;
        font-size: 28px;
        line-height: 43.5px;
        display: flex;
        align-items: end;
        justify-content: space-between;
        align-items: end;
        font-weight: 400;
        @media ${theme.device.tabletL} {
          font-size: 24px;
        }
        @media ${theme.device.tabletS} {
          font-size: 20px;
        }
        @media only screen and (max-height: 868px) {
          font-size: 24px;
        }
        @media only screen and (max-height: 700px) {
          font-size: 20px;
        }
      }
      img {
        width: 17.9px;
        height: auto;
        margin: 10px;
      }
    }
    li:hover {
      background-color: #701e1e;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      img {
        transform: translate(20px, 0);
        transition-duration: 0.6s;
      }
    }
    .point_nav_box {
      background: #701e1e;
      border: 2.5px solid #701e1e;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default NavBox;

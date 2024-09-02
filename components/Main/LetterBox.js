import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import Image from 'next/image';
import logoSseduWhite from '@/public/images/logoSseduWhite.png';
import logoAcademyWhite from '@/public/images/logoAcademyWhite.png';

const LetterBox = () => {
  return (
    <Container>
      <header className="header">
        <Image src={logoSseduWhite} alt="Ssedu" className="header_img" priority />
        <Image src={logoAcademyWhite} alt="Academy" className="header_img" />
      </header>

      <div className="detail_letter_box">
        <p>
          <span>대치 투에스에듀 아카데미는 학생들에게 숨어있는 &#39;성공DNA&#39;를 깨웁니다&#46;</span>
          {/* <span>대한민국 최고의 교육 전문가&#44; 입시 컨설턴트&#44; 그리고 일타 강사진이 제공하는</span>
          <span>&#39;최적의 입시 로드맵&#39;을 거쳐 명문대에서 인생 2막을 시작하세요&#46;</span> */}
        </p>

        <p>대치 투에스에듀에서 입시 준비의 새로운 기준을 경험하며 꿈을 현실로 만들어가세요&#46;</p>
      </div>
      <div className="detail_letter_box_tablet">
        <p>
          <span>대치 투에스에듀 아카데미는 학생들에게 숨어있는 &#39;성공DNA&#39;를 깨웁니다&#46;</span>
          {/* <span>대한민국 최고의 교육 전문가&#44; 입시 컨설턴트&#44; 그리고 일타 강사진이 제공하는</span>
          <span>&#39;최적의 입시 로드맵&#39;을 거쳐 명문대에서 인생 2막을 시작하세요&#46;</span> */}
        </p>

        <p>대치 투에스에듀에서 입시 준비의 새로운 기준을 경험하며 꿈을 현실로 만들어가세요&#46;</p>
      </div>
    </Container>
  );
};

// 컨텐츠 영역: 브랜드 로고&#44 브랜드 설명
const Container = styled.div`
  width: 950px;
  margin-top: 50px;
  @media ${theme.device.tabletL} {
    margin-top: 30px;
  }
  @media ${theme.device.tablet} {
    width: 850px;
  }
  @media ${theme.device.tabletS} {
    width: 600px;
  }
  .header {
    padding-bottom: 40px;
    max-width: 500px;
    @media ${theme.device.tabletXL} {
    }
    @media ${theme.device.tabletL} {
      width: 490px;
      @media only screen and (max-height: 911px) {
        width: 420px;
      }
      @media only screen and (max-height: 851px) {
        width: 400px;
      }
      @media only screen and (max-height: 851px) {
        width: 400px;
      }
      @media only screen and (max-height: 765px) {
        width: 360px;
        padding-bottom: 20px;
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  img:nth-child(2) {
    margin-top: 20px;
  }
  .detail_letter_box {
    font-size: 22px;
    letter-spacing: -1px;
    width: 742px;
    @media ${theme.device.tabletXL} {
      width: 100%;
      font-size: 18px;
    }
    @media ${theme.device.tabletL} {
      display: none;
    }
    p {
      @media ${theme.device.tabletL} {
        display: inline-block;
      }
      span:nth-child(1) {
        display: block;
      }
      span:nth-child(2) {
        display: block;
      }
    }
  }
  .detail_letter_box_tablet {
    display: none;
    @media ${theme.device.tabletL} {
      display: inline;
      font-size: 18px;
      letter-spacing: -1px;
      margin-top: 40px;
      @media ${theme.device.tabletS} {
        font-size: 18px;
      }
      p {
        width: 950px;
        @media ${theme.device.tablet} {
          width: 850px;
        }
        @media ${theme.device.tabletS} {
          width: 600px;
        }
      }
      span:nth-child(1) {
        display: block;
      }
      span:nth-child(2) {
        display: block;
      }
    }
  }
`;

export default LetterBox;

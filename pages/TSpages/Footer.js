import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import Image from 'next/image';
// import logoWhite from '@/public/images/svg/LogoWhite.svg';
import logoWhite from '@/public/images/footer_logo.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <Container>
      <Content>
        <div className="footer_top">
          <div className="img_box">
            <Image src={logoWhite} alt="logo" />
          </div>
          <div className="text_box">
            <div className="top_text">
              <Link className="link" href="https://blog.naver.com/2s_edu" target="_blank">
                <b>블로그</b>
              </Link>
              <Link className="link" href="https://www.instagram.com/ssedu_academy/" target="_blank">
                <b>인스타그램</b>
              </Link>
              <Link className="link" href={`/hiring`}>
                <b>인재채용</b>
              </Link>
              <Link className="link" href={`/termsconditions`} target="_blank">
                <b>이용약관</b>
              </Link>
              <Link className="link" href={`/privacy_policy`} target="_blank">
                <b>개인정보처리방침</b>
              </Link>
            </div>
            <div className="bottom_text">
              <div>
                <b className="footer_title">주식회사 투에스에듀</b>
                <div>
                  <b>대표이사</b>양미애
                </div>
                <div>
                  <b>사업자등록번호</b>639-81-03013
                </div>
                <div>
                  <b>학원등록번호</b>제14535호
                </div>
                {/* <div>
                  <b>학원등록번호</b>
                </div> */}
              </div>

              <div>
                <div>
                  <b>주소</b>서울특별시 강남구 도곡로 331, 영동SC빌딩 4층
                </div>
                <div>
                  <b>전화</b>0507-1483-0455
                </div>
                <div className="email">
                  <b>이메일</b>cs@sseduacademy.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border"></div>

        <div className="footer_bottom">
          <div className="copyright">Copyright @ 2023 투에스에듀아카데미</div>
        </div>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  background: #711e1e;
  color: white;
  padding: 36px;
  @media ${theme.device.mobile} {
    margin-top: 50px;
    padding: 0.87rem 1.69rem 6rem;
  }

  .sorry {
    position: absolute;
    top: 0;
    right: 0;
    width: 280px;
    height: 100%;
    background-color: #711e1e;
    z-index: 30;
  }
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  b {
    margin-right: 4px;
  }

  .footer_top {
    width: 100%;
    max-width: 1106px;
    display: flex;
    justify-content: flex-start;
    gap: 70px;
  }
  .img_box {
    /* width: 200px; */
    /* width: 200px; */
    height: 20px;
    img {
      width: auto;
      height: 100%;
    }
  }

  .text_box {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    gap: 30px;

    color: #fff;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
  }
  .top_text {
    display: flex;
    gap: 20px;
    font-size: 14px;
    height: 20px;
    cursor: pointer;
    :not(:first-child)::before {
      content: '|';
      padding-right: 20px;
      font-weight: 300;
    }
  }
  .link {
    color: #fff;
  }
  .bottom_text {
    display: flex;
    gap: 70px;
    @media ${theme.device.mobileL} {
      flex-direction: column;
      gap: 0;

      .footer_title {
        font-size: 10px;
        line-height: 20px;
      }
    }
  }

  .border {
    margin: 30px 0 10px 0;
    width: 100%;
    max-width: 1106px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .footer_bottom {
    width: 100%;
    max-width: 1106px;
    display: flex;
    flex-direction: column;
  }

  .copyright {
    color: #fff;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%; /* 14px */
    text-align: end;
  }
  .sub_text {
    color: #fff;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%; /* 14px */
  }

  .mobile {
    display: none;
  }

  @media ${theme.device.mobile} {
    .mobile {
      display: block;
    }

    .pc {
      display: none;
    }

    .img_box {
      /* margin-bottom: 40px; */
      /* width: 5.1875rem;
      height: 1.6875rem;
      flex-shrink: 0; */
    }

    .footer_top {
      flex-direction: column;
      gap: 20px;
    }
    .top_text {
      gap: 5px;
      font-size: 10px;
      height: 20px;
      :not(:first-child)::before {
        content: '|';
        padding-right: 5px;
        font-weight: 200;
      }
      b {
        font-weight: 400;
        margin: 0;
      }
    }

    .border {
      margin: 10px 0;
      width: 100%;
      max-width: 1106px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    }
    .text_box {
      justify-content: start;
      color: #fff;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 0.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      gap: 20px;
    }
    .copyright {
      font-size: 0.5rem;
    }
    .sub_text {
      font-size: 0.5rem;
      font-weight: 500;
    }
  }
  @media ${theme.device.mobile} {
    .top_text {
      font-size: 8px;
    }
  }
`;

export default Footer;

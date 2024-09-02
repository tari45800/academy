import styled from 'styled-components';
import { useRef } from 'react';
import theme from '@/components/theme';
import Image from 'next/image';
import ico_arrow_right_white from '@/public/images/icon/Ico_arrow_right_white.png';

const Popup = ({ children, setIsVisible, currentPage }) => {
  const containerRef = useRef();

  // 컨텐츠 이외의 것을 클릭시 팝업 닫기
  const handleContainerClick = (e) => {
    if (containerRef.current === e.target) {
      setIsVisible(false);
    }
  };

  return (
    <Container ref={containerRef} onClick={handleContainerClick}>
      <ContentBox>{children}</ContentBox>
      {currentPage === 4 && (
        <Footer>
          <div>
            <h3>바로 지원하러 가기</h3>
            <Image src={ico_arrow_right_white} alt="이동" />
          </div>
        </Footer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  color: #210909;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 4rem 14rem;
  width: 70%;
  height: 80%;
  max-height: 80vh;
  overflow-y: auto;
  background: linear-gradient(45deg, var(--cover-color), var(--cover-color), var(--light-color));
  box-shadow: 0px 20px 70px 0px rgba(0, 0, 0, 0.25);
  @media ${theme.device.tabletXL} {
    padding: 4rem 6rem;
  }
  @media ${theme.device.tabletL} {
    padding: 4rem 4rem;
  }
  @media ${theme.device.tabletS} {
    padding: 2rem 2rem;
  }
  @media ${theme.device.mobile} {
    height: 60%;
    width: 80%;
    padding: 1rem 1rem;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 87px;
  position: absolute;
  width: 70%;
  background: rgba(112, 30, 30, 1);
  bottom: 10%;
  cursor: pointer;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 40px;
    h3 {
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      text-align: right;
      color: rgba(255, 255, 255, 1);
    }
    img {
      width: 26px;
      height: 14px;
      margin-left: 20px;
    }
  }
  @media ${theme.device.mobile} {
    width: 80%;
    height: 43px;
    bottom: 20%;
    div {
      padding-right: 20px;
      h3 {
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 600;
      }
      img {
        width: 18px;
        height: auto;
        margin-left: 10px;
      }
    }
  }
`;
export default Popup;

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '../TSpages/Header';
import mobile_winterschool from '@/public/images/mobile_winterschool.png';
import { useRecoilState } from 'recoil';
import { popup } from '@/components/atom';
import { winterSchoolForm } from '@/components/formobjects/winterSchoolForm';
import styled from 'styled-components';

const WinterSchool = () => {
  const [isVisible, setIsVisible] = useRecoilState(popup);
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);
  const mode = isMobile ? 'page' : 'popup';

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 760);
    }
  };
  const link = isMobile ? '/application/mobileapplicationpage' : '/admin/applicationlistpage';

  useEffect(() => {
    handleResize(); // 컴포넌트가 마운트될 때 초기 값 설정
    // resize 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행

  // 접수하기 버튼 클릭 시 (팝업이 열린)해당 페이지로 이동
  const reception = (form) => {
    return (
      router.push(
        mode === 'page'
          ? { pathname: `${link}/${encodeURIComponent(JSON.stringify(form))}` }
          : { pathname: '/TSpages/Application/ApplicationPage' },
      ),
      setIsVisible(true)
    );
  };

  return (
    <>
      <Container>
        <Header currentPage={6}></Header>
        <WinterSchoolBox>
          <WinterSchoolFlyer src={mobile_winterschool} alt="winterSchool" with={0} height={0} priority />
        </WinterSchoolBox>
        <ButtonBox>
          <button
            onClick={() => {
              reception(winterSchoolForm);
            }}
          >
            접수하기
          </button>
        </ButtonBox>
        {/* <Nav></Nav> */}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
`;

const WinterSchoolBox = styled.div`
  margin: 120px 0;
`;

const WinterSchoolFlyer = styled(Image)`
  height: 100%;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #dfdbd2;
  box-shadow: 4px 2px 10px rgba(0, 0, 0, 0.4);
  position: fixed;
  bottom: 0;
  button {
    max-width: 500px;
    width: 50%;
    height: 70px;
    background: linear-gradient(180deg, #701e1e 0%, #681d1d 100%);

    border-radius: 20px;
    font-size: 24px;
    color: #fff;
    border: none;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease;
    margin: 20px 0;
    font-weight: 600;
    &:hover {
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.6);
    }
  }
`;

export default WinterSchool;

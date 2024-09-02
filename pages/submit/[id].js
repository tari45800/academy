import { useRouter } from 'next/router';
import React from 'react';
import theme from '@/components/theme';
import styled from 'styled-components';
import Header from '../TSpages/Header';
import Link from 'next/link';
import submitImg from '@/public/images/ssn/submit.png';
import Image from 'next/image';

const SubmitPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const sorry = () => {
    if (id === 'satform') {
      return '[수능 단과]반';
    }

    if (id === 'ssnregularform') {
      return '[투에스N 재수 정규]반';
    }

    if (id === 'ssnform') {
      return '[투에스N 재수]반';
    }

    if (id === 'winterschoolform') {
      return '[윈터스쿨]';
    }

    if (id === 'infosessionform') {
      return '[입시설명회]';
    }

    if (id === 'consultingform') {
      return '[입시컨설팅]';
    }

    return '';
  };

  return (
    <Container>
      <Header></Header>

      <Image className="img" src={submitImg} alt="logo" />

      <div>
        <h1>{sorry()} 접수가 완료되었습니다</h1>
      </div>

      <div className="submit_text_box">
        <div>상담원이 빠르게 확인하여 연락드리도록 하겠습니다.</div>
        <div>접수 내역은 아래 버튼을 클릭하면 확인하실 수 있습니다.</div>
      </div>

      <div className="submit_button_box">
        <Link className="link" href={`/`}>
          <button className="right_button">홈으로</button>
        </Link>
        <Link className="link" href={`/mypage`}>
          <button className="left_button">접수 내역</button>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 0 80px;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);

  .img {
    width: 85px;
    height: 85px;
    margin-bottom: 10px;
  }

  h1 {
    color: #701e1e;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 52px */
    margin-bottom: 30px;
  }

  .submit_text_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    color: #701e1e;
    font-size: 29px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }

  .submit_button_box {
    display: flex;
    gap: 20px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 45px;
    padding: 2px 28px 1px 28px;
    border: 1px solid #701e1e;
    cursor: pointer;

    color: #701e1e;
    font-size: 24px;
    font-weight: 400;
    line-height: 41.5px;
  }

  .right_button {
    background-color: transparent;
  }

  .left_button {
    color: #fff;
    background-color: #701e1e;
  }
  @media ${theme.device.mobile} {
    background: #fff;
    padding: 0 30px;
    .img {
      width: 55px;
      height: 55px;
    }
    h1 {
      color: #424242;
      font-size: 14px;
      font-weight: 600;
      line-height: 150%;
      margin-bottom: 20px;
    }

    .submit_text_box {
      color: #424242;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 40px;
    }
    button {
      /* padding: 2px 16px 1px 16px; */
      padding: 4px 30px;
      width: 115px;
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export default SubmitPage;

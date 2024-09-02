import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import Image from 'next/image';
import Apply from '@/public/images/svg/Apply.svg';
import List from '@/public/images/svg/List.svg';
import Faq from '@/public/images/svg/Faq.svg';

const ApplyButton = () => {
  const handle = () => {
    alert('준비 중인 기능입니다.');
  };

  return (
    <Container>
      <Link className="link" href={`/apply`}>
        <Image src={Apply} alt="원서접수 버튼" />
        <p>원서접수</p>
      </Link>
      <Link className="link" href={`/mypage`}>
        <Image src={List} alt="신청내역 버튼" />
        <p>신청내역</p>
      </Link>
      <Link className="link" href={`/community/faq`}>
        <Image src={Faq} alt="FAQ" />
        <p>FAQ</p>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 200px;
  right: 165px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 20;
  @media ${theme.device.tabletSL} {
    right: 70px;
  }
  @media ${theme.device.tabletL} {
    right: 0;
    top: 170px;
  }

  .link {
    display: flex;
    padding: 0.35438rem 1.0625rem 0.375rem 1.125rem;
    flex-direction: column;
    align-items: center;
    gap: 0.58313rem;
    border: 1px solid #e5e5e5;
    background: #fff;
    width: 4.6875rem;
  }
  p {
    color: #701e1e;
    text-align: center;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media ${theme.device.mobile} {
    top: 100%;
    right: 50%;
    transform: translate(50%, -100%);
    flex-direction: row;
    width: 100%;
    z-index: 100;
    .link {
      width: 100%;
      /* padding: 0.1875rem 0rem 1.3125rem 0rem; */
      padding: 0.7rem 0rem 0.7rem 0rem;
      gap: 0.125rem;
      img {
        width: 2.375rem;
        height: 2.375rem;
      }
      p {
        font-size: 0.5rem;
        font-weight: 600;
      }
    }
  }
`;

export default ApplyButton;

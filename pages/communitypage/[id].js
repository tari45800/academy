import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../TSpages/Header';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Left from '@/public/images/svg/Left.svg';
import DOMPurify from 'dompurify';

const CommunityPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState(null);

  // 쿼리로 받아온 배열을 파싱하는 코드
  useEffect(() => {
    if (id) {
      try {
        const parsedEl = JSON.parse(id);
        setForm(parsedEl);
      } catch (error) {
        // 파싱 오류 처리
        console.error('파싱 오류:', error);
      }
    }
  }, [id]);

  console.log(form && form);
  return (
    <>
      <Container>
        <Header></Header>
        <div className="pagination-back-button">
          <Image src={Left} alt="back" />
          <Link className="link" href={`/community/notice`}>
            <p>back</p>
          </Link>
        </div>
        <div className="title">
          <h1>{form && form.title}</h1>
          <p>{form && form.subTitle}</p>
        </div>
        <div className="contnet_box">
          {form && process.browser && <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(form.htmlData) }}></p>}
        </div>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  padding: 80px 20px 0 20px;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.1875rem;
  flex-shrink: 0;
  background: #fff;
  .pagination-back-button {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
    color: #0b0b0b;
    img {
      display: flex;
      width: 1.1875rem;
      height: 1.1875rem;
      padding: 0.3rem 0rem;
      justify-content: center;
      align-items: center;
    }
  }
  .link {
    color: #0b0b0b;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3375rem; /* 133.75% */
    text-transform: capitalize;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    h1 {
      color: #0b0b0b;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: 131.023%; /* 1.63781rem */
      color: #0b0b0b;
    }
    p {
      color: #0b0b0b;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 131.023%;
    }
    .contnet_box {
      color: #0b0b0b;
      font-family: Work Sans;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.30625rem; /* 149.286% */
    }
  }
`;
// const Content = styled.div`
//   width: 100%;
//   max-width: 1000px;
// `;

export default CommunityPage;

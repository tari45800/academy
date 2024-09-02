import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { onSubmit } from '@/components/FBSubmit';
import theme from '@/components/theme';
import Image from 'next/image';
import ico_arrow_before from '@/public/images/icon/ico_arrow_before.svg';
import ico_arrow_next from '@/public/images/icon/ico_arrow_next.svg';
import { popup } from './atom';
import { useRecoilState } from 'recoil';
import { authenticationState } from './atom';
import Loading from '@/pages/TSpages/loading';
import useUserStorage from './useUserStorage';


const FormPagination = ({ children, form = [], handleSubmit, pagination, setPagination }) => {
  const [isVisible, setIsVisible] = useRecoilState(popup);
  const [authentication, setAuthentication] = useRecoilState(authenticationState);
  const { storage, login, basic } = useUserStorage();

  console.log(pagination);

  const [isLoading, setIsLoading] = useState(false);

  // 페이지 버튼
  const handlePage = (num) => {
    if (num === -1 && pagination <= 1) {
      console.log('마이너스');
      return;
    }

    if (num === 1 && pagination >= form.length - 1) {
      console.log('플러스');
      return;
    }

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setPagination(pagination + num);
  };

  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <>
      <Container>
        {isLoading && <Loading text="접수" />}
        <NavBox className="pagination-nav-box">
          {form &&
            // 배열의 첫번째 인덱스를 건너뛰는 코드
            form.slice(1).map((el, idx) => {
              return (
                <>
                  <div className="pagination-nav-line"></div>
                  <span className={`pagination-nav-dot ${idx < pagination && 'pagination-current-dot'}`}></span>
                </>
              );
            })}
        </NavBox>
      <div className="pagination-required-box">
        <span className="pagination-required">*</span>필수 수집항목
        <br></br>
        {!storage && <div>비회원은 이름과, 전화번호를 통해 내역을 확인하실 수 있습니다.</div>}
      </div>
      <div className="pagination-back-button">
        {/* <Link className="link" href={`/TSpages/Application/ApplicationPage`}>
          &lt; back
        </Link> */}
          <div className="link" onClick={handleBackButtonClick}>
            &lt; back
          </div>
        </div>
        {/* <h2>필수정보</h2> */}
        <ContentBox>
          {/* 인풋폼들 */}
          {children}
          {
            <ButtonBox className="pagination-button-box">
              {pagination >= 2 && (
                <button
                  onClick={() => {
                    handlePage(-1);
                  }}
                >
                  <Image className="pagination-img" src={ico_arrow_before} alt="이전 버튼" />
                  이전
                </button>
              )}
              {pagination < form.length - 1 && (
                <button
                  onClick={handleSubmit(() => {
                    if (!authentication) {
                      alert('인증을 완료해 주세요');
                      return handlePage(0);
                    }
                    handlePage(1);
                  })}
                >
                  다음 <Image className="pagination-img" src={ico_arrow_next} alt="다음 버튼" />
                </button>
              )}
              {pagination == form.length - 1 && (
                <button
                  onClick={handleSubmit((e) => {
                    setIsLoading(true);
                    // 여기에 실제 제출 처리 로직을 추가
                    setIsVisible(false);
                    onSubmit('apply', e, form[0].title, 'student', { checked: false }, '/submit', form[0].name);

                    // 예시: 2초 후에 로딩 상태를 비활성화하는 가상의 비동기 작업
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 2000);
                  })}
                >
                  제출하기
                </button>
              )}
            </ButtonBox>
          }
        </ContentBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 32px;
  border: 1px solid var(--outline-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .pagination-back-button {
    display: none;
  }

  .pagination-required-box {
    font-size: 12px;
  }

  .pagination-required {
    color: var(--tabs-color);
    margin-right: 4px;
  }

  // 모바일
  @media ${theme.device.mobile} {
    border: none;
    padding: 0;

    .link {
      color: #0b0b0b;
      font-weight: 600;
    }
    .pagination-back-button {
      display: block;
    }
  }
`;

const ContentBox = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 600;
  }

  .input-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media ${theme.device.tabletS} {
    .input-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  // 모바일
  // @@ 나중에 해결하셔요 @@
  @media ${theme.device.mobile} {
    input,
    input[type='checkBox'] + label,
    input[type='radio'] + label {
      font-size: 14px !important;
      font-weight: 300px !important;
      padding: 10px 15px !important;
      background-color: #efefef !important;
      border: 1px solid #cbc5c5 !important;
      border-radius: 12px !important;
    }
  }
`;

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  .pagination-nav-line:nth-of-type(1) {
    display: none;
  }

  .pagination-nav-line {
    flex: 1;
    border-bottom: 1px solid rgba(185, 185, 195, 1);
  }

  .pagination-nav-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid rgba(185, 185, 195, 1);
    transition: 0.5s;
  }

  .pagination-current-dot {
    background-color: var(--tabs-color);
    border: 1px solid var(--tabs-color);
  }

  // 모바일
  @media ${theme.device.mobile} {
    .pagination-nav-line {
      display: none;
    }

    .pagination-nav-dot {
      flex: 1;
      height: 5px;
      border-radius: 5px;
      transition: 0.5s;
      border: none;
      background-color: #cbc5c5;
    }

    .pagination-current-dot {
      background-color: var(--tabs-color);
    }
  }
`;

const ButtonBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 120px;
    padding: 10px;

    border: 1px solid rgba(187, 191, 193, 1);
    border-radius: 4px;
    cursor: pointer;
  }

  // 모바일
  @media ${theme.device.mobile} {
    button {
      margin-top: 50px;
      width: 100%;
      font-size: 16px;
      font-weight: 600;
      color: white;
      border-radius: 15px;
      background-color: var(--tabs-color);
    }

    .pagination-img {
      display: none;
    }
  }
`;

export default FormPagination;

import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import Popup from '../Popup';
import PopupDetail from '../PopupDetail';
import Link from 'next/link';
import Image from 'next/image';
import ico_arrow_right from '@/public/images/icon/ico_arrow_right.png';
import useUserStorage from '../useUserStorage';
import { useRecoilState } from 'recoil';
import { popup } from '../atom';
import Header from '@/pages/TSpages/Header';
import { deletePost } from '../FBSubmit';

const CategoryLayout = ({ pageName, rightContentItems, currentPage, link, mode, admin = false }) => {
  const [isVisible, setIsVisible] = useRecoilState(popup);
  const [categoryNum, setCategoryNum] = useState(0);

  const handlePopup = (idx) => {
    setIsVisible(true);
    setCategoryNum(idx);
  };

  const { storage } = useUserStorage();

  // 접수 페이지 카테고리
  const applicationBox = (form, idx) => {
    const applicationBoxContent = (
      <div className="application-text-box">
        <h1>{form[0].title}</h1>
        <h2>{form[0].subTitle}</h2>
        <div className="application-mobile-tag-img-box">
          {form[0].state === true && (
            <div className="application-tag-box">
              <div>모집중</div>
            </div>
          )}
          {form[0].state === false && (
            <div className="application-tag-box done">
              <div>마감</div>
            </div>
          )}
          {form[0].state === 'earlyClose' && (
            <div className="application-tag-box done">
              <div>조기마감</div>
            </div>
          )}
          <div className="application-img-box">
            <Image src={ico_arrow_right} alt="이동" />
          </div>
        </div>
      </div>
    );

    return form[0].state === true || admin ? (
      <Link
        className="link"
        // 링크로 배열 옮기기(직렬화)
        href={`${link}/${form[0].name}`}
        key={idx}
      >
        {applicationBoxContent}
      </Link>
    ) : (
      <div
        onClick={() => {
          alert('2024 윈터스쿨은 조기마감되었습니다. 감사합니다.');
        }}
      >
        {applicationBoxContent}
      </div>
    );
  };

  const communityBox = (form, idx) => {
    // console.log(form.data());
    return (
      <>
        <Link
          className="link"
          // 링크로 배열 옮기기(직렬화)
          // href={mode == 'page' ? `${link}/${form.id}` : `${link}`}
          href={mode == 'page' ? `${link}/${encodeURIComponent(JSON.stringify(form.data()))}` : `${link}`}
          key={idx}
        >
          <div className="application-text-box">
            <h1>{form.data().title}</h1>
            <h2>{form.data().subTitle}</h2>
            <div className="application-mobile-tag-img-box">
              <div className="application-img-box">
                <Image src={ico_arrow_right} alt="이동" />
              </div>
              {storage && storage.email.includes('@everydaymath.kr') && (
                <>
                  <Link className="link" href={`/postpage/${form.id}`}>
                    <div>글 수정하기</div>
                  </Link>
                  <div
                    className="delete"
                    onClick={() => {
                      deletePost('WritingForm', form.id);
                    }}
                  >
                    글 삭제하기
                  </div>
                </>
              )}
            </div>
          </div>
        </Link>
      </>
    );
  };

  const ManagementBox = (form) => (
    <div className="application-text-box">
      <h1>{form.title}</h1>
      <h2>{form.subTitle}</h2>
      <div className="application-mobile-tag-img-box">
        <div className="application-img-box">
          <Image src={ico_arrow_right} alt="이동" />
        </div>
      </div>
    </div>
  );

  return (
    <Container $pageName={pageName}>
      <Header currentPage={currentPage}></Header>

      {rightContentItems == '없다' ? (
        <div className="none-data">
          <p>등록된 글이 없습니다.</p>
        </div>
      ) : (
        rightContentItems.map((form, idx) => {
          return (
            <div key={idx}>
              <div
                className="application-content-box"
                onClick={() => {
                  handlePopup(idx);
                }}
              >
                {pageName === 'applicationBox' && applicationBox(form, idx)}
                {pageName === 'communityBox' && communityBox(form, idx)}
                {pageName === 'ManagementBox' && ManagementBox(form)}
              </div>

              {isVisible && categoryNum === idx && mode !== 'page' && (
                <Popup setIsVisible={setIsVisible} currentPage={currentPage}>
                  {pageName === 'communityBox' && <PopupDetail doc={form} />}
                  {pageName === 'ManagementBox' && <PopupDetail doc={form} />}
                </Popup>
              )}
            </div>
          );
        })
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 55%;
  padding-left: 1rem;
  display: grid;
  grid-template-columns: ${(props) => (props.$pageName === 'applicationBox' ? 'repeat(2, 1fr)' : 'none')};
  gap: 20px;
  z-index: 10;
  white-space: pre-wrap;
  @media ${theme.device.tabletL} {
    /* width: 60%; */
  }

  @media ${theme.device.mobile} {
    width: 100%;
    padding-left: 0rem;
  }
  // 토글 박스
  .application-content-box {
    padding: 30px;
    border: 1.5px solid rgba(177, 177, 177, 0.38);
    background-color: rgba(255, 255, 255, 0.53);
    cursor: pointer;
  }

  // 원서접수 제목
  h1 {
    letter-spacing: -0.5px;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2rem;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .application-text-box {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 20px;
    font-weight: 400;
    color: #0b0b0b;

    .application-tag-box {
      width: 100%;
      div {
        display: inline-block;
        padding: 0 10px;
        font-size: 18px;
        color: var(--tabs-color);
        border: 1px solid var(--tabs-color);
        background-color: rgb(112, 30, 30, 0.15);
      }
    }
    .done {
      div {
        color: #969696;
        border: 1.5px solid #969696;
        background-color: rgb(11, 11, 11, 0.1);
      }
    }
  }

  .application-img-box {
    margin-top: 40px;
    display: flex;
    width: 100%;
    justify-content: end;

    img {
      height: 21px;
    }
  }

  .none-data {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--tabs-color);
    background-color: rgba(255, 255, 255, 0.53);
    p {
      padding: 20px 0;
    }
  }

  // 큰 테블릿
  @media ${theme.device.tabletL} {
    gap: 10px;

    .application-content-box {
      padding: 20px;
    }
  }

  // 작은 테블릿
  @media ${theme.device.tablet} {
    gap: 20px;
    grid-template-columns: repeat(1, 1fr);

    .application-content-box {
      min-height: 200px;
    }
  }

  // 모바일
  @media ${theme.device.mobile} {
    width: 100%;

    .application-content-box {
      background-color: #efefef;
      border-radius: 15px;
      min-height: 120px;
    }

    // 원서접수 제목
    h1 {
      font-size: 14px;
      color: #0b0b0b;
    }

    h2 {
      font-size: 14px;
      color: var(--tabs-color);
    }

    .application-text-box {
      font-size: 14px;
      .application-tag-box {
        div {
          font-size: 14px;
        }
      }
    }

    .application-mobile-tag-img-box {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }

    .application-img-box {
      margin-top: 0;
    }
    .none-data {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

export default CategoryLayout;

import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../components/theme';
import userStorage from '@/components/useUserStorage';
import Link from 'next/link';
import Image from 'next/image';
import logoRed from '@/public/images/logoRed.png';
import close from '@/public/images/svg/Shape.svg';
import down from '@/public/images/svg/Rectangle.svg';
import up from '@/public/images/svg/Rectangle2.svg';

const DesktopMenu = ({ toggle, handleMenu, dropdowns, setDropdowns, data }) => {
  const toggleDropdown = (index) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[index] = !updatedDropdowns[index];
    setDropdowns(updatedDropdowns);
  };

  // text,link 배열을 합치기
  const combinedArrays = data?.map((item) => ({
    title: item.title,
    combined: item.text?.map((text, index) => ({ text, link: item.link[index] })),
  }));

  return (
    <>
      <Container $toggle={toggle}>
        <DesktopMenuWrap>
          <MenuHeader>
            <Link className="link" href={`/`}>
              <Image src={logoRed} alt="logo" />
            </Link>
            <Image className="close" src={close} alt="닫기버튼" onClick={handleMenu} />
          </MenuHeader>
          <ContentBox>
            {dropdowns?.map((isOpen, index) => (
              <div key={index}>
                <Content>
                  <MainContent onClick={() => toggleDropdown(index)}>
                    <TextBox>
                      <p>{data[index].title}</p>
                    </TextBox>
                    <ImageBox>{isOpen ? <Image src={up} alt="닫기" /> : <Image src={down} alt="열기" />}</ImageBox>
                  </MainContent>
                  {isOpen && (
                    <div>
                      {/* 드롭다운 내용 */}
                      <DetailContent>
                        {combinedArrays[index].combined.map((combinedData, i) => {
                          return (
                            <div key={i}>
                              <Link href={`/TSpages/` + `${combinedData.link}`}>
                                <p>{combinedData.text}</p>
                              </Link>
                            </div>
                          );
                        })}
                      </DetailContent>
                    </div>
                  )}
                </Content>
              </div>
            ))}
          </ContentBox>
        </DesktopMenuWrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: ${(props) => (props.$toggle ? '0' : '-60%')};
  height: 100vh;
  overflow-y: scroll;
  background-color: white;
  transition: 0.5s ease-in-out;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
  box-shadow: 4px 0px 23px rgba(0, 0, 0, 0.1);
  width: 430px;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
  @media ${theme.device.tablet} {
    width: 400px;
  }
  @media ${theme.device.mobile} {
    display: none;
  }
`;

const DesktopMenuWrap = styled.div`
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

const MenuHeader = styled.div`
  padding: 1rem 1.9rem;
  border-bottom: 4px solid #701e1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
  width: 430px;
  height: 6.2rem;
  transition: 0.5s ease-in-out;
  .link {
    img {
      width: 140px;
      height: auto;
      cursor: pointer;
    }
  }
  .close {
    width: 24px;
    cursor: pointer;
  }
  @media ${theme.device.tablet} {
    width: 400px;
    .link {
      img {
        width: 130px;
      }
    }
    .close {
      width: 20px;
    }
  }
`;

const ContentBox = styled.div`
  margin-top: 103px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1.5px solid #701e1e;
  padding: 20px 30px;
  @media ${theme.device.tablet} {
    padding: 16px 30px;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  cursor: pointer;
`;

const DetailContent = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 10px;
  div {
    display: flex;
    justify-content: start;
    background: #fff;
    margin: 10px 10px 0 0;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
    a {
      text-decoration: none;
    }
    p {
      color: #701e1e;
      padding: 10px 20px;
      @media ${theme.device.tablet} {
        padding: 10px 14px;
      }
    }
  }
`;

const TextBox = styled.div`
  font-size: 22px;
  line-height: 27px;
  color: #701e1e;
  font-weight: 500;
`;

const ImageBox = styled.div`
  cursor: pointer;
  padding: 10px 0;
  .img {
    width: 130px;
  }
  /* @media ${theme.device.tabletL} {
    background: blue;
    width: 400px;
    .link {
      img {
        width: 130px;
      }
    }
    .close {
      width: 20px;
    }
  } */
`;

export default DesktopMenu;

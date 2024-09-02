import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import Image from 'next/image';
import Header from '@/pages/TSpages/Header';
import Nav from '@/pages/TSpages/Nav';

const RightImageTextContent = ({ rightContentItems, currentPage, contentClass = '' }) => {
  // layoutType: img+text
  return (
    <>
      <Header currentPage={currentPage}></Header>
      <Container className={` ${contentClass}`}>
        {rightContentItems.map((item, idx) => (
          <div className="total_box" key={idx}>
            <div className="img_box">
              <Image
                src={item.imageSrc}
                alt={item.text}
                style={{ width: '100%', height: '100%' }}
                sizes="100vw"
                width={0}
                height={0}
              />
            </div>
            <div className="text_box">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Container>
      {/* <Nav></Nav> */}
      {/* <Footer> */}

      {/* </Footer> */}
    </>
  );
};

const Container = styled.div`
  width: 50%;
  padding-left: 1rem;
  @media ${theme.device.tablet} {
    width: 60%;
  }
  @media ${theme.device.mobile} {
    width: 100%;
    padding-left: 0rem;
  }

  div:nth-child(1) {
    padding-top: 0px;
  }
  .total_box {
    margin: 0 0 20px;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    min-height: 195px;

    @media ${theme.device.tabletXL} {
      margin: 0px;
    }
    @media ${theme.device.mobile} {
      padding: 0;
      flex-direction: column;
    }
    :not(:first-child) {
      margin-bottom: 20px;
    }
    .img_box {
      width: 10.5625rem;
      height: 11.37075rem;
      @media ${theme.device.tabletL} {
        height: 10.5625rem;
      }
      @media ${theme.device.tablet} {
        height: 10rem;
      }
      @media ${theme.device.mobile} {
        width: 100%;
        height: 219px;
        margin-bottom: 10px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }

    .text_box {
      width: 100%;
      margin-left: 40px;
      padding-bottom: 40px;
      border-bottom: 1.5px solid #0b0b0b;
      @media ${theme.device.tabletL} {
        margin-left: 30px;
        padding-bottom: 20px;
      }
      @media ${theme.device.mobile} {
        margin-left: 0;
      }
      h4 {
        /* font-size: 34px; */
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2rem;
        letter-spacing: 0px;
        text-align: left;
        @media ${theme.device.tablet} {
          font-size: 1.6rem;
        }
        @media ${theme.device.tabletS} {
          font-size: 1.4rem;
          line-height: 1.6rem;
        }
        @media ${theme.device.mobile} {
          font-size: 1.2rem;
          line-height: 1.8rem;
        }
      }
      p {
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.7rem;
        letter-spacing: -0.5px;
        text-align: left;
        margin-top: 20px;
        width: 100%;
        @media ${theme.device.tabletXL} {
          line-height: 1.6rem;
        }
        @media ${theme.device.tablet} {
          margin-top: 14px;
          font-size: 1rem;
          max-width: 300px;
          line-height: 1.4rem;
        }
        @media ${theme.device.tabletS} {
          font-size: 0.9rem;
          line-height: 1.3rem;
          margin-top: 10px;
        }
        @media ${theme.device.mobile} {
          font-size: 0.8rem;
          font-weight: 400;
          line-height: 1.1rem;
          max-width: 100%;
          margin-top: 0px;
        }
      }
    }
  }
`;

export default RightImageTextContent;

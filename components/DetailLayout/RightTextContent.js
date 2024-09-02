import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import Image from 'next/image';
import ico_minus from '@/public/images/icon/ico_minus.png';
import ico_plus from '@/public/images/icon/ico_plus.png';
import Header from '@/pages/TSpages/Header';
import Nav from '@/pages/TSpages/Nav';

const RightContentBox = ({ rightContentItems, currentPage }) => {
  const contentItems = rightContentItems.slice(1);
  const [items, setItems] = useState([]);

  const handleToggle = (index) => {
    if (items.includes(index)) {
      setItems(items.filter((itemIndex) => itemIndex !== index));
    } else {
      setItems([...items, index]);
    }
  };
  return (
    <>
      <Header currentPage={currentPage}></Header>
      <Container>
        <h3>{rightContentItems[0].header}</h3>
        {contentItems.map((item, index) => (
          <div key={index}>
            <div className="text_box">
              <div className="toggle_box" onClick={() => handleToggle(index)}>
                {items.includes(index) ? (
                  <>
                    <Image src={ico_minus} alt="닫기" />
                    <p className="open_title">{item.title}</p>
                  </>
                ) : (
                  <>
                    <Image src={ico_plus} alt="열기" />
                    <p>{item.title}</p>
                  </>
                )}
              </div>

              {items.includes(index) && (
                // 모바일용
                <div className="content mobile">
                  <h4>{item.title}</h4>
                  <ul>
                    <li>
                      <p>◆</p>
                      <span> {item.text}</span>
                    </li>
                  </ul>
                </div>
              )}

              <div className="content">
                <h4>{item.title}</h4>
                <ul>
                  {item.text.map((contentItem, idx) => (
                    <li key={idx}>
                      <p>◆</p>
                      <span>{contentItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className="text_box"></div>
      </Container>
      {/* <Nav></Nav> */}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  width: 50%;
  @media ${theme.device.tablet} {
    width: 60%;
  }
  @media ${theme.device.mobile} {
    width: 100%;
    padding-left: 0rem;
  }
  h3 {
    letter-spacing: -0.5px;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2rem;
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
      display: none;
    }
  }
  .text_box {
    max-width: 656px;
    margin-top: 60px;
    @media ${theme.device.tabletXL} {
      margin-top: 30px;
    }
    @media ${theme.device.tablet} {
      margin-top: 20px;
    }
    @media ${theme.device.tabletS} {
      margin-top: 10px;
    }
    @media ${theme.device.mobile} {
      margin: 10px 0 10px;
    }
    .toggle_box {
      display: none;
      @media ${theme.device.mobile} {
        display: block;
        display: flex;
        justify-content: start;
        align-items: center;
      }
      img {
        width: 13px;
        height: 11.67px;
        margin: 10px;
      }
      p {
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0px;
        text-align: left;
      }
      .open_title {
        color: rgba(149, 161, 187, 1);
      }
    }
    .content {
      /* background: saddlebrown; */
      display: flex;
      flex-direction: column;
      @media ${theme.device.mobile} {
        display: none;
      }
      h4 {
        font-size: 1.7rem;
        font-weight: 400;
        line-height: 2rem;
        letter-spacing: -0.5px;
        text-align: left;
        @media ${theme.device.tablet} {
          font-size: 1.5rem;
        }
        @media ${theme.device.tabletS} {
          font-size: 1.3rem;
          line-height: 1.5rem;
        }
        @media ${theme.device.mobile} {
          padding-left: 20px;
          font-size: 1rem;
          line-height: 1.8rem;
          font-weight: 500;
          margin-top: 10px;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        padding: 0%;
        @media ${theme.device.mobile} {
          margin-top: 10px;
        }
        li {
          list-style: none;
          font-size: 1.1rem;
          font-weight: 400;
          line-height: 1.6rem;
          letter-spacing: -0.5px;
          text-align: left;
          display: flex;
          justify-content: center;
          padding: 30px 0 0 0;
          @media ${theme.device.tabletL} {
            padding: 20px 0 0 0;
            line-height: 1.5rem;
          }
          @media ${theme.device.tablet} {
            padding: 16px 0 0 0;
            font-size: 0.85rem;
            line-height: 24px;
          }
          @media ${theme.device.mobile} {
            padding: 0 0 0 20px;
            font-size: 0.8rem;
            line-height: 1.4rem;
            font-weight: 400;
          }
          p {
            padding-right: 20px;
            color: #701e1e;
            @media ${theme.device.tablet} {
              padding-right: 10px;
            }
            @media ${theme.device.mobile} {
              display: none;
            }
          }
        }
      }
    }
    .mobile {
      display: none;
      @media ${theme.device.mobile} {
        display: block;
      }
    }
  }
`;

export default RightContentBox;

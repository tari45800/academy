import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import Popup from '../Popup';
import PopupDetail from '../PopupDetail';
import Image from 'next/image';
import ico_arrow_right from '@/public/images/icon/ico_arrow_right.png';

const RightColummBoxContent = ({ rightContentItems, currentPage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [categoryNum, setCategoryNum] = useState(0);

  const handlePopup = (idx) => {
    setIsVisible(true);
    setCategoryNum(idx);
  };

  return (
    <Container>
      {rightContentItems.map((item, idx) => {
        return (
          <div key={idx}>
            <div
              className="total_box"
              onClick={() => {
                handlePopup(idx);
              }}
            >
              <div className="text_box">
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
              </div>
              <div className="img_box">
                <Image src={ico_arrow_right} alt="이동" />
              </div>
            </div>
            {/* 클릭된 모달이 보여짐 */}
            {isVisible && categoryNum === idx && (
              <Popup setIsVisible={setIsVisible} currentPage={currentPage}>
                <PopupDetail doc={item} />
              </Popup>
            )}
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  @media ${theme.device.tablet} {
    gap: 10px;
  }
  .total_box:hover {
    background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
  }
  .total_box {
    cursor: pointer;
    border: 1.5px solid rgba(177, 177, 177, 1);
    display: flex;
    justify-content: space-between;
    min-height: 287px;
    padding: 30px;
    @media ${theme.device.tablet} {
      padding: 20px;
    }
    .text_box {
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: 80%;
      h3 {
        font-size: 34px;
        font-weight: 500;
        line-height: 42px;
        letter-spacing: 0px;
        text-align: left;
        word-break: keep-all;
      }
      p {
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0px;
        text-align: left;
        padding-top: 10px;
      }
    }
    .img_box {
      display: flex;
      align-items: end;
      img {
        width: 21px;
        height: 21px;
      }
    }
  }
`;

export default RightColummBoxContent;

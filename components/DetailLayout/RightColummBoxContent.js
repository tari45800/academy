import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import Popup from '../Popup';
import PopupDetail from '../PopupDetail';
import Link from 'next/link';
import { deletePost } from '../FBSubmit';
import { collection, setDoc, getDocs, doc, deleteDoc } from 'firebase/firestore/lite';
import { db } from '@/components/Firebase';
import Image from 'next/image';
import ico_arrow_right from '@/public/images/icon/ico_arrow_right.png';

const RightColummBoxContent = ({ rightContentItems }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [categoryNum, setCategoryNum] = useState(0);

  const handlePopup = (idx) => {
    setIsVisible(true);
    setCategoryNum(idx);
  };

  const [storage, setStorage] = useState();

  useEffect(() => {
    const data = localStorage.getItem('userData');
    if (data === undefined) {
      return;
    } else {
      setStorage(JSON.parse(data));
    }
  }, []);

  // layoutType: open_columm_box_button
  return (
    <Container>
      {rightContentItems.map((doc, idx) => {
        return (
          <div key={idx}>
            <div
              className="total_box"
              onClick={() => {
                handlePopup(idx);
              }}
            >
              <div className="text_box">
                <h3>{doc.data().title}</h3>
                <p>{doc.data().subTitle}</p>
              </div>
              <div className="img_box">
                <Image src={ico_arrow_right} alt="이동" />
              </div>
            </div>
            {/* 클릭된 모달이 보여짐 */}
            {isVisible && categoryNum === idx && (
              <Popup setIsVisible={setIsVisible}>
                <PopupDetail doc={doc} />
              </Popup>
            )}
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  .link,
  .delete {
    display: flex;
    align-items: center;
    color: var(--tabs-color);
    border: 1px solid var(--tabs-color);
  }

  width: 90vh;
  max-width: 703px;
  margin-right: 130px;
  @media ${theme.device.tabletXL} {
    width: 80vh;
    margin-right: 0px;
  }
  @media ${theme.device.tabletL} {
    width: 70vh;
  }
  @media ${theme.device.tablet} {
    width: 60vh;
  }
  @media ${theme.device.tabletS} {
    width: 50vh;
  }

  div:nth-child(1) {
    /* margin-top: 0px; */
  }
  .total_box:hover {
    background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
  }
  .total_box {
    cursor: pointer;
    border: 1.5px solid rgba(177, 177, 177, 1);
    display: flex;
    justify-content: space-between;
    min-height: 195px;
    margin: 0 0 20px;
    padding: 30px;
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
      height: 100%;
      display: flex;
      justify-content: space-between;
      img {
        width: 21px;
        height: 21px;
      }
    }
  }
`;

export default RightColummBoxContent;

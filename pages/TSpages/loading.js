import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = ({ text }) => {
  return (
    <Container>
      <LoadingContainer>
        <Spinner />
        {/* <p>{text} 중입니다.</p> */}
      </LoadingContainer>
    </Container>
  );
};

// 스타일링에 사용할 keyframes를 만듭니다.
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

// 스타일 컴포넌트를 생성합니다.
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  /* background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%); */
  width: 500px;
  height: 300px;
  border-radius: 5px;
  p {
    /* color: #701e1e; */
    font-weight: 500;
    color: #fff;
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #701e1e;
  /* border-top: 4px solid #fff; */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${rotate} 1s linear infinite;
  margin-bottom: 20px;
`;
export default Loading;

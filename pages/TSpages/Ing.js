import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const Ing = () => {
  // 인가코드를 라우터로 받아오기
  const router = useRouter();
  const { code, error } = router.query;

  useEffect(() => {
    // 인가 코드가 있다면
    if (code) {
      // 받아온 인가코드를 통해 토큰 받아오기
      getToken(code);
    } else if (error) {
      alert('인가코드 없음');
    }
  }, [code, error]);

  // 토큰을 받아오는 함수
  const getToken = async (req) => {
    const code = 'code=' + req;
    const grant_type = 'grant_type=authorization_code';
    // 외부에 노출되면 안되기 때문에 env파일로 사용해주세요.
    const client_id = `client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`;

    // 마찬가지로 위 redirect_uri와 동일하게 작성
    // env로 만들어서 반복해서 쓰시면 좋을 것 같습니다.
    const redirect_uri = `redirect_uri=${process.env.NEXT_PUBLIC_BASIC_URL}/TSpages/Ing`;

    try {
      const token = await axios.post(
        `https://kauth.kakao.com/oauth/token?${grant_type}&${client_id}&${redirect_uri}&${code}`,
        {
          headers: {
            Authotyperization: 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      );

      // 유저의 정보를 받아오기
      getKakaoUser(token.data);
    } catch (err) {
      console.log(err.data);
    }
  };

  // 유저의 정보를 받아오는 함수
  const getKakaoUser = async (req) => {
    const accessToken = req.access_token;

    try {
      const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // 이 정보를 스토리지에 저장하면 됩니다.
      // 스토리지에 저장할 때는
      // 기존의 파이어베이스 로그인 정보가 담기는 것과 동일하게 넣어줘야 합니다.
      // 아니면 다른 스토리지 정보를 가져오는 곳에서 오류가 날 수 있기 때무넹
      const kakaoStorage = {
        email: kakaoUser.data.kakao_account.email,
        displayName: kakaoUser.data.kakao_account.name,
        createAt: kakaoUser.data.kakao_account.connected_at,
        phoneNumber: kakaoUser.data.kakao_account.phone_number.replace(/[^0-9]/g, '').replace(/^82/, '0'),
      };

      localStorage.setItem('userData', JSON.stringify(kakaoStorage));
      setTimeout(() => {
        Router.push('/');
      }, 1000);
    } catch (err) {
      console.log(err.data);
    }
  };

  return (
    <LoadingContainer>
      <Spinner />
      <p>로그인 중입니다..</p>
    </LoadingContainer>
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

// 스타일 컴포넌트를 생성합니다.
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
  p {
    color: #701e1e;
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #701e1e;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${rotate} 1s linear infinite;
  margin-bottom: 20px;
`;
export default Ing;

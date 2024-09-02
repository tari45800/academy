import React, { useEffect } from 'react';

const KakaoLogin = () => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('650526271ced16c4fd2b89010f98f862');
    }
  }, []);

  const redirectUri = `${process.env.NEXT_PUBLIC_API_URL}/TSpages/Login`;

  const onLoginWithKakao = () => {
    window.Kakao.Auth.authorize(redirectUri);
  };
  return (
    <div>
      <button onClick={onLoginWithKakao}>카카오 로그인</button>
    </div>
  );
};

export default KakaoLogin;

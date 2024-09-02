import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Nav from './Nav';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { loginForm } from '../../components/formobjects/loginForm';
import Input from '@/components/Input';
import Router, { useRouter } from 'next/router';
import theme from '../../components/theme';
import Image from 'next/image';
import naver_btn from '@/public/images/naver_btn.png';
import kakao_btn from '@/public/images/kakao_btn.png';
import google_btn from '@/public/images/google_btn.png';
import Link from 'next/link';
import Loading from './loading';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.history.pushState('', '', '/signin');
  }, []);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  // 로딩 스테이트
  const [loding, setLoding] = useState(false);

  // 로그인 유지 스테이트
  const [isChecked, setIsChecked] = useState(false);

  // 로그인 유지 함수
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // 일반 로그인
  const login = async ({ email, password }) => {
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      // 로그인 유지
      isChecked
        ? localStorage.setItem('userData', JSON.stringify(user))
        : sessionStorage.setItem('userData', JSON.stringify(user));

      Router.push('/');
    } catch ({ code, message }) {
      console.log(message);
      alert('잘못된 아이디 혹은 비밀번호 입니다.');
    }
  };

  // // 구글 로그인
  // const handleGoogleLogin = async () => {
  //   try {
  //     setLoding(true);
  //     const auth = getAuth();
  //     const provider = new GoogleAuthProvider();
  //     const { user } = await signInWithPopup(auth, provider);
  //     setLoding(false);

  //     // 로그인 유지
  //     isChecked
  //       ? localStorage.setItem('userData', JSON.stringify(user))
  //       : sessionStorage.setItem('userData', JSON.stringify(user));

  //     Router.push('/');
  //   } catch (error) {
  //     setLoding(false);
  //     console.log(error);
  //     alert('잘못된 접근입니다.');
  //   }
  // };

  // const temporaryAlert = () => {
  //   alert('준비중인 서비스 입니다.');
  // };

  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_JAVASCRIPT_KEY;

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_REST_API_KEY);
    }
  }, []);

  function loginWithKakao() {
    Kakao.Auth.authorize({
      redirectUri: `${process.env.NEXT_PUBLIC_BASIC_URL}/TSpages/Ing`,
    });
  }

  //url이 로그인인지 확인 코드
  const { pathname } = router;
  const pathSegments = pathname.split('/');
  const location = pathSegments[pathSegments.length - 1];

  return (
    <Container>
      {isLoading && <Loading text="로그인" />}
      <Header location={location} />
      <ContentBox className="login-container">
        <h1>로그인</h1>
        <div className="login-inputs-box">
          <Input form={loginForm} errors={errors} register={register} />
          <div className="keep-login-box">
            <input id={'login-checkbox'} type="checkBox" checked={isChecked} onChange={handleCheckboxChange} />
            <label htmlFor="login-checkbox"></label>
            <div className={`login-checkbox-text ${isChecked ? 'checked' : ''}`}>로그인 유지</div>
          </div>
        </div>

        <div>
          <Link className="link" href={`/resetpasswd`}>
            <div className="login-find-password">비밀번호를 잊어버리셨나요?</div>
          </Link>
        </div>

        <div className="login-option-box">
          <button
            className="login-button"
            onClick={handleSubmit((e) => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 2000);
              login(e);
            })}
          >
            로그인
          </button>

          <div className="sorry">혹은</div>

          <div className="login-sns-box">
            <Image className="login-img" src={kakao_btn} alt="카카오 로그인" onClick={loginWithKakao} />
            {/* {loding ? (
              <div className="loading"></div>
            ) : (
              <Image
                className="login-img"
                onClick={handleGoogleLogin}
                src={google_btn}
                alt="구글 로그인"
              />
            )} */}
          </div>
          <div>
            <Link className="link" href={`./JoinUs`}>
              회원이 아니신가요? <span className="login-join-button">회원가입</span>
            </Link>
          </div>
        </div>
      </ContentBox>
      {/* <Nav></Nav> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
  @media ${theme.device.mobile} {
    background: none;
  }

  .login-img {
    cursor: pointer;
  }
`;
const ContentBox = styled.div`
  max-width: 450px;
  width: 100%;
  color: #646667;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 160px;
  h1 {
    font-size: 28px;
    font-weight: 600;
    color: #0b0b0b;
  }

  // 로그인에서 사용할 인풋 레이아웃
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .input-title-box {
      color: #0b0b0b;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
      span {
        display: none;
      }
    }

    input {
      font-size: 14px;
      padding: 0;
      height: 44px;
    }
  }

  /* // 패스워드
  .input-box:nth-of-type(2) {
    input {
      border: 1px solid red;
    }
  } */

  // 로그인 유지 체크박스 레이아웃
  .keep-login-box {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  #login-checkbox {
    display: none;
  }

  #login-checkbox + label {
    display: inline-block;
    height: 15px;
    width: 15px;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
  }

  #login-checkbox:checked + label {
    background-color: var(--tabs-color);
    /* opacity: 0.5; */
  }

  .login-checkbox-text {
    font-size: 15px;
    font-weight: 300;
  }

  // 비밀번호 찾기 레이아웃
  .login-find-password {
    display: flex;
    justify-content: end;

    font-size: 14px;
    font-weight: 300;
  }

  // 로그인 버튼
  .login-button {
    margin-top: 10px;
    width: 100%;
    padding: 12px 0;
    font-size: 18px;
    font-weight: 600;
    color: white;
    border: none;
    border-radius: 15px;
    background-color: var(--tabs-color);

    cursor: pointer;
  }

  // 이외의 것 들
  .login-option-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 14px;

    @media ${theme.device.mobile} {
      gap: 16px !important;
    }

    img {
      width: 200px;
      height: auto;
    }

    .login-sns-box {
      display: flex;
      justify-content: center;
      gap: 30px;
      width: 100%;
      background-color: #fee601;
      border-radius: 15px;
    }

    @media ${theme.device.mobile} {
      .sorry {
        display: none;
      }
    }
  }

  .login-join-button {
    font-weight: 600;
  }

  .link {
    color: #646667;
  }

  .loading {
    display: inline-block;
    width: 70px;
    height: 70px;
    border: 3px solid #fff;
    border-radius: 50%;
    border-top-color: #646667;
    background-color: white;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @media ${theme.device.tabletL} {
    padding-top: 130px;
  }
  @media ${theme.device.tablet} {
    padding-top: 100px;
  }
  @media ${theme.device.tabletSL} {
    // 로그인에서 사용할 인풋 레이아웃
    .input-container {
      .input-title-box {
        /* font-size: 24px; */
      }

      input {
        font-size: 14px;
      }
    }
    .login-checkbox-text {
      font-size: 14px;
      font-weight: 300;
      color: #0b0b0b;
    }
  }

  @media ${theme.device.mobile} {
    padding: 10px;
    font-size: 14px;

    // 로그인에서 사용할 인풋 레이아웃
    .input-container {
      .input-title-box {
        font-size: 14px;
      }

      input {
        font-size: 14px;
        padding: 10px 25px 10px 25px;
        border-bottom: none;
        border: 0.25 solid #e2daec;
        border-radius: 15px;
        background-color: #efefef;
      }
    }

    // 체크박스 레이아웃
    #login-checkbox + label {
      border: 1px solid #efefef;
    }

    .login-checkbox-text {
      font-size: 14px;
      font-weight: 300;
      color: #0b0b0b;
    }

    // 비밀번호 찾기 레이아웃
    .login-find-password {
      font-size: 14px;
      color: #646667;
    }

    // 로그인 버튼
    .login-button {
      padding: 15px 0;

      font-size: 16px;
    }

    // 떨거지들
    .login-option-box {
      gap: 35px;
      img {
        /* width: 54px; */
        width: 200px;
      }
      .login-sns-box {
        gap: 15px;
      }
    }
  }
`;

export default Login;

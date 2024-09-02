import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { useForm } from 'react-hook-form';
import { joinUsForm } from '../../components/formobjects/joinusForm';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Input from '@/components/Input';
import Router from 'next/router';
import { onJoinUs } from '@/components/FBSubmit';
import { useRecoilState } from 'recoil';
import { authenticationState } from '@/components/atom';
import theme from '@/components/theme';
import Loading from './loading';

const JoinUS = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.history.pushState('', '', '/signup');
  }, []);
  const [authentication, setAuthentication] = useRecoilState(authenticationState);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  // 회원가입 코드
  const join = async ({ nickName, password, email, phoneNumber }) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      // 데이터를 따로 넣어주는 코드
      await updateProfile(auth.currentUser, { displayName: nickName });
      await onJoinUs({ displayName: nickName, phoneNumber, email }, './Login');

      alert(nickName + '님 회원가입이 완료 되었습니다.');
      // Router.push('./Login');
    } catch (err) {
      alert('이미 사용 중인 이메일입니다');
      console.log(err);
    }
  };

  return (
    <Container>
      {isLoading && <Loading text="회원가입" />}
      <Header></Header>
      <ContentBox>
        <h1 className="title">{joinUsForm[0]}</h1>
        <div className="joinus-required-box">
          <span className="joinus-required">*</span>필수 항목
        </div>
        <Input form={joinUsForm} errors={errors} register={register} watch={watch} />
        <button
          className={!authentication && 'joinus_disabled'}
          disabled={!authentication}
          onClick={handleSubmit((e) => {
            setIsLoading(true);
            join(e);
            setTimeout(() => {
              setIsLoading(false);
            }, 2000);
          })}
        >
          가입하기
        </button>
      </ContentBox>
      {/* <Nav></Nav> */}
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${theme.device.mobile} {
    background: white;
    padding: 0 30px;
  }

  @media ${theme.device.tabletS} {
    .input-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  // 모바일
  // @@ 나중에 해결하셔요 @@
  @media ${theme.device.mobile} {
    input,
    input[type='radio'] + label {
      height: 44px !important;
      font-size: 14px !important;
      font-weight: 300px !important;
      padding: 10px 25px !important;
      background-color: #efefef !important;
      border: 1px solid #cbc5c5 !important;
      border-radius: 14px !important;
    }
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 140px 0;
  max-width: 450px;
  width: 100%;
  color: #0b0b0b;
  gap: 20px;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;

    .input-title-box {
      color: #0b0b0b;
      font-size: 14px;
      font-weight: bold;
    }

    input {
      font-size: 14px;
      padding: 0;
      height: 36px;
    }
  }

  .input-error-message {
    font-size: 12px;
  }

  button {
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

  .joinus-required-box {
    font-size: 12px;
    width: 100%;
  }

  .joinus-required {
    color: var(--tabs-color);
    margin-right: 4px;
  }

  .joinus_disabled {
    color: rgba(150, 150, 150, 0.5);
    cursor: default;
  }
`;

export default JoinUS;

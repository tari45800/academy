import React from 'react';
import styled from 'styled-components';
import Nav from './TSpages/Nav';
import Header from './TSpages/Header';
// import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
// import { useForm } from 'react-hook-form';
import { resetPasswdForm } from '@/components/formobjects/resetPasswdForm';
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ResetPasswd = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const auth = getAuth();

  // 일반 로그인
  const login = async ({ email }) => {
    try {
      await sendPasswordResetEmail(auth, email)
        .then((a) => {
          alert(email + '에서 비밀번호를 재설정 해주세요.');
        })
        .catch((err) => {
          alert('등록되지 않은 이메일입니다.');
        });
    } catch ({ err }) {
      alert('이메일 인증 중 오류가 발생했습니다.');
      console.log(err);
    }
  };

  return (
    <Container>
      <Header></Header>
      <div className="passwd_content">
        <h1>비밀번호를 찾고자 하는 이메일을 입력해주세요.</h1>
        <Input form={resetPasswdForm} errors={errors} register={register} />
        <button onClick={handleSubmit(login)}>비밀번호 재설정</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);

  .passwd_content {
  }

  h1 {
    color: #0b0b0b;
    font-size: 28px;
    font-weight: 600;
    line-height: 88px;
    margin-bottom: 30px;
  }

  button {
    margin: 50px 0;
    width: 100%;
    height: 66px;
    border-radius: 15px;
    background: #701e1e;

    cursor: pointer;
    color: #ffffff;
    font-size: 22px;
  }
`;

export default ResetPasswd;

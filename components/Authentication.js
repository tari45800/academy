import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { authenticationState } from './atom';
import theme from './theme';

const auth = getAuth(); // 인증객체를 만듭니다

export default function Authentication({ children, watch, disabled, setDisabled }) {
  const [value, setValue] = useState('');
  const [reg, setReg] = useState(false);
  const [next, setNext] = useState(false);
  const [timer, setTimer] = useState(5 * 60);
  const [isActive, setIsActive] = useState(false);
  const [authentication, setAuthentication] = useRecoilState(authenticationState);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer >= 0 ? prevTimer - 1 : prevTimer === 0));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    regPhoneNumber(watch().phoneNumber);
  }, [watch().phoneNumber]);

  // 번호 검증 정규식 함수
  const regPhoneNumber = (num) => {
    let regPhone = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
    if (regPhone.test(num) === true) {
      setReg(true);
    } else {
      setReg(false);
    }
  };

  // 폰 번호를 반환하는 함수
  const getPhoneNumber = () => {
    const num = `+82${watch().phoneNumber.substr(1)}`;
    console.log(num);
    return num;
  };

  // 코드를 보내는 함수
  const sendCode = (e) => {
    e.preventDefault();

    // 보안 인증 코드
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log(response);
        },
      });
    } catch (error) {
      console.log(error);
      alert('보안 인증 중 오류가 발생했습니다. 다시 인증을 시도해 주세요.');
      window.location.reload();
    }

    auth.languageCode = 'ko';
    const phoneNumber = getPhoneNumber();
    const appVerifier = window.recaptchaVerifier;

    setNext(true);
    setTimer(5 * 60);
    setIsActive(true);

    // 메시지 보내는 코드
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);

        alert('메시지 전송중 오류가 발생했습니다. 다시 인증을 시도해 주세요.');
        window.location.reload();
      });
  };

  const aodeAuthentication = (e) => {
    e.preventDefault();
    const code = value;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        // alert('인증이 완료되었습니다.');
        setReg(false);
        setNext(false);
        setDisabled(false);
        setAuthentication(true);
      })
      .catch((error) => {
        alert('인증번호가 일치하지 않습니다.');
      });

    // alert('인증이 완료되었습니다.');
    // setReg(false);
    // setNext(false);
    // setDisabled(false);
    // setAuthentication(true);
  };

  return (
    <Container>
      {/* 아이디 문데 */}
      <div id="sign-in-button"></div>
      <div className="authentication_box">
        <div className={`authentication_input ${!disabled && 'input_disabled'}`}>{children}</div>
        <button className={`authentication_button ${!reg && 'color_disabled'}`} disabled={!reg} onClick={sendCode}>
          문자보내기
        </button>
      </div>
      <div className={`success_msg ${disabled && 'box_disabled'}`}>인증이 완료된 전화번호 입니다.</div>

      <div className={`authentication_box box2 ${!next && 'box_disabled'}`}>
        <div className="timer_box">
          <input className="authentication_input" onChange={(e) => setValue(e.target.value)} type="text" />
          <div className="timer">
            {'0' + Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
          </div>
        </div>
        <button className={`authentication_button`} onClick={aodeAuthentication}>
          인증하기
        </button>
      </div>
      <div className={`success_msg ${!next && 'box_disabled'}`}>인증 메시지가 전송되었습니다.</div>
      <div className={`success_msg ${!next && 'box_disabled'}`}>수신까지 최대 1분이 소요될 수 있습니다.</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border: 1px solid #909090;
    padding: 0 10px !important;
  }

  .authentication_box {
    display: flex;
    gap: 10px;
  }

  .box2 {
    margin-top: 10px;
  }

  .authentication_input {
    width: 100%;
  }

  .authentication_button {
    width: 40%;
    padding: 0 15px;
    font-size: 12px;
    border-radius: 0;
    margin: 0;

    color: #000;
    font-weight: 400;
    background-color: #ddd;
    cursor: pointer;

    border: #bbb solid 1px;
    @media ${theme.device.mobile} {
      border-radius: 14px;
    }
  }

  .timer_box {
    width: 100%;
    position: relative;
  }

  .timer {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }

  .success_msg {
    font-size: 12px;
  }

  .color_disabled {
    color: gray;
  }

  .input_disabled {
    background-color: rgba(150, 150, 150, 0.3);
  }

  .box_disabled {
    display: none;
  }
`;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { elRegex } from '@/components/formobjects/regex';
import Authentication from './Authentication';
import useUserStorage from './useUserStorage';
import theme from './theme';

const Input = ({ form, errors, register, pagination = 1, watch }) => {
  const [disabled, setDisabled] = useState(true);
  const { storage, login, basic } = useUserStorage();

  const createForm = (el, idx) => {
    const sorryForm = (
      <input
        // 라디오 버튼의 값 때문에 넣었다.
        disabled={
          (el.info.name === 'phoneNumber' || el.info.name === 'displayName' || el.info.name === 'email') && storage
        }
        value={el.info.value}
        placeholder={el.info.placeholder}
        type={el.info.type}
        id={el.info.value}
        max={el.info.max}
        // 이름을 등록
        {...register(
          el.info.name,
          // 필수문항, 정규식, 애러메시지
          el.data,
        )}
      />
    );
    return (
      <InputBox key={`${el.info.name + idx}`} className="input-box">
        {/* 인풋창 제목 */}
        {el.info.label && (
          <div className="input-title-box">
            {el.info.label}
            {/* 필수 항목 표기 */}
            <span className="input-required">{el.info.label && el.data.required !== undefined && '*'}</span>
          </div>
        )}

        {el.info.name !== 'phoneNumber' || storage
          ? sorryForm
          : !storage && (
              <Authentication watch={watch} disabled={disabled} setDisabled={setDisabled}>
                {sorryForm}
              </Authentication>
            )}

        {/* 라디오 버튼의 값 때문에 넣었다. */}
        <label htmlFor={el.info.value}>{el.info.value}</label>

        {/* 에러매시지 */}
        <div className="input-error-message">
          {(el.data.required || el.data.pattern) && errors[el.info.name]?.message}
        </div>
      </InputBox>
    );
  };

  return (
    <InputContainer className="input-container">
      {
        // 입력양식을 map으로 돌려서 작성폼을 완성합니다.
        form &&
          form[pagination].map((el, idx) => {
            // 라디오 박스
            if (Array.isArray(el, idx)) {
              return (
                <div className="input-radio-box " key={idx}>
                  {el.map((arrEl, arrIdx) => {
                    return createForm(arrEl, arrIdx);
                  })}
                </div>
              );
            }

            // 문자열을 정규식으로 변환하는 코드
            // elRegex(el);

            // 폼 양식을 리턴하는 함수
            return createForm(el, idx);
          })
      }
    </InputContainer>
  );
};

const InputContainer = styled.form``;

const InputBox = styled.div`
  input {
    width: 100%;
    height: 44px;
    font-size: 18px;
    font-weight: 400;

    padding: 10px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background-color: transparent;
  }

  .input-checkBox-box {
    display: flex;
    flex-direction: column;
  }

  input[type='checkBox'] {
    display: none;
  }

  input[type='checkBox'] + label {
    border: 1px solid rgba(113, 30, 30, 0.2);
    display: inline-block;
    width: 100%;
    font-size: 18px;
    font-weight: 400;

    margin-bottom: 5px;
    padding: 0.5rem;
    border-radius: 0.2rem;
    transition: 0.5s;
    cursor: pointer;
  }

  input[type='checkBox']:checked + label {
    background-color: rgba(113, 30, 30, 0.2) !important;
  }

  .input-radio-box {
    display: flex;
    flex-direction: column;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio'] + label {
    border: 1px solid rgba(113, 30, 30, 0.2);
    display: inline-block;
    width: 100%;
    font-size: 18px;
    font-weight: 400;

    margin-bottom: 5px;
    padding: 0.5rem;
    border-radius: 0.2rem;
    transition: 0.5s;
    cursor: pointer;
  }

  input[type='radio']:checked + label {
    background-color: rgba(113, 30, 30, 0.2) !important;
  }

  .input-error-message {
    color: #d60c0a;
    font-size: 12px;
  }

  .input-title-box {
    font-size: 14px;
    font-weight: 400;
    @media ${theme.device.mobile} {
      margin-bottom: 5px;
    }
  }

  .input-required {
    color: var(--tabs-color);
    margin-left: 4px;
  }
`;

export default Input;

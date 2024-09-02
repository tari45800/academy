import { nameRegex } from './regex';
import { phoneNumber } from './regex';
import { passwordRegex } from './regex';

export const joinUsForm = [
  '회원가입',
  [
    {
      info: {
        label: '성명',
        name: 'nickName',
        type: 'text',
        placeholder: '이름을 입력해 주세요',
      },
      data: {
        required: '이름은 필수 항목입니다.',
        pattern: {
          message: '한글 이름을 입력해 주세요.',
          value: nameRegex,
        },
      },
    },
    {
      info: {
        label: '전화번호',
        name: 'phoneNumber',
        type: 'text',
        placeholder: '전화번호를 입력해 주세요',
      },
      data: {
        required: '전화번호는 필수 항목입니다.',
        pattern: {
          message: '-,/,공백이 포함되지 않는 번호를 입력해 주세요',
          // value: `${phoneNumber}`,
          value: '/^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/',
        },
      },
    },
    {
      info: {
        label: '이메일',
        name: 'email',
        type: 'text',
        placeholder: '이메일을 입력해 주세요',
      },
      data: {
        required: '이메일은 필수 항목입니다.',
        pattern: {
          message: '이메일을 정확히 입력해주세요.',
          value: '/^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*.[A-Za-z]{2,3}$/',
        },
      },
    },
    {
      info: {
        label: '비밀번호',
        name: 'password',
        type: 'password',
        placeholder: '비밀번호를 입력해 주세요',
      },
      data: {
        required: '비밀번호는 필수 항목입니다.',
        pattern: {
          message: '8~16자 영문 대/소문자, 숫자, 특수문자만 사용 가능합니다',
          value: passwordRegex,
        },
      },
    },
    {
      info: {
        label: '비밀번호 확인',
        name: 'checkPassword',
        type: 'password',
        placeholder: '비밀번호를 재입력 해주세요',
      },
      data: {
        required: '비밀번호체크',
        validate: (value, values) => value === values.password || '비밀번호가 일치하지 않습니다.',
      },
    },
  ],
];

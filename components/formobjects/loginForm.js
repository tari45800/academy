import { nameRegex } from './regex';

export const loginForm = [
  'Join Us',
  [
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
        placeholder: '비밀번호를 입력해주세요',
      },
      data: {
        required: '비밀번호는 필수 항목입니다.',
      },
    },
  ],
];

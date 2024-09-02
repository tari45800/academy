import { nameRegex } from './regex';
import { phoneNumber } from './regex';
import { passwordRegex } from './regex';

export const NonMembersForm = [
  '비회원 접수내역 확인',
  [
    {
      info: {
        label: '성명',
        name: 'displayName',
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
        name: 'phone',
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
  ],
];

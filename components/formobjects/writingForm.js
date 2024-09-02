import { nameRegex } from './regex';
import { phoneNumber } from './regex';
// import { passwordRegex } from "./abc";

export const writingForm = [
  'WritingForm',
  [
    {
      info: {
        label: '글 제목',
        name: 'title',
        type: 'text',
        placeholder: '제목을 입력해 주세요',
      },
      data: {
        required: '제목은 필수 항목입니다.',
      },
    },
    {
      info: {
        label: '부 제목',
        name: 'subTitle',
        type: 'text',
        placeholder: '부 제목을 입력해 주세요',
      },
      data: {
        required: '부 제목은 필수 항목입니다.',
      },
    },
    [
      {
        info: {
          label: '카테고리',
          name: 'category',
          type: 'radio',
          value: '공지사항',
        },
        data: {
          required: '',
        },
      },

      {
        info: {
          label: '',
          name: 'category',
          type: 'radio',
          value: '자주 묻는 질문',
        },
        data: {
          required: '카테고리는 필수 항목입니다.',
        },
      },
    ],
  ],
];

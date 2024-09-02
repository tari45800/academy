export const resetPasswdForm = [
  'Join Us',
  [
    {
      info: {
        label: 'Email',
        name: 'email',
        type: 'text',
        placeholder: 'Enter Your email address',
      },
      data: {
        required: '이메일은 필수 항목입니다.',
        pattern: {
          message: '이메일을 정확히 입력해주세요.',
          value: '/^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*.[A-Za-z]{2,3}$/',
        },
      },
    },
  ],
];

import VerEx from 'verbal-expressions';

export const nameRegex = VerEx().startOfLine().range('가', '힣').repeatPrevious(2, 5).endOfLine();

// export const passwordRegex = VerEx()
//   .startOfLine()
//   .range('a', 'z', 'A', 'Z', '1', '9', '!', '@', '#', '$', '%', '^', '&', '*')
//   .repeatPrevious(8, 16)
//   .endOfLine();

// 영문 숫자 특수기호 조합 8자리 이상 (비밀번호)
export const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

export const phoneNumber = VerEx()
  .startOfLine()
  .range('0', '9')
  .repeatPrevious(2, 3)
  .maybe('/')
  .maybe('-')
  .maybe(' ')
  .range('0', '9')
  .repeatPrevious(4)
  .maybe('/')
  .maybe('-')
  .maybe(' ')
  .range('0', '9')
  .repeatPrevious(4)
  .endOfLine();

// 문자열을 정규식으로 변환하는 코드
export function convertToRegExp(text) {
  if (text.match(/^\/.+\/[gmixXsuUAJ]*$/)) {
    return regexParser(text);
  } else return new RegExp(text, 'g');
}

// 문자열을 정규식으로 변환하는 코드
export function regexParser(text) {
  const m = text.match(/(\/?)(.+)\1([a-z]*)/i);
  if (m[3] && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(m[3])) {
    return RegExp(text);
  } else {
    return new RegExp(m[2], m[3]);
  }
}

// 문자열을 정규식으로 변환하는 함수
export const elRegex = (el) => {
  if (el.data.pattern?.value) {
    el.data.pattern.value = convertToRegExp(el.data.pattern.value + '');
  }
};

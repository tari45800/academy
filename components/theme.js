// theme.js

/* 글자 크기 대한 스타일링 */
const fontSize = {
  xs: '1rem',
  s: '1.5rem',
  m: '2rem',
  l: '4rem',
  xl: '9rem',
  xxl: '14rem',
};

/* 글자 색상 대한 스타일링 */
const colors = {
  black: '#0B0B0B',
  light: '#FFFFFF',
  line: '#B1B1B1',
  Tabs: '#701E1E',
};

/* 화면 크기에 대한 스타일링 */
const device = {
  mobileS: `only screen and (max-width: 290px)`,
  mobileL: `only screen and (max-width: 420px)`,
  mobile: `only screen and (max-width: 920px)`,
  tabletS: `only screen and (max-width: 1010px)`,
  tablet: `only screen and (max-width: 1100px)`,
  tabletL: `only screen and (max-width: 1366px)`,
  tabletSL: `only screen and (max-width: 1550px)`,
  tabletXL: `only screen and (max-width: 1700px)`,
};

const theme = {
  fontSize,
  colors,
  device,
};

export default theme;

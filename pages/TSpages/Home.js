import styled from 'styled-components';
import theme from '../../components/theme';
import Header from '@/components/Main/Header';
import LetterBox from '@/components/Main/LetterBox';
import NavBox from '@/components/Main/NavBox';
import Texture from '@/components/Texture';

const Home = () => {
  return (
    <MainContainer>
      <Header></Header>
      {/* <Texture></Texture> */}
      <Content>
        <LetterBox></LetterBox>
        <NavBox></NavBox>
      </Content>
    </MainContainer>
  );
};

// 메인페이지 전체 영역 스타일
const MainContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 5rem 5rem 5rem;
  background: linear-gradient(45deg, #6f1d1d, #6f1d1d, #d8d1be);
  color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: fixed;
  width: 100%;
  .link {
    /* color: ${theme.colors.light}; */
    text-decoration-line: none;
  }
  @media ${theme.device.tabletXL} {
    @media only screen and (max-height: 765px) {
      padding: 3.5rem 4rem 4rem 4rem;
    }
    @media only screen and (max-height: 730px) {
      padding: 2rem;
    }
  }
  @media ${theme.device.mobile} {
    display: none;
  }
`;

// 컨텐츠 영역 전체
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  z-index: 10;
  @media ${theme.device.tabletXL} {
    align-items: end;
  }
  @media ${theme.device.tabletL} {
    flex-direction: column;
  }
  @media ${theme.device.mobile} {
    display: none;
  }
`;

export default Home;

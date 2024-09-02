import styled from 'styled-components';
import theme from '../../components/theme';
import Header from '@/components/Main/Header';
import Link from 'next/link';
import Image from 'next/image';
import main_logo from '@/public/images/Group_15867.png';
import mainLogo from '@/public/images/svg/mainLogo.png';
const MobileHome = () => {
  return (
    <MobileContent>
      <ContentBox>
        {/* <Texture></Texture> */}
        <Header></Header>
        <Image className="logo_white_img" src={mainLogo} alt="logo" with={2000} height={2000} placeholder="blur" />
        <div className="main-class main-span-box">
          <div>대치 투에스에듀 아카데미는 학생들에게</div>
          <div>숨어있는 &#39;성공DNA&#39;를 깨웁니다&#46;</div>
          <div>대치 투에스에듀에서 입시 준비의 새로운 기준을 경험하며</div>
          <div>꿈을 현실로 만들어가세요&#46;</div>
        </div>

        <Link className="main-class main-button" href={`/apply`}>
          <div>원서접수 바로가기</div>
        </Link>
      </ContentBox>
    </MobileContent>
  );
};

const Texture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/Group_37464.png');
  opacity: 0.3;
  mix-blend-mode: multiply;
`;
const MobileContent = styled.div`
  display: none;
  color: black;
  background: linear-gradient(#dfdbd2 -0.01%, #ffffff 100%);
  min-width: 100%;
  min-height: fit-content;
  height: 100%;
  position: fixed;

  @media ${theme.device.mobile} {
    display: block;
  }
`;

// 컨텐츠 영역 전체 모바일
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  height: 100%;
  font-size: 14px;
  overflow: scroll;

  .logo_white_img {
    margin-top: 20px;
    width: 100%;
    max-width: 500px;
    height: 100%;
    max-height: 200px;
    object-fit: contain;
  }

  .main-span-box {
    text-align: center;
    font-size: 14px;
    margin: 30px 0;
  }

  .main-button {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 54px;
    width: 100%;
    color: white;
    background-color: #701e1e;
    border-radius: 15px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    z-index: 10;
  }
`;

export default MobileHome;

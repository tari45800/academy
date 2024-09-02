import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import theme from '../../components/theme';
import SubNav from './SubNav';
import MobileMenu from '@/pages/TSpages/MobileMenu';
import useUserStorage from '@/components/useUserStorage';
import Image from 'next/image';
import logoRed from '@/public/images/svg/LogoRed.svg';
import menu_btn from '@/public/images/svg/MenuMobile.svg';
import { menuForm } from '@/components/formobjects/menuForm';
import HeaderMenu from '@/components/headerMenu';
import JoinUser from '@/components/JoinUser';
import { useRecoilState } from 'recoil';
import { authenticationState } from '@/components/atom';
import GetUserInfo from '@/components/GetUserInfo';

const Header = ({ currentPage, location }) => {
  const { storage, login, basic } = useUserStorage();
  const [toggle, setToggle] = useState(false);
  const [authentication, setAuthentication] = useRecoilState(authenticationState);

  useEffect(() => {
    storage && setAuthentication(true);
  }, [storage]);

  const handleMenu = () => {
    setToggle(!toggle);
    setDropdowns(Array.from({ length: menuForm.length }, () => false));
  };

  const [dropdowns, setDropdowns] = useState(Array.from({ length: menuForm.length }, () => false));

  return (
    <HeaderContainer $location={location}>
      <Content>
        <JoinUser></JoinUser>
        <HeaderTop>
          <div className="logoWrap">
            <Link className="link" href={`/`}>
              <div className="logo_box">
                <Image src={logoRed} alt="logo" />
              </div>
            </Link>
          </div>
          <HeaderMenu currentPage={currentPage} />
          <div className="header_right">
            {/* <Link className="link" href={`/mypage`}>
              <div>마이페이지</div>
            </Link> */}
            <div className="pc-main-nav">{storage ? login : basic}</div>
          </div>
          <Image className="mobile-header" onClick={handleMenu} src={menu_btn} alt="menu_btn" />
          <MobileMenu toggle={toggle} handleMenu={handleMenu} />
        </HeaderTop>

        <DesktopSubNav>{currentPage !== 6 && currentPage !== undefined && <SubNav></SubNav>}</DesktopSubNav>

        <MobileSubNav>{currentPage !== 6 && currentPage !== undefined && <SubNav></SubNav>}</MobileSubNav>
      </Content>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  .mobile-header {
    display: none;
  }

  @media ${theme.device.mobile} {
    height: auto;
    padding: 0;
    border-bottom: 0rem;
    background: #ffffff;
    display: ${(props) => (props.$location == 'Login' ? 'none' : 'block')};
  }
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; */
`;

const Content = styled.div`
  /* border: 3px solid black; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 240px;
  background: linear-gradient(45.54deg, #e7e5de -0.01%, #fcfcfb 100%);
  /* border-bottom: 1px solid rgba(112, 30, 30, 0.3); */

  @media ${theme.device.tabletSL} {
    padding: 0 160px;
  }

  @media ${theme.device.tabletL} {
    padding: 0 83px;
  }

  @media ${theme.device.mobile} {
    background: #ffffff;
    padding: 0 20px;
  }
`;

const HeaderTop = styled.div`
  /* border: 3px solid green; */
  display: flex;
  width: 100%;
  max-width: 1440px;
  height: 130px;
  justify-content: space-between;
  align-items: center;
  /* background: linear-gradient(45.54deg, #ebe9e3 -0.01%, #fcfcfb 100%); */

  @media ${theme.device.tabletL} {
    height: 110px;
  }

  @media ${theme.device.tablet} {
    padding: 0 0;
    height: 6rem;
  }
  @media ${theme.device.mobile} {
    height: 5rem;
  }

  .logoWrap {
    width: 10.0045rem;
    height: 3.25rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    @media ${theme.device.tablet} {
      width: 6.8rem;
    }
    @media ${theme.device.mobile} {
      width: 5.44381rem;
      height: 1.76844rem;
    }
    .menu {
      width: 30px;
      height: auto;
      margin-right: 40px;
      cursor: pointer;
      display: block;
      @media ${theme.device.tablet} {
        margin-right: 24px;
        width: 24px;
      }
      @media ${theme.device.mobile} {
        display: none;
      }
    }
  }

  .header_right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .pc-main-nav {
      /* margin-top: 37px; */
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 1rem;
    }
  }

  @media ${theme.device.mobile} {
    border: none;
    .mobile-header {
      display: block;
      height: 15px;
      width: auto;
    }
    .header_right {
      display: none;
    }
  }
`;

const DesktopSubNav = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 1px solid rgba(112, 30, 30, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${theme.device.mobile} {
    display: none;
  }
`;

const MobileSubNav = styled.div`
  display: none;

  @media ${theme.device.mobile} {
    display: block;
    display: flex;
    justify-content: center;
    align-items: end;
    width: 120%;
  }
`;

export default Header;

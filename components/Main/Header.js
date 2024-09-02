import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import theme from '@/components/theme';
import MobileMenu from '@/pages/TSpages/MobileMenu';
import useUserStorage from '../useUserStorage';
import Image from 'next/image';
import logoWhite from '@/public/images/logoWhite.png';
import logoRed from '@/public/images/logoRed.png';
import menu_btn from '@/public/images/svg/menu_btn.svg';
import JoinUser from '../JoinUser';
import { useRecoilState } from 'recoil';
import { authenticationState } from '@/components/atom';

const Header = () => {
  const { storage, login, basic } = useUserStorage();
  const [toggle, setToggle] = useState(false);
  const [authentication, setAuthentication] = useRecoilState(authenticationState);

  useEffect(() => {
    storage && setAuthentication(true);
  }, [storage]);

  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <JoinUser></JoinUser>
      <Link className="link" href={`/`}>
        <div className="logo_box">
          <Image className="logo_white_img" src={logoWhite} alt="logo_pc" width={196} />
          <Image className="mobile-header" src={logoRed} alt="logo_mobile" height={30} />
        </div>
      </Link>
      <div className="pc-main-nav">{storage ? login : basic}</div>
      <Image className="mobile-header" src={menu_btn} alt="menu_btn" onClick={handleMenu} width={30} />
      <MobileMenu toggle={toggle} handleMenu={handleMenu} />
    </Container>
  );
};

// 상단 전체: 로고와 로그인,회원가입 영역 스타일
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 10;

  .mobile-header {
    display: none;
  }

  .logo_box {
    .logo_white_img {
      display: block;
      width: 176px;
      height: auto;
      @media ${theme.device.mobile} {
        display: none;
      }
    }
  }

  .pc-main-nav {
    font-size: 24px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0px;
    text-align: left;
    .login_box {
      display: flex;
      gap: 1rem;
      p {
        cursor: pointer;
      }
    }
  }

  @media ${theme.device.mobile} {
    z-index: 20;

    .mobile-header {
      display: block;
      /* height: auto; */
    }
    .pc-main-nav {
      display: none;
    }

    .login_box {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
  }
`;

export default Header;

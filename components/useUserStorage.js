import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import Link from 'next/link';
import styled from 'styled-components';
import theme from '@/components/theme';
import Image from 'next/image';
import mypage from '@/public/images/svg/MyPage.svg';
import { getData3 } from './FBSubmit';

export const useUserStorage = () => {
  const [storage, setStorage] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem('userData');
    const sessionData = sessionStorage.getItem('userData');

    const getSorryData = (data) => {
      const newData = {
        dBcollection: 'user',
        dBwhere: 'email',
        dBequal: JSON.parse(data).email,
        dBorderBy: null,
        dBdesc: null,
      };

      return getData3(newData);
    };

    const sorry = async () => {
      if (localData !== null) {
        const sorryData = await getSorryData(localData);
        return setStorage(sorryData[0].data());
      } else if (sessionData !== null) {
        const sorryData = await getSorryData(sessionData);
        return setStorage(sorryData[0].data());
      } else {
        return;
      }
    };
    sorry();
  }, []);

  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      localStorage.removeItem('userData');
      sessionStorage.removeItem('userData');
      alert('로그아웃 되었습니다.');
      await window.location.reload();
    } catch ({ code, message }) {
      alert(message);
    }
  };

  const handle = () => {
    alert('준비 중인 기능입니다.');
  };

  const login = (
    <LoginBox>
      {
        // 이메일에 @everydaymath.kr가 포한되면 관리자 권한 부여
        storage && storage.email.includes('@everydaymath.kr') && (
          <Link className="link admin" href={`/admin/adminpage`}>
            <p>Admin</p>
          </Link>
        )
      }
      <div className="link">
        <p onClick={logout}>Log Out</p>
      </div>
      <div className="user">
        <Link className="" href={`/mypage`}>
          <Image src={mypage} alt="mypage" />
        </Link>
        <p>{storage?.displayName}</p>
      </div>
    </LoginBox>
  );

  const basic = (
    <LoginBox className="login_box">
      <Link className="link login_link" href={`/TSpages/Login`}>
        <p>로그인</p>
      </Link>
      <Link className="link join_link" href={`/TSpages/JoinUs`}>
        <p>회원가입</p>
      </Link>
    </LoginBox>
  );
  return { storage, login, basic };
};

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media ${theme.device.tabletL} {
    gap: 1rem;
  }
  @media ${theme.device.tablet} {
    gap: 0.8rem;
  }
  @media ${theme.device.mobile} {
    flex-direction: column;
    align-items: start;
  }
  .link {
    cursor: pointer;
    border-radius: 0.125rem;
    border: 0.5px solid #701e1e;
    display: flex;
    height: 1.875rem;
    padding: 0.625rem 1.25rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    color: #701e1e;
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media ${theme.device.tabletL} {
      padding: 0.5rem 1.4rem;
    }
    @media ${theme.device.tablet} {
      padding: 0.4rem 0.8rem;
    }
  }
  .user {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 1.3rem;
      height: 1.3rem;
      margin-bottom: 0.2rem;
      @media ${theme.device.tablet} {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
    p {
      color: #701e1e;
      letter-spacing: 0.1rem;
      font-size: 1rem;
      @media ${theme.device.tablet} {
        font-size: 0.9rem;
      }
    }
  }
  .admin {
    background: #701e1e;
    color: #fff;
    padding: 0.7rem 0.8rem;
    font-size: 0.8rem;
    @media ${theme.device.tablet} {
      padding: 0.7rem 0.1rem;
    }
    @media ${theme.device.tabletS} {
      margin-right: -0.8rem;
    }
  }
  .join_link {
    background: #701e1e;
    color: #fff;
  }
  @media ${theme.device.mobile} {
    .link {
      font-size: 14px;
      color: #6b6b6c;
      transition: 0.5s;
      text-decoration: underline;
      border: none;
      padding: 0;
    }
    .link:hover {
      color: #0b0b0b;
    }
    .join_link {
      background: none;
    }
    .admin {
      background: none;
    }
    .user {
      padding-top: 0.2rem;
      img {
        display: none;
      }
      p {
        color: #6b6b6c;
      }
    }
  }
`;

export default useUserStorage;

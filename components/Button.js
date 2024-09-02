import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';

const Button = ({ children, form = [{ state: true }], isMobile = false, url, add }) => {
  const link = isMobile ? '/apply/mobileapplicationpage' : '/apply';
  const sorry =
    form == 'edm' || form == 'hiring' || add == 'season' || form[0].name == 'ssnform' ? (
      <>
        {form == 'edm' && (
          <Link className="link" href={url} target="_blank">
            <div className="button">{children}</div>
          </Link>
        )}
        {add == 'season' && (
          <Link className="link" href={url} target="_blank">
            <div className="button">{children}</div>
          </Link>
        )}
        {form == 'hiring' && (
          // <Link className="link" href={url} download>
          //   <div className="button">{children}</div>
          // </Link>
          <div
            className="button"
            onClick={() => {
              alert('지원 양식을 준비중입니다.');
            }}
          >
            {children}
          </div>
        )}

        {form[0].name == 'ssnform' && (
          <Link className="link" href={`/apply/${form[0].name}`} target="_blank">
            <div className="button">{children}</div>
          </Link>
        )}
      </>
    ) : (
      <Link
        className="link"
        // 링크로 배열 옮기기(직렬화)
        href={`${link}/${form[0].name}`}
      >
        <div className="button">{children}</div>
      </Link>
    );

  return <Container gray={form[0].state}>{form[0].state ? sorry : <div className="button">{children}</div>}</Container>;
};
const Container = styled.div`
  /* padding: 0 20px; */
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16rem;
    height: 3.4rem;
    border-radius: 3px;
    border: ${(props) => (!props.gray ? 'none' : '1px solid #845050')};
    background-color: ${(props) => (!props.gray ? '#ccc' : '#711e1e')};
    /* background-color: #711e1e; */
    color: white;
    color: #fff;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 41.5px; /* 138.333% */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    @media ${theme.device.tabletL} {
      width: 16rem;
    }

    @media ${theme.device.mobile} {
      border-radius: 0.9375rem;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.3375rem;
      width: 12rem;
      height: 3rem;
      padding: 0 10px;
      /* display: flex;
      min-width: 23.125rem;
      width: 100%;
      height: 3.375rem;
      padding: 0.6875rem 6.25rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
      flex-shrink: 0;
      border-radius: 0.9375rem;
      border: 1px solid #701e1e;
      background: #701e1e;
      color: #fff;
      text-align: center;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.3375rem;
      text-transform: capitalize; */
    }
    @media ${theme.device.mobileS} {
      /* padding: 0.6875rem 3.25rem; */
    }
  }
`;

export default Button;

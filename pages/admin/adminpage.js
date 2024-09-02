import React from 'react';
import styled from 'styled-components';
import Header from '../TSpages/Header';
import Nav from '../TSpages/Nav';
import Link from 'next/link';

const AdminPage = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <ContentBox>
          <Link className="link" href={`/admin/adminapplicationpage`}>
            <button className="linkButton">접수 관리 페이지</button>
          </Link>
          <Link className="link" href={`/postpage/writingpage`}>
            <button className="linkButton">글 쓰기 페이지</button>
          </Link>
        </ContentBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100%;
  padding: 7rem;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
`;

const ContentBox = styled.div`
  padding: 5rem;
  display: flex;
  gap: 5rem;

  .link {
    flex: 1;
  }

  .linkButton {
    width: 100%;
    height: 10rem;
    cursor: pointer;
  }
`;

export default AdminPage;

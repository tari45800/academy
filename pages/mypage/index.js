import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../TSpages/Header';
import { getData2 } from '@/components/FBSubmit';
import useUserStorage from '@/components/useUserStorage';
import NonMembers from './NonMembers';
import MyPageList from './MyPageList';
import ApplyButton from '../TSpages/ApplyButton';
import Footer from '../TSpages/Footer';
import theme from '@/components/theme';

const MyPage = () => {
  const [dbData, setDbData] = useState([]);
  const [dbUserData, setUserDbData] = useState([]);
  const { storage } = useUserStorage();

  useEffect(() => {
    // 받아온 쿼리 데이터로 파이어베이스 데이터를 가져오는 코드
    const newData = {
      dBsetter: setDbData,
      dBcollection: 'apply',
      dBwhere: 'displayName',
      dBequal: storage && storage.displayName,
      dBorderBy: null,
      dBdesc: null,
    };
    if (storage && storage.displayName) {
      getData2(newData);
    }
  }, [storage]);

  useEffect(() => {
    // 받아온 쿼리 데이터로 파이어베이스 데이터를 가져오는 코드
    const newUserData = {
      dBsetter: setUserDbData,
      dBcollection: 'user',
      dBwhere: 'email',
      dBequal: storage && storage.email,
      dBorderBy: null,
      dBdesc: null,
    };
    if (storage && storage.email) {
      getData2(newUserData);
    }
  }, [storage]);

  return (
    <Container>
      <Header></Header>
      {storage ? (
        <MyPageList storage={storage} dbData={dbData} dbUserData={dbUserData} phone={storage.phoneNumber} />
      ) : (
        <NonMembers />
      )}
      <ApplyButton></ApplyButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(45.54deg, #e9e6e0 -0.01%, #ffffff 100%);
  padding-top: 60px;
  @media ${theme.device.mobile} {
    background: #fff;
  }
`;

export default MyPage;

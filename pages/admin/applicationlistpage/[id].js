import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../TSpages/Header';
import Nav from '../../TSpages/Nav';
import ApplicationTable from '@/components/ApplicationTable';
import { getData } from '@/components/FBSubmit';

import { useRecoilState } from 'recoil';
import { winterSchoolAtom } from '@/components/atom';
import { SATAtom } from '@/components/atom';
import { ssnAtom } from '@/components/atom';
import { ssnRegularAtom } from '@/components/atom';
import { someDefaultAtom } from '@/components/atom';
import { consultingAtom } from '@/components/atom';
import { infosessionAtom } from '@/components/atom';

const ApplicationListPage = () => {
  const handleForm = () => {
    if (id === 'winterschoolform') {
      return winterSchoolAtom;
    }
    if (id === 'satform') {
      return SATAtom;
    }
    if (id === 'ssnform') {
      return ssnAtom;
    }
    if (id === 'ssnregularform') {
      return ssnRegularAtom;
    }
    if (id === 'consultingform') {
      return consultingAtom;
    }
    if (id === 'infosessionform') {
      return infosessionAtom;
    }

    return someDefaultAtom;
  };

  const router = useRouter();
  const { id } = router.query;
  const [dbData, setDbData] = useState([]);
  const [idDesc, setDesc] = useState('desc');
  const [dbQuery, setDbQuery] = useState('createAt');
  const [data, setData] = useState({});
  const [formArray, setFormArray] = useRecoilState(handleForm());

  const handleDesc = (e) => {
    const [order, field] = e.target.value.split(',');
    setDbQuery(field);
    setDesc(order);
  };

  // 쿼리로 받아온 배열을 파싱하는 코드
  // useEffect(() => {
  //   if (id) {
  //     try {
  //       const parsedEl = JSON.parse(id);
  //       setFormArray(parsedEl);
  //     } catch (error) {
  //       // 파싱 오류 처리
  //       console.error('파싱 오류:', error);
  //     }
  //   }
  // }, [id, idDesc, dbQuery]);

  // 받아온 쿼리 데이터로 파이어베이스 데이터를 가져오는 코드
  useEffect(() => {
    if (!formArray) {
      return;
    }

    // 새로운 데이터 객체 생성
    const newData = {
      dBsetter: setDbData,
      dBcollection: 'apply',
      dBwhere: false,
      dBequal: false,
      dBorderBy: dbQuery,
      dBdesc: idDesc,
    };

    // const newData = {
    //   dBsetter: setDbData,
    //   dBcollection: 'apply',
    //   dBwhere: 'Kategorie',
    //   dBequal: formArray[0].title,
    //   dBorderBy: dbQuery,
    //   dBdesc: idDesc,
    // };

    // 상태 업데이트
    setData(newData);

    getData(newData);
  }, [formArray, dbQuery, idDesc]);

  return (
    <>
      <Header></Header>
      <Container>
        <ContentBox>
          <ApplicationTable
            formArray={formArray}
            dbData={dbData}
            handleDesc={handleDesc}
            getData={getData}
            data={data}
          ></ApplicationTable>
        </ContentBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  /* position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: -100px; */

  min-width: 100vw;
  min-height: 100vh;
  overflow: scroll;

  color: #210909;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9rem 3rem;
  min-width: fit-content;

  /* .title {
    font-size: 2rem;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 50vw;
  }

  input {
    padding: 1rem;
    outline: none;
  }

  .red {
    color: red;
  } */
`;

export default ApplicationListPage;

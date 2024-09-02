import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../TSpages/Header';
import Nav from '../../TSpages/Nav';
import FormPagination from '@/components/FormPagination';
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
import useUserStorage from '@/components/useUserStorage';
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
  const [pagination, setPagination] = useState(1);
  const { storage, login, basic } = useUserStorage();
  const [formArray, setFormArray] = useRecoilState(handleForm());

  // useForm 라이브러리
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    // mode: "onBlur",
  });

  function cleanPhoneNumber(phoneNumber) {
    if (!phoneNumber) {
      return;
    }

    // 공백 및 하이픈 제거
    let cleanedNumber = phoneNumber.replace(/[\s-]/g, '');

    // +82를 0으로 대체
    if (cleanedNumber.startsWith('+82')) {
      cleanedNumber = '0' + cleanedNumber.slice(3);
    }

    return cleanedNumber;
  }

  useEffect(() => {
    if (storage?.displayName) {
      setValue('displayName', storage?.displayName);
      setValue('phoneNumber', cleanPhoneNumber(storage?.phoneNumber));
      setValue('email', storage?.email);
    }
  }, [storage]);

  console.log(watch());

  // 쿼리로 받아온 배열을 파싱하는 코드
  useEffect(() => {
    if (id) {
      try {
        const parsedEl = JSON.parse(id);
        setFormArray(parsedEl);
      } catch (error) {
        // 파싱 오류 처리
        console.error('파싱 오류:', error);
      }
    }
  }, [id]);

  return (
    <>
      <Header></Header>
      <Container>
        <ContentBox>
          <FormPagination
            form={formArray}
            handleSubmit={handleSubmit}
            pagination={pagination}
            setPagination={setPagination}
          >
            <Input form={formArray} errors={errors} register={register} pagination={pagination} watch={watch} />
          </FormPagination>
        </ContentBox>
      </Container>
      <Nav></Nav>
    </>
  );
};

const Container = styled.div`
  padding: 110px 40px 40px 40px;
`;

const ContentBox = styled.div``;

export default ApplicationListPage;

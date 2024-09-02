import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import FormPagination from '@/components/FormPagination';
import Input from '@/components/Input';
import { useRouter } from 'next/router';
import Header from '../TSpages/Header';
import theme from '@/components/theme';
import useUserStorage from '@/components/useUserStorage';
import { useRecoilState } from 'recoil';
import { winterSchoolAtom } from '@/components/atom';
import { SATAtom } from '@/components/atom';
import { ssnAtom } from '@/components/atom';
import { ssnRegularAtom } from '@/components/atom';
import { consultingAtom } from '@/components/atom';
import { infosessionAtom } from '@/components/atom';
import { someDefaultAtom } from '@/components/atom';

const Application = () => {
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
  const [form, setForm] = useRecoilState(handleForm());

  // // 쿼리로 받아온 배열을 파싱하는 코드
  // useEffect(() => {
  //   if (id) {
  //     try {
  //       const parsedEl = JSON.parse(id);
  //       setForm(parsedEl);
  //     } catch (error) {
  //       // 파싱 오류 처리
  //       console.error('파싱 오류:', error);
  //     }
  //   }
  // }, [id]);

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

  return (
    <Container>
      <Header></Header>
      <Content>
        <div className="titleBox">
          <div className="title">{form && form[0].name === 'consultingform' ? '접수' : '원서접수'}</div>
          <div className="subTitle">[접수] {form && form[0].title}</div>

          {form && (
            <FormPagination
              form={form}
              handleSubmit={handleSubmit}
              pagination={pagination}
              setPagination={setPagination}
            >
              <Input form={form} errors={errors} register={register} pagination={pagination} watch={watch} />
            </FormPagination>
          )}
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: 100vh;
  padding: 150px 80px 80px;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);

  .titleBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .title {
      font-size: 48px;
      font-weight: 700;
      line-height: 56px;
      letter-spacing: 0px;
      text-align: left;
    }
    .subTitle {
      font-size: 24px;
      font-weight: 400;
      line-height: 42px;
      letter-spacing: 0px;
      text-align: left;
    }
  }
  @media ${theme.device.tablet} {
    padding: 110px 80px 80px;
  }
  @media ${theme.device.mobile} {
    background: #ffffff;
    padding: 90px 30px 80px;
  }
`;
const Content = styled.div`
  width: 100%;
  max-width: 1000px;
`;

export default Application;

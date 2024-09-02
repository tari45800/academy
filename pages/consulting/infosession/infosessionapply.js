import React, { useState } from 'react';
import PageLayout from '@/components/DetailLayout/PageLayout';
import styled from 'styled-components';
import { consultingForm } from '@/components/formobjects/consultingForm';
import { useForm } from 'react-hook-form';
import FormPagination from '@/components/FormPagination';
import Input from '@/components/Input';
import Header from '../../TSpages/Header';
import theme from '@/components/theme';

const InfosessionApply = () => {
  const [pagination, setPagination] = useState(1);

  // useForm 라이브러리
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    // mode: "onBlur",
  });
  return (
    <>
      <PageLayout>
        <Header></Header>
        <Container>
          <Content>
            <div className="titleBox">
              <div className="title">입시설명회 접수</div>
              <div className="subTitle">{consultingForm && consultingForm[0].subTitle}</div>
            </div>

            {/* <FormPagination
              form={consultingForm}
              handleSubmit={handleSubmit}
              pagination={pagination}
              setPagination={setPagination}
            >
              <Input form={consultingForm} errors={errors} register={register} pagination={pagination} />
            </FormPagination> */}
          </Content>
        </Container>
      </PageLayout>
    </>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin-top: -30px;
  @media ${theme.device.tabletL} {
    margin: 0px;
  }
  .titleBox {
    width: 100%;
    margin-bottom: 20px;
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
`;

export default InfosessionApply;

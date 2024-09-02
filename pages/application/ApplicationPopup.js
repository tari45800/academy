import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import FormPagination from '@/components/FormPagination';
import Input from '@/components/Input';

const ApplicationPopup = ({ form }) => {
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
    <Content>
      <div className="titleBox">
        <div className="title">원서접수</div>
        <div className="subTitle">
          [선발] {form && form[0].subTitle} - {form && form[0].title}
        </div>
      </div>

      <FormPagination form={form} handleSubmit={handleSubmit} pagination={pagination} setPagination={setPagination}>
        <Input form={form} errors={errors} register={register} pagination={pagination} />
      </FormPagination>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .titleBox {
    width: 100%;
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

export default ApplicationPopup;

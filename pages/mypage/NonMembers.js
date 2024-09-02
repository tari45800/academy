import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../TSpages/Header';
import { getData2 } from '@/components/FBSubmit';
import useUserStorage from '@/components/useUserStorage';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { NonMembersForm } from '@/components/formobjects/NonMembersForm';
import MyPageList from './MyPageList';
import theme from '@/components/theme';

const NonMembers = () => {
  const [dbData, setDbData] = useState([]);
  const [phone, setPhone] = useState(null);
  const [next, setNext] = useState(true);
  const [sorry, setSorry] = useState(false);
  const [sorry2, setSorry2] = useState(true);

  const { storage } = useUserStorage();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const dbdataFilter =
    dbData !== '없다' &&
    dbData.filter((el) => {
      return el.data().phoneNumber === phone;
    });

  useEffect(() => {
    if (!(dbData[0] && dbdataFilter.length > 0) && sorry && sorry2) {
      alert('접수내역이 없습니다.');
    }
    setSorry2(true);
  }, [dbData]);

  const join = ({ displayName, phone }) => {
    setNext(false);
    const newData = {
      dBsetter: setDbData,
      dBcollection: 'apply',
      dBwhere: 'displayName',
      dBequal: displayName,
      dBorderBy: null,
      dBdesc: null,
    };

    if (dbData === '없다') {
      alert('접수내역이 없습니다.');
      setSorry2(false);
    }

    getData2(newData);
    setPhone(phone);
    setSorry(true);
  };

  return (
    <Container>
      <ContentBox>
        {!dbdataFilter?.length || dbData.length === 0 || next || dbData == '없다' ? (
          <>
            <div className="none_container">
              <h1 className="title">{NonMembersForm[0]}</h1>
              <Input form={NonMembersForm} errors={errors} register={register} watch={watch} />
              <button onClick={handleSubmit(join)}>확인하기</button>
            </div>
          </>
        ) : (
          <>
            <MyPageList storage={storage} dbData={dbData} phone={phone}></MyPageList>
          </>
        )}
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #0b0b0b;
  gap: 30px;

  .none_container {
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 131px 0;
  }
  .title {
    padding-top: 2rem;
    font-size: 28px;
    font-weight: 600;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    .input-title-box {
      color: #0b0b0b;
      font-size: 16px;
      font-weight: bold;
    }

    input {
      font-size: 16px;
      padding: 0;
    }
  }

  button {
    margin-top: 10px;
    width: 100%;
    padding: 12px 0px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    border: none;
    border-radius: 15px;
    background-color: var(--tabs-color);
    cursor: pointer;
  }

  .joinus-required-box {
    font-size: 12px;
    width: 100%;
  }

  .joinus-required {
    color: var(--tabs-color);
    margin-right: 4px;
  }

  .joinus_disabled {
    color: gray;
  }

  @media ${theme.device.mobile} {
    max-width: 100%;
    width: 100%;
    color: #0b0b0b;
    gap: 30px;
    align-items: start;
    .none_container {
      max-width: 100%;
      width: 100%;
      padding: 80px 20px;
    }
    .title {
      padding-top: 0rem;
    }
    .input-container {
      .input-title-box {
        font-size: 14px;
      }

      input {
        font-size: 14px;
        padding: 10px 25px 10px 25px;
        border-bottom: none;
        border: 0.25 solid #e2daec;
        border-radius: 15px;
        background-color: #efefef;
      }
    }

    button {
      padding: 15px 0px;
      font-size: 16px;
    }
  }
`;

export default NonMembers;

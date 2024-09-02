import React, { useEffect, useState } from 'react';
import { onJoinUs } from '@/components/FBSubmit';
import { getData2 } from '@/components/FBSubmit';
import useUserStorage from './useUserStorage';

const JoinUser = () => {
  const [dbData, setDbData] = useState([]);
  const { storage, login, basic } = useUserStorage();

  // 회원가입이 되었는지 확인
  useEffect(() => {
    const newData = {
      dBsetter: setDbData,
      dBcollection: 'user',
      dBwhere: 'email',
      dBequal: storage && storage.email,
      dBorderBy: null,
      dBdesc: null,
    };

    if (storage && storage.email) {
      getData2(newData);
    }
  }, [storage]);

  // 회원가입
  useEffect(() => {
    if (dbData === '없다') {
      console.log('회원가입 스토리지');
      console.log(storage);
      const newUser = {
        createAt: storage.createdAt || '',
        email: storage.email,
        displayName: storage.displayName,
        phoneNumber: storage.phoneNumber,
      };

      onJoinUs(newUser);
    }
  }, [dbData]);
  return <></>;
};

export default JoinUser;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../TSpages/Header';
import Nav from '../TSpages/Nav';
import Input from '@/components/Input';
import { writingForm } from '@/components/formobjects/writingForm';
import { useForm } from 'react-hook-form';
import { editPost } from '@/components/FBSubmit';
import { useRouter } from 'next/router';
import { db } from '@/components/Firebase';
import { doc, getDoc } from 'firebase/firestore/lite';
import QuillEditor from '@/components/QuillEditor';
import { useRecoilState } from 'recoil';
import { popup } from '@/components/atom';

const WritingPage = () => {
  const [isVisible, setIsVisible] = useRecoilState(popup);

  // useForm 라이브러리
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    // mode: "onBlur",
  });

  const router = useRouter();
  const { id } = router.query;
  const [editorValue, setEditorValue] = useState('');

  // 수정 해당 글 데이터 들고오기
  useEffect(() => {
    const getData = async () => {
      try {
        const docRef = doc(db, 'WritingForm', id);
        const docSnap = await getDoc(docRef);
        const dbData = docSnap.data();

        // 기존 값 할당
        setEditorValue(dbData.htmlData);
        setValue('title', dbData.title);
        setValue('subTitle', dbData.subTitle);
        setValue('category', dbData.category);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };
    getData();
  }, [id]);

  return (
    <Container>
      <Header></Header>
      <ContentBox>
        <div className="Content">
          {/* {dbData && dbData.data()} */}
          {/* {dbData && dbData.map((el) => <div>{el}</div>)} */}
          <h1>글 작성</h1>
          <Input form={writingForm} errors={errors} register={register} />
          <QuillEditor editorValue={editorValue} setEditorValue={setEditorValue} />
          <button
            onClick={handleSubmit((e) => {
              setIsVisible(false);
              editPost(e, writingForm[0], id, { htmlData: editorValue });
            })}
          >
            제출하기
          </button>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: editorValue }} /> */}
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100%;
  padding: 0 7rem;
  background: linear-gradient(45deg, #d6d2c9, #d6d2c9, #fefefe);
`;

const ContentBox = styled.div`
  padding: 12rem;
  height: 100vh;
  overflow-y: scroll;

  .Content {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    padding: 5rem;
    border-radius: 3rem;
    background-color: white;
  }
`;

export default WritingPage;

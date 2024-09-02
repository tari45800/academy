import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../TSpages/Header';
import Nav from '../TSpages/Nav';
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
import { writingForm } from '@/components/formobjects/writingForm';
import { onSubmit } from '@/components/FBSubmit';
import QuillEditor from '@/components/QuillEditor';
import { useRecoilState } from 'recoil';
import { popup } from '@/components/atom';

const WritingPage = () => {
  const [isVisible, setIsVisible] = useRecoilState(popup);

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

  const [editorValue, setEditorValue] = useState('');

  return (
    <Container>
      <Header></Header>
      <ContentBox>
        <div className="Content">
          <h1>글 작성</h1>
          <Input form={writingForm} errors={errors} register={register} />
          <QuillEditor editorValue={editorValue} setEditorValue={setEditorValue} />
          <button
            onClick={handleSubmit((e) => {
              setIsVisible(false);
              onSubmit(writingForm[0], e, writingForm[0], '글', { htmlData: editorValue });
            })}
          >
            제출하기
          </button>
        </div>
        <div dangerouslySetInnerHTML={{ __html: editorValue }} />
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100%;
  padding: 0 7rem;
  background: linear-gradient(45.54deg, #dfdbd2 -0.01%, #ffffff 100%);
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

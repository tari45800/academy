import { db } from '@/components/Firebase';
import { collection, setDoc, addDoc, doc, deleteDoc, query, where, getDocs, orderBy } from 'firebase/firestore/lite';
import Router from 'next/router';

// 글 등록 함수
export const onSubmit = async (col, data, formName, docName, optionData, link, fName) => {
  const today = new Date();
  try {
    data.kategorie
      ? await data.kategorie.forEach(async (name) => {
          await addDoc(collection(db, col), {
            id: formName,
            ...data,
            createAt: today,
            kategorie: name,
            ...optionData,
          });
        })
      : await addDoc(collection(db, col), {
          id: formName,
          ...data,
          createAt: today,
          kategorie: formName,
          ...optionData,
        });

    link ? await Router.push(link + '/' + fName) : window.location.reload();
  } catch (error) {
    if (formName === 'WritingForm') {
      alert('제한된 사진의 크기를 초과했습니다.');
    }
    alert('제출에 실패했습니다.');
    console.log(formName);
  }
};

export const onJoinUs = async (data, link = '/') => {
  const today = new Date();
  try {
    await addDoc(collection(db, 'user'), {
      ...data,
      createAt: today,
    });
  } catch (error) {
    console.log(error);
  }
  // await Router.push('/TSpages/Login');
  await Router.push(link);
};

// 글 수정 함수
export const editPost = async (data, formName, docName, optionData) => {
  // 폼에서는 입력할 필요 없는 데이터들 넣어주는 코드
  const today = new Date();
  try {
    await setDoc(doc(db, formName, docName), {
      ...data,
      createAt: today,
      ...optionData,
    });
  } catch (error) {
    if (formName === 'WritingForm') {
      alert('제한된 사진의 크기를 초과했습니다.');
    }
    alert('제출에 실패했습니다.');
    console.log(error);
  }

  alert('접수가 완료되었습니다.');
  // await Router.push('/TSpages/Community/Notice');
  window.location.reload();
};

// 글 삭제 함수
export const deletePost = async (collectionName, docName) => {
  const result = confirm('게시물을 정말 삭제 하시겠습니까?');
  if (result) {
    const docRef = await doc(db, collectionName, docName);
    await deleteDoc(docRef);
    window.location.reload();
  }
};

// 글 가져오기 함수
export const getData = async ({ dBsetter, dBcollection, dBwhere, dBequal, dBorderBy, dBdesc }) => {
  // console.log('가져오기');

  try {
    const q = query(
      collection(db, dBcollection),
      dBwhere && dBequal && where(dBwhere, '==', dBequal),
      orderBy(dBorderBy, dBdesc),
    );
    const querySnapshot = await getDocs(q);
    // console.log('데이터는');
    // console.log(querySnapshot.docs);
    dBsetter(querySnapshot.docs);
  } catch (error) {
    console.error('데이터를 불러오는 중 오류 발생:', error);
  }
};

// 오더 바이가 없는 함수
export const getData2 = async ({ dBsetter, dBcollection, dBwhere, dBequal, dBorderBy, dBdesc }) => {
  // console.log('데이터는');
  // console.log(dBwhere);
  // console.log(dBequal);
  try {
    const q = query(collection(db, dBcollection), dBwhere && dBequal && where(dBwhere, '==', dBequal));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.length ? querySnapshot.docs : '없다';
    // console.log(data);
    dBsetter(data);
  } catch (error) {
    console.error('데이터를 불러오는 중 오류 발생:', error);
  }
};

// 오더 바이가 없는 함수
export const getData3 = async ({ dBcollection, dBwhere, dBequal, dBorderBy, dBdesc }) => {
  // console.log('데이터는');
  // console.log(dBwhere);
  // console.log(dBequal);
  try {
    const q = query(collection(db, dBcollection), dBwhere && dBequal && where(dBwhere, '==', dBequal));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.length ? querySnapshot.docs : '없다';
    // console.log(data);
    return data;
  } catch (error) {
    console.error('데이터를 불러오는 중 오류 발생:', error);
  }
};

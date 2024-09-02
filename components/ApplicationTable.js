import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '@/components/Firebase';
import { setDoc, doc } from 'firebase/firestore/lite';
import { deletePost } from './FBSubmit';

const ApplicationTable = ({ formArray, dbData, handleDesc, getData, data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {}, [hoveredIndex]);

  // 테이블 양식을 리턴하는 함수
  const createTable = (el, tidx, dbData) => {
    return (
      <>
        <div className="" key={tidx}>
          {/* 어레이 컬럼명 */}
          <div className="column column-name">{el.info.label}</div>

          {/* 파이어베이스 데이터 */}
          {dbData.map((doc, idx) => {
            console.log(el.info.name);
            return (
              // formArray[0].title === doc.data().id &&
              el.info.name === 'displayName' ? (
                <div
                  className={`delete ${hoveredIndex === idx && 'sorry'}`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="column column-data sorryy" key={idx}>
                    <div
                      className="sorryyy"
                      onClick={() => {
                        const applyDelete = confirm(
                          `'${doc.data().displayName}'님의 '${doc.data().kategorie}' 접수내역을 삭제하시겠습니까?`,
                        );
                        if (applyDelete) {
                          deletePost('apply', doc.id);
                          alert(`'${doc.data().displayName}'님의 '${doc.data().kategorie}' 접수내역이 삭제되었습니다.`);
                        }
                      }}
                    >
                      삭제
                    </div>
                    <div>{doc.data()[el.info.name] || 'x'}</div>
                  </div>
                </div>
              ) : (
                <div
                  key={idx}
                  className={`delete column column-data ${hoveredIndex === idx && 'sorry'}`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div>{doc.data()[el.info.name] || 'x'}</div>
                </div>
              )
            );
          })}
        </div>
      </>
    );
  };

  const addData = async (docId, checkData) => {
    await setDoc(
      // query.docs 독스에 데이터가 들어가 있습니다.
      doc(db, 'apply', docId),
      { ...checkData, checked: !checkData.checked },
    );
    await getData(data);
  };
  return (
    <Container hoveredIndex={hoveredIndex}>
      {/* 원서 카테고리 제목 */}
      <h1>{formArray && formArray[0].title}</h1>

      {/* 원서 정렬 슬렉트 */}
      <select onChange={handleDesc}>
        <option value={['desc', 'createAt']}>최신 순</option>
        <option value={['asc', 'createAt']}>오래된 순</option>
        <option value={['desc', 'checked']}>납부</option>
        <option value={['asc', 'checked']}>미납</option>
      </select>

      <div className="table-box">
        {/* 납부 체크 */}
        <div className="">
          <div className="column column-name">확인</div>
          {dbData.map((doc, idx) => {
            return (
              // formArray[0].title === doc.data().id &&
              <div className="column column-data" key={idx}>
                <input
                  type="checkBox"
                  checked={doc.data()['checked']}
                  onClick={() => {
                    if (
                      confirm(
                        `'${doc.data()['displayName']}'님을 ${
                          doc.data()['checked'] ? '미확인' : '확인'
                        }처리 하시겠습니까?`,
                      )
                    ) {
                      addData(doc.id, doc.data());
                      alert(
                        `'${doc.data()['displayName']}'님은 ${
                          doc.data()['checked'] ? '미확인' : '확인'
                        }처리 되었습니다.`,
                      );
                    }
                  }}
                ></input>
              </div>
            );
          })}
        </div>
        <div className="">
          <div className="column column-name">0. 신청과목</div>
          {dbData.map((doc, idx) => {
            return (
              <div className="column column-data" key={idx}>
                <div>{doc.data().id}</div>
              </div>
            );
          })}
        </div>

        {/* 원서접수 컨텐츠 */}
        {formArray &&
          formArray.map((el, idx) => {
            // 폼 양식이 아니라면 건너뛰는 코드
            if (idx === 0) {
              return;
            }

            return (
              <>
                {el.map((arrEl) => {
                  // 라디오 중복 방지
                  if (Array.isArray(arrEl)) {
                    arrEl = arrEl[0];
                  }
                  return createTable(arrEl, idx, dbData);
                })}
              </>
            );
          })}

        {/* 접수일자 */}
        <div className="">
          <div className="column column-name">11. 접수일자</div>
          {dbData.map((doc, idx) => {
            const createDate = new Date(doc.data().createAt.seconds * 1000 + doc.data().createAt.nanoseconds / 1e6);
            // const dateFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
            // const formattedDate = createDate.toLocaleString('en-US', dateFormatOptions);
            return (
              // formArray[0].title === doc.data().id &&
              <div className="column column-data" key={idx}>
                <div>{createDate.toLocaleString()}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  width: 200vw;

  /* ${(props) =>
    `
      .delete:nth-of-type(${props.hoveredIndex}) {
          background-color: #ccc;
        }
      `} */

  .sorry {
    background-color: #ccc;
  }

  .sorryy {
    display: flex;
  }

  .sorryyy {
    background-color: #701e1e;
    color: white;
    padding: 0 5px;
    margin-right: 10px;
  }

  .table-box {
    display: flex;
  }

  .column {
    padding: 0.5rem;
  }

  .column:nth-of-type(1) {
    min-width: max-content;
  }

  .column-name {
    font-size: 0.9rem;
    font-weight: bold;
    border: 1px solid var(--outline-color);
  }

  .column-data {
    font-size: 0.8rem;
    border: 1px solid var(--outline-color);
  }
`;

export default ApplicationTable;

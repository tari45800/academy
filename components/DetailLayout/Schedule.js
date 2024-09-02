import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';

const Schedule = ({ contents, isMobile = false }) => {
  const link = isMobile ? '/TSpages/Application/mobileapplicationpage' : '/TSpages/Application';

  return (
    <Container>
      <TableRow>
        <TableHeader>강사</TableHeader>
        <TableHeader>강의</TableHeader>
        <TableHeader>요일/시간</TableHeader>
        {/* <TableHeader>개강</TableHeader> */}
      </TableRow>
      <div className="line"></div>
      {contents &&
        contents.map((item, idx) => (
          <div key={idx}>
            <TableRow>
              <TableCell className="img_box">
                <div className={`image ${item.program === '국어\n정규반' && 'blue'}`}>
                  <img src={item.imageSrc} alt="선생님 사진" />
                </div>
                <p>{item.imgText}</p>
              </TableCell>
              <TableCell className="program_box">{item.program}</TableCell>
              <TableCell className="time_box">{item.time}</TableCell>
              <TableCell className="date_box">{item.date}</TableCell>
            </TableRow>
            <div className="line_2"></div>
          </div>
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  .line {
    width: 100%;
    height: 0rem;
    border-bottom: 1px solid #0b0b0b;
  }
  .line_2 {
    width: 100%;
    height: 0.625rem;
    border-bottom: 1px solid #b7b7b7;
  }
`;

const TableRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  gap: 0rem 1.25rem;
  flex-wrap: wrap;
  .img_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6.25rem;
    height: 8.25rem;
    flex-shrink: 0;
    p {
      color: #000;
      text-align: center;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.03125rem;
      padding-top: 0.38rem;
    }
    .image {
      background: #701e1e;
      width: 6.25rem;
      height: 6.25rem;
    }
    img {
      width: 6.25rem;
      height: 6.25rem;
      flex-shrink: 0;
    }
    .blue {
      background: #1e4770;
      img {
        filter: brightness(0);
      }
    }
  }
  .program_box {
    word-break: keep-all;
    color: #000;
    text-align: center;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.03125rem;
    /* min-width: 13.5625rem; */
    flex-shrink: 0;
  }
  .time_box {
    word-break: keep-all;
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.03125rem;
    /* min-width: 14.1875rem; */
    flex-shrink: 0;
  }
  .date_box {
    display: none;
    word-break: keep-all;
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.03125rem;
    flex-shrink: 0;
  }
  @media ${theme.device.mobile} {
    gap: 0rem 0.8rem;
    .img_box {
      width: 6.25rem;
      height: 6.25rem;
      p {
        font-size: 0.8rem;
        font-weight: 600;
        padding-top: 0.3rem;
      }
      .image {
        width: 4.25rem;
        height: 4.25rem;
      }
      img {
        width: 4.25rem;
        height: 4.25rem;
      }
    }
    .program_box {
      font-size: 0.8rem;
      font-weight: 500;
    }
    .time_box {
      font-size: 0.8rem;
      font-weight: 500;
    }
    .date_box {
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;

const TableCell = styled.div`
  flex: 1;
  /* padding: 8px; */
  text-align: center;
  white-space: pre-wrap;
`;

const TableHeader = styled(TableCell)`
  color: #000;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.03125rem;
  display: flex;
  justify-content: center;
  word-break: keep-all;
  @media ${theme.device.mobile} {
    font-size: 0.87rem;
    font-weight: 600;
  }
`;

export default Schedule;

import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from '@/components/theme';
import DOMPurify from 'dompurify';

const PopupDetail = ({ doc }) => {
  const router = useRouter();
  const { pathname } = router;
  const pathSegments = pathname.split('/'); // 경로를 슬래시('/')로 분할
  const location = pathSegments[pathSegments.length - 2];

  return (
    <>
      {location === 'management' && (
        <Container>
          <div className="title_box">
            <h3>{doc.title}</h3>
            <p>{doc.subTitle}</p>
          </div>
          <div className="contnet_box">
            {doc.contents.map((content, idx) => {
              return (
                <div className="contnet" key={idx}>
                  <h4>{content.title}</h4>
                  <p>{content.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      )}
      {location === 'community' && (
        <Container>
          <div className="title_box">
            <h3>{doc.data().title}</h3>
            <p>{doc.data().subTitle}</p>
          </div>
          <div className="contnet_box">
            {process.browser && <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(doc?.data().htmlData) }}></p>}
          </div>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  .title_box {
    border-bottom: 1px solid rgba(211, 211, 211, 1);
    padding-bottom: 10px;
    h3 {
      color: #0b0b0b;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 2.35rem;
      font-style: normal;
      font-weight: 700;
      padding-bottom: 0.5rem;
      text-align: left;
    }
    p {
      color: #0b0b0b;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      padding-bottom: 0.5rem;
      text-align: left;
    }
  }
  .contnet_box {
    padding: 30px 20px;
    p {
      color: #0b0b0b;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.68rem;
      text-align: left;
    }
  }
  .contnet {
    padding-bottom: 20px;
    h4 {
      color: #0b0b0b;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.68rem;
      text-align: left;
    }
  }
  @media ${theme.device.mobile} {
    .title_box {
      h3 {
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 600;
        padding-bottom: 0.3rem;
      }
      p {
        font-size: 0.875rem;
        padding-bottom: 0.3rem;
      }
    }
    .contnet_box {
      padding: 20px 4px;
      p {
        color: #0b0b0b;
        font-size: 0.82rem;
        line-height: 1.3rem;
      }
    }
    .contnet {
      padding-bottom: 14px;
      h4 {
        font-size: 0.95rem;
        line-height: 1.3rem;
      }
    }
  }
`;

export default PopupDetail;

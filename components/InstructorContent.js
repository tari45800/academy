import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
// import Kimjaeha from '@/public/images/kimjaeha.png';
import Kimjaeha from '@/public/images/svg/Kimjaeha.jpg';
import Leesangsu from '@/public/images/svg/Leesangsu.svg';
import winterschool from '@/public/images/winterschool_poster.png';
import summerschool from '@/public/images/summerschool.png';

const InstructorContnet = () => {
  return (
    <Container>
      <ImageBox>
        <Image src={Kimjaeha} alt="김재하선생님약력" with={2000} height={0} />
      </ImageBox>
    </Container>
  );
};

const Container = styled.div`
  /* position: relative; */
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
  }
  p {
    padding: 20px 0;
  }
`;
// const Container = styled.div`
//   position: relative;
//   padding-left: 3.56rem;
//   background: ${(props) => (props.$tab == 1 ? '#1E4770;' : '#701e1e')};
//   @media ${theme.device.mobile} {
//     /* height: 30.375rem; */
//     padding-left: 2.81rem;
//   }
// `;
// const ImageBox = styled.div`
//   display: flex;
//   justify-content: end;
//   align-items: center;
//   .hidden {
//     filter: brightness(0);
//   }
//   img {
//     height: 100%;
//   }
//   @media ${theme.device.mobile} {
//     img {
//       overflow: hidden;
//       width: 30.4375rem;
//       height: auto;
//     }
//   }
// `;
// const ContentBox = styled.div`
//   position: absolute;
//   top: 0;
// `;
// const TopContent = styled.div`
//   padding-top: 4.31rem;
//   height: 100%;
//   /* max-height: 12.9375rem; */
//   flex-shrink: 0;
//   color: #fff;
//   font-size: 1.125rem;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 140%;
//   .title {
//     font-size: 2.5rem;
//     font-weight: 700;
//     line-height: 100%;
//     margin-top: 0.63rem;
//   }
//   .sub_title {
//     font-size: 2rem;
//     font-weight: 600;
//     line-height: 130%;
//   }
//   span {
//     width: 1rem;
//   }
//   .line {
//     width: 1.4375rem;
//     height: 5px;
//     background-color: #fff;
//     margin: 2rem 0;
//     flex-shrink: 0;
//   }
//   @media ${theme.device.mobile} {
//     .title {
//       font-size: 1.25rem;
//       font-style: normal;
//       font-weight: 700;
//       line-height: 100%;
//       margin-top: 0.69rem;
//     }
//     .sub_title {
//       font-size: 1rem;
//       font-style: normal;
//       font-weight: 600;
//       line-height: 130%;
//     }
//     .line {
//       width: 1.4375rem;
//       height: 1px;
//       flex-shrink: 0;
//       margin: 0.69rem 0;
//     }
//     span {
//       font-size: 0.75rem;
//       font-style: normal;
//       font-weight: 400;
//       line-height: 140%;
//     }
//   }
// `;

// const BottomContent = styled.div`
//   display: inline-flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 2.5625rem;
//   margin-top: 6rem;
//   padding-bottom: 4.31rem;
//   .content {
//     display: flex;
//     align-items: flex-start;
//     gap: 1.1875rem;
//     .tag {
//       display: flex;
//       padding: 0.1875rem 0.5rem 0.125rem 0.5625rem;
//       justify-content: center;
//       align-items: center;
//       border-radius: 0.4375rem;
//       background: #fff;
//       span {
//         color: #701e1e;
//         font-size: 1.4375rem;
//         font-style: normal;
//         font-weight: 700;
//         line-height: 140%; /* 2.0125rem */
//       }
//       .tag_1 {
//         color: #1e4770;
//       }
//     }
//     p {
//       color: #fff;
//       font-size: 1.125rem;
//       font-style: normal;
//       font-weight: 400;
//       line-height: 140%;
//     }
//   }
//   @media ${theme.device.mobile} {
//     .content {
//       .tag {
//         padding: 0.3125rem 0.375rem 0.25rem 0.4375rem;
//         span {
//           font-size: 0.5rem;
//         }
//       }
//       p {
//         font-size: 0.5rem;
//       }
//     }
//   }
// `;
export default InstructorContnet;

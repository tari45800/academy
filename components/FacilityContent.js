import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import theme from './theme';

const FacilityContent = () => {
  const images = [
    {
      imgSrc: '/images/facility_01.png',
      title: '메인 데스크',
      content:
        '자습 전용관은 학생들에게 집중적인 학습을 위한 이상적인 공간입니다. 개인 전용 사물함이 마련된 독서실형 학습 공간으로 효율적이고 안락한 학습 환경이 보장됩니다. 또한, 최신 기술이 적용된 강의실과 다기능 휴게실은 학생들이 학습과 휴식을 적절히 조화롭게 이룰 수 있도록 설계되었습니다.',
    },
    {
      imgSrc: '/images/facility_07.jpg',
      title: '복도',
      content:
        '자습 전용관은 학생들에게 집중적인 학습을 위한 이상적인 공간입니다. 개인 전용 사물함이 마련된 독서실형 학습 공간으로 효율적이고 안락한 학습 환경이 보장됩니다. 또한, 최신 기술이 적용된 강의실과 다기능 휴게실은 학생들이 학습과 휴식을 적절히 조화롭게 이룰 수 있도록 설계되었습니다.',
    },
    {
      imgSrc: '/images/facility_03.jpg',
      title: '1강의실',
      content:
        '자습 전용관은 학생들에게 집중적인 학습을 위한 이상적인 공간입니다. 개인 전용 사물함이 마련된 독서실형 학습 공간으로 효율적이고 안락한 학습 환경이 보장됩니다. 또한, 최신 기술이 적용된 강의실과 다기능 휴게실은 학생들이 학습과 휴식을 적절히 조화롭게 이룰 수 있도록 설계되었습니다.',
    },
    {
      imgSrc: '/images/facility_08.jpg',
      title: '2강의실',
      content:
        '자습 전용관은 학생들에게 집중적인 학습을 위한 이상적인 공간입니다. 개인 전용 사물함이 마련된 독서실형 학습 공간으로 효율적이고 안락한 학습 환경이 보장됩니다. 또한, 최신 기술이 적용된 강의실과 다기능 휴게실은 학생들이 학습과 휴식을 적절히 조화롭게 이룰 수 있도록 설계되었습니다.',
    },
    {
      imgSrc: '/images/facility_05.jpg',
      title: '자습전용관',
      content:
        '자습 전용관은 학생들에게 집중적인 학습을 위한 이상적인 공간입니다. 개인 전용 사물함이 마련된 독서실형 학습 공간으로 효율적이고 안락한 학습 환경이 보장됩니다. 또한, 최신 기술이 적용된 강의실과 다기능 휴게실은 학생들이 학습과 휴식을 적절히 조화롭게 이룰 수 있도록 설계되었습니다.',
    },
    {
      imgSrc: '/images/facility_09.jpg',
      title: '자습전용관 책상',
      content:
        '자습 전용관은 학생들에게 집중적인 학습을 위한 이상적인 공간입니다. 개인 전용 사물함이 마련된 독서실형 학습 공간으로 효율적이고 안락한 학습 환경이 보장됩니다. 또한, 최신 기술이 적용된 강의실과 다기능 휴게실은 학생들이 학습과 휴식을 적절히 조화롭게 이룰 수 있도록 설계되었습니다.',
    },
    {
      imgSrc: '/images/facility_06.jpg',
      title: '컨설팅 룸',
      content:
        '자습 전용관은 학생들에게 집중적인 학습을 위한 이상적인 공간입니다. 개인 전용 사물함이 마련된 독서실형 학습 공간으로 효율적이고 안락한 학습 환경이 보장됩니다. 또한, 최신 기술이 적용된 강의실과 다기능 휴게실은 학생들이 학습과 휴식을 적절히 조화롭게 이룰 수 있도록 설계되었습니다.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {images.map((el, idx) => {
          return (
            <div key={idx}>
              <div className="text_box">
                <div className="title">{el.title}</div>
              </div>
              <div>
                <img src={el.imgSrc} alt={el.imgSrc} />
              </div>
            </div>
          );
        })}
      </StyledSlider>
    </Container>
  );
};
const Container = styled.div``;

const StyledSlider = styled(Slider)`
  position: relative;
  margin-bottom: 100px;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    @media ${theme.device.mobile} {
      height: 300px;
    }
  }

  .slick-list {
    width: 100%;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    top: calc(100% - (200px + 14px));
    font-size: 24px;
    cursor: pointer;
    z-index: 1;
    @media ${theme.device.mobile} {
      top: calc(100% - (150px + 14px));
    }
  }

  .slick-prev {
    left: 20px;
  }
  .slick-next {
    right: 20px;
  }

  .slick-arrow {
    &::before {
      font-size: 40px;
      content: '<';
      @media ${theme.device.mobile} {
        font-size: 24px;
      }
    }
  }
  .slick-next {
    &::before {
      font-size: 40px;
      content: '>';
      @media ${theme.device.mobile} {
        font-size: 24px;
      }
    }
  }

  .slick-dots {
    top: calc(100% + 5px);

    li:last-of-type {
      padding-right: 0;
    }
    li {
      flex: 1;
      width: calc((100%) / 7);
      margin: 0;
      padding-right: 5px;

      button {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 4vw;
        background-size: cover;
        &::before {
          opacity: 0;
        }

        @media ${theme.device.mobile} {
          height: 18vw;
        }
      }
    }
  }

  .slick-dots {
    li:nth-of-type(1) {
      button {
        background-image: url('/images/facility_01.png');
      }
    }

    li:nth-of-type(2) {
      button {
        background-image: url('/images/facility_07.jpg');
      }
    }

    li:nth-of-type(3) {
      button {
        background-image: url('/images/facility_03.jpg');
      }
    }

    li:nth-of-type(4) {
      button {
        background-image: url('/images/facility_08.jpg');
      }
    }

    li:nth-of-type(5) {
      button {
        background-image: url('/images/facility_05.jpg');
      }
    }
    li:nth-of-type(6) {
      button {
        background-image: url('/images/facility_09.jpg');
      }
    }
    li:nth-of-type(7) {
      button {
        background-image: url('/images/facility_06.jpg');
      }
    }
  }

  .text_box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 10px;
  }

  .title {
    color: #0b0b0b;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    @media ${theme.device.mobile} {
      font-size: 16px;
    }
  }

  .conten {
    color: var(--gray-600, #6e7485);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    letter-spacing: -0.27px;
  }
`;

export default FacilityContent;

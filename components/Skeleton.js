import styled from 'styled-components';

export const Skeleton = ({ width, height, margin, padding }) => {
  return <SkeletonContainer $width={width} $height={height} $margin={margin} $padding={padding} />;
};

const SkeletonContainer = styled.div`
  margin: ${({ $margin }) => ($margin ? $margin : 'unset')};
  margin: ${({ $padding }) => ($padding ? $padding : 'unset')};
  height: ${({ $height }) => ($height ? `${$height}` : '100%')};
  width: ${({ $width }) => ($width ? `${$width}` : '100%')};
  border-radius: 4px;
  background-color: #e4e4e4;
  /* background-color: black; */

  animation: loading 1s infinite;

  @keyframes loading {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

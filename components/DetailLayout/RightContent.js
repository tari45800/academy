import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import RightTextContent from '@/components/DetailLayout/RightTextContent';
import RightImageTextContent from '@/components/DetailLayout/RightImageTextContent';
import RightColummBoxContent from '@/components/DetailLayout/RightColummBoxContent';

const RightContent = ({ rightContentItems, layoutType, currentPage, mode, link }) => {
  return (
    <Container>
      {layoutType === 'only_text' && <RightTextContent rightContentItems={rightContentItems} />}
      {layoutType === 'img+text' && <RightImageTextContent rightContentItems={rightContentItems} />}
      {layoutType === 'open_columm_box_button' && <RightColummBoxContent rightContentItems={rightContentItems} />}
    </Container>
  );
};

const Container = styled.div`
  width: 55%;
  display: flex;
  padding-left: 10px;
  @media ${theme.device.mobile} {
    width: 100%;
    padding: 0px;
  }
`;

export default RightContent;

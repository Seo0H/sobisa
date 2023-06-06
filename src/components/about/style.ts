import styled from 'styled-components';

import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

export const Scroll = styled(Layout.VStack)`
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const AboutFont = {
  Skip: styled(Font.Medium)`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray[2]};
  `,
  DetilGrayText: styled(Font.Medium)`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray[4]};
  `,
};

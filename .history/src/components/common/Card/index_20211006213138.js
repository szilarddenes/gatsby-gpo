import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
`;
export const CardHead = styled.div`
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
`;
export const CardSvg = styled.div`
 margin-top
`;
export const CardBody = styled.div`
 padding:1rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
  width: 100%;
  display:block;
`;
export const CardHead = styled.div`
  width: 100%;
  min-height:180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CardSvg = styled.div`
 margin-top:-10%;
 @media (min-width: 1400x) {
  margin-top:-22%;
 }
 width: 100%;
`;
export const CardBody = styled.div`
 padding: 1rem;
 position: relative;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

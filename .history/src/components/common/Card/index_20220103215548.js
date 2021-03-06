import styled from 'styled-components';

export const ItemA = styled.div`
@media (max-width: 960px) {
  max-width: 320px;
 }
 justify-self: center;
 height:100;
`;
export const Centered = styled.div`
display:flex;
justify-content:center;
width: 100%;
max-width: 100%;
 
`;
export const Card = styled.div`
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
  width: 100%;
  display:block;
  align-items: center;
  // display:grid;
  display: flex;
  flex-direction: column;
  
  .card__bottom {
  display: flex;
  align-items: center;
  justify-content: center;
}
 
 
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
 margin-top:-8%;
 width: 100%;
 @media (max-width: 1400px) {
  margin-top:-22%;
 }
 @media (max-width: 1200px) {
  margin-top:-25%;
 }
 @media (max-width: 960px) {
  margin-top:-23%;
 }
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

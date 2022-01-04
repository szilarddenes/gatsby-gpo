import styled from 'styled-components';

export const ItemA = styled.div`
@media (max-width: 960px) {
  max-width: 320px;
 }
 justify-self: center;
 overflow: hidden;
height: 100%;
display: flex;
flex-direction: column;
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
padding-bottom: 1rem;
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
 flex: 1;
margin-bottom: 15px;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

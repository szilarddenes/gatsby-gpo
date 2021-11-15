import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
  width: 100%;
  // max-width: 370px;
  // max-width: 320px;
	// 	min-height: 250px;
`;
export const CardHead = styled.div`
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 45%;
`;
export const CardSvg = styled.div`
 margin-top:8%;
 position:absolute;
 width: 100%;
`;
export const CardBody = styled.div`
 padding:1rem;
 position: re
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

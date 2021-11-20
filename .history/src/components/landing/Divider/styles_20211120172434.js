import styled from 'styled-components';
import fordSvg from 'assets/illustrations/gpo-ford.svg';



export const Wrapper = styled.div`
  padding: 1rem 0;
`;

export const Line = styled.div`
  width:100%;
  display: block;
  height: 2px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#212121')};;
//   margin: 60px auto 0;
}
`
export const Ford = styled.div`
display:block;
position:relative;
width: 100px;
height: 45px;
background-image: url(${fordSvg});
background-repeat: no-repeat;
margin-left: 20%;
`
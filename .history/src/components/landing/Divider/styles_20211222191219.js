import styled from 'styled-components';
import fordSvg from 'assets/illustrations/gpo-ford.svg';
import semaforSvg from 'assets/illustrations/semafor.svg';



export const Wrapper = styled.div`
  padding: 1rem 0;
`;

export const Line = styled.div`
  width:100%;
  display: block;
  height: 2px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#212121')};;
}
`
export const Ford = styled.div`
display:inline-block;
position:relative;
width: 100px;
height: 45px;
background-image: url(${fordSvg});
background-repeat: no-repeat;
margin-left: 20%;
margin-bottom:-6px;
`
export const Semafor = styled.div`
display:inline-block;
position:relative;
width: 20px;
height: 100px;
background-image: url(${semaforSvg});
background-repeat: no-repeat;
margin-left: 30%;
margin-bottom:-6px;
`
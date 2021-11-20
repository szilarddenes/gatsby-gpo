import styled from 'styled-components';
import fordSvg from 'assets/illustrations/gpo-ford.svg';
import { ThemeContext } from 'providers/ThemeProvider'



export const Wrapper = styled.div`
  padding: 1rem 0;
`;

export const Line = styled.div`
  width:100%;
  display: block;
  height: 3px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#fff' : 'red')};;
  margin: 60px auto 0;
}
`
import styled from 'styled-components';
import fordSvg from 'assets/illustrations/gpo-ford.svg';


export const Wrapper = styled.div`
  padding: 1rem 0;
`;

export const Line = styled.div`
  width:100%;
  display: block;
  height: 3px;
  background-color: #4b4b4d;
  margin: 60px auto 0;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};
}
`
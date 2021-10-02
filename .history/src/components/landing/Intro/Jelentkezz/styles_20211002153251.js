import styled from 'styled-components';

export const H1 = styled.h1`
color: ${({ theme }) => (theme === 'light' ? '#212121' : 'red')};
`
import styled from 'styled-components';

export const H1 = styled.h4`
color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
`
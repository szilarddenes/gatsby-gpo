import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  // background-color: #ffff38; 
`;

export const GridItem = styled.div`
  padding: 1rem 0 1rem 0;
  gap: 2rem;
  align-items: center;
  text-align:center;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content:center;
  border-radius:


  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
      padding:0 0.325rem;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }


  }
`;

export const Details = styled.div`
  h2,
  a,
  span {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};;
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }

  .footerRow{
  padding: 0.5rem;

  }
`;

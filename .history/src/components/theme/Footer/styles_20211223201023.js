import footerIllustration from 'assets/illustrations/footer.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  background-color: #ffff38; 
`;

export const GridItem = styled.div`
  padding: 3rem 0 3rem 0;
  gap: 2rem;
  align-items: center;
  text-align:center;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
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
    color: #212121;
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;

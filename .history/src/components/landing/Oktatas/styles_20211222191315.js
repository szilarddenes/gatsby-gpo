import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 6rem 0 0 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 3.5rem 1.2rem;

  @media (max-width: 842px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    .lastGridItem{
        grid-column: span 4;
    }
    
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    .lastGridItem{
      grid-column: span 1;
  }
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 260px;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }
`;

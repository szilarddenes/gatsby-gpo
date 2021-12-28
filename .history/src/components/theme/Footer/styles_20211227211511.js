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
  border-radius: 6px;


  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
      padding:0;
      width:5rem;
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
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }
  hr{
    background-color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    height:2px;
  }
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }

  .footerRow{
  padding: 0.6rem;

  }

  .footerRow #linkHighlight a{
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
      cursor:pointer;
      background:linear-gradient(45deg, #212121, #212121);
      background-position:bottom left;
      background-size:100% 2px;
      background-repeat:no-repeat;
      transition:background-size 300ms ease-in-out;


      font-weight:bold;
      &:hover {
      color: ${({ theme }) => (theme === 'light' ? '#212121' : '#000')};
       background:linear-gradient(45deg, #ffff34, #ffff34);
       background-size: 100% 2px;
    }
  }


`;

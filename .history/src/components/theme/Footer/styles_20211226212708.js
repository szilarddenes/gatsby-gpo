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
  }
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }

  .footerRow{
  padding: 0.5rem;

  }

  .footerRow #linkHighlight a{
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
      cursor:pointer;
      background:linear-gradient(45deg, #212121, #212121);
      background-position:bottom left;
      background-size:0% 2px;
      background-repeat:no-repeat;
      transition:background-size 300ms ease-in-out;

      font-weight:bold;
      &:hover {
      color: ${({ theme }) => (theme === 'light' ? '#212121' : '#000')};
       background:linear-gradient(45deg, #ffff34, #ffff34);
       background-size: 100% 2px;
    }
  }

// Popup style 
.popup-box {
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index:1;
}

.box {
  position: relative;
  width: 70%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: ${({ theme }) => (theme === 'dark' ? '#212121' : '#fff')};
  
  border-radius: 4px;
  padding: 20px;
  border: 2px solid ${({ theme }) => (theme === 'light' ? '#212121' : '#ffff34')};
  overflow: auto;

  p{
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')}
  }
}

.close-icon {
  content: 'x';
  cursor: pointer;
  position: fixed;
  right: calc(15% - 30px);
  top: calc(100vh - 85vh - 33px);
  background: #ffff34;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 2px solid #000;
  font-size: 20px;
  font-weight: bold;
  color: #212121;

}
`;

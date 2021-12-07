import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 6rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const Error = styled.span`
  color: #ff4136;
  display: block;
  margin: -0.2rem 0rem 1rem 0rem;
`;


export const Center = styled.div`
  text-align: center;

  h4 {
    font-weight: normal;
  }
`;



export const FormStyles = styled.div`
box-sizing: border-box;
padding: 0;
margin: 0;
form{
 
  input, select,textarea{
    width: 100%;
    box-sizing: border-box;
    border: 3px solid ${({ theme }) => (theme === 'dark' ? '#ffff38' : '#000000')};;
  
    padding: 0.8rem 1rem;
    border-radius: 7px;
    margin-bottom: 0.5rem;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#fff')};
      &.redBorder{
        border-color: #ff4136;
      }
  }


  }


  display: grid;
  .formSentMsg{
       display:none;
  }
  
  .formSentSuccess{
    display: block;
    padding: 2rem 0 1rem 2.4rem;
    font-weight: bold;
    span{
      font-size: 2rem;
    }
    mark{
      background-color:#ffff38;
      border-radius: 5px;
      padding: 0.3rem;
    }
  }
  button{
    width: 50%;
  }
}


`;
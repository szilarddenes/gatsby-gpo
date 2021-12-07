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

export const ErrorChecker = styled.div`
  border-color: #ff4136;
`;

export const Center = styled.div`
  text-align: left;

  h4 {
    font-weight: normal;
  }
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #6c63ff;
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: #a7a7a7;
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
    border: 2px solid #ffff38;
    padding: 0.8rem 1rem;
    border-radius: 7px;
    margin-bottom: 0.5rem;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    background-color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
      &.redBorder{
        border-color: #ff4136;
      }
  }


  }


  display: grid;
  .formSentMsg{
    text-align:center;
    font-weight:bold;
    color: green;
    padding: 1rem;
    display:none;
  }
  
  .formSentSuccess{
    display: block;
  }
  button{
    width: 50%;
  }
}


`;
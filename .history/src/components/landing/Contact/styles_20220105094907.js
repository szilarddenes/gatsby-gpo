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
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }

  #linkHighlight{
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


export const MapStyleParent =styled.div`

position:relative;
width:100%;
height:100%;

`;

export const MapStyle = styled.div`
position: relative;
height: 100%;
width: 100%;
outline: none;
touch-action: none;

.leaflet-container {
  width: 100%;
  height: 580px;
  @media(max-width:500px){
    height:400px;
  }
  margin-top: 2rem;
  box-shadow: rgb(0,0,0) 0px 0px 0px 1px,rgba(0,0,0,0.09) 0px 70px 65px,rgba(0,0,0,0.07) 0px 30px 30px,rgba(0,0,0,0.06) 0px 15px 15px,rgba(0,0,0,0.05) 0px 10px 8px,rgba(0,0,0,0.04) 0px 14px 4px,rgba(0,0,0,0.03) 0px 2px 2px;
border-radius: 6px;
}

.leaflet-popup-content-wrapper, .leaflet-popup-tip {
  background: #ffff38;
  color: #000;
  box-shadow: 0 3px 14px rgba(0,0,0,0.4);
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  border: 2px solid;

.emoji{
  font-size: 1.3rem;
  font-size: 0.85rem;
}
}

.leaflet-popup-content {
  margin: 20px 15px;
  line-height: 1.4;
  span a{
    color: #000;
  }
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
    -webkit-appe
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
  .displayNone{
       display:none;
  }
  
  .formSentSuccess{
    display: block;
    padding: 1rem 0 1rem 2.4rem;
    font-weight: bold;
    align-items: center;
    span{
      font-size: 2rem;
      padding-left: 1rem;
    }
    mark{
      background-color:#ffff38;
      border-radius: 5px;
      padding: 0.3rem;
    }
  }
  .errorAppeared{
    padding-top: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align:center;
    justify-content:center;
    span{
      font-size: 2rem;
    }
    mark{
      background-color:#ffff38;
      border-radius: 5px;
    }
  }
  button{
    width: 50%;
    padding: 0.5rem 0.5rem;
    border: 3px solid black;
    border-radius: 6px;
    max-width: 150px;
    margin-top: 1rem;
  }
}


`;
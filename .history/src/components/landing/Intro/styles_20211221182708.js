import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`

  @media (max-width: 960px) {
  padding: 3rem 0;
  }
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
 
`;
export const BorderedImage = styled.div`

box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
border-radius: 6px;
filter: brightness(75%);
`;

export const Details = styled.div`
  flex: 1;

  h1 {
    margin-bottom: 1rem;
    font-size: 36pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 1.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

export const HeroContainer = styled.div`
position: relative;
max-width: 1280px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }

`
export const AbsoluteImage = styled.div`
position: absolute;
top: 40%;
left: 74%;
transform: translate(-35%, -50%);
z-index:1;
text-align: center;
`

export const ButtonWhatsApp = styled.div`
display: flex;
align-items: center;
vertical-align: middle;
font-weight: bold;
padding:0.5rem 0.5rem;
border: 3px solid black;
border-radius:6px;
`
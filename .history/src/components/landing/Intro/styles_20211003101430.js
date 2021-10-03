import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
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

box-shadow: rgb(0, 0, 0) 0px 0px 0px 1px, rgba(0, 0, 0, 0.09) 0px 70px 65px, rgba(0, 0, 0, 0.07) 0px 30px 30px, rgba(0, 0, 0, 0.06) 0px 15px 15px, rgba(0, 0, 0, 0.05) 0px 10px 8px, rgba(0, 0, 0, 0.04) 0px 14px 4px, rgba(0, 0, 0, 0.03) 0px 2px 2px;
border-radius: 6px;
filter: brightness(75%);
`;

export const Details = styled.div`
  flex: 1;
  justif

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
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
    margin-bottom: 2.5rem;
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
top: 45%;
left: 75%;
transform: translate(-50%, -50%);
z-index:1;
`
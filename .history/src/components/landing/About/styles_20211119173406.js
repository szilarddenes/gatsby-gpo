import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/hero-about.webp';

export const Wrapper = styled.div`
  // background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const AboutWrapper = styled.div`
  padding: 6rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  box-shadow: rgb(0,0,0) 0px 0px 0px 1px,rgba(0,0,0,0.09) 0px 70px 65px,rgba(0,0,0,0.07) 0px 30px 30px,rgba(0,0,0,0.06) 0px 15px 15px,rgba(0,0,0,0.05) 0px 10px 8px,rgba(0,0,0,0.04) 0px 14px 4px,rgba(0,0,0,0.03) 0px 2px 2px;
border-radius: 6px;
-webkit-filter: brightness(75%);
filter: brightness(75%);
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
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

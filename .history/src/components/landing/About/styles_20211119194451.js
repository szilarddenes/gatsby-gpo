import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/hero-about.webp';

export const Wrapper = styled.div`
  // background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const AboutWrapper = styled.div`
  // padding: 6rem 0;
  display: flex;
  // align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
  background-image: url(${detailsIllustration});
  background-size: cover;
  background-position: left top;
  background-repeat: no-repeat;
  border-radius: 6px;
  min-height: 320px;
`;

export const Details = styled.div`
  flex: 1;
  padding:2rem;

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
    font-weight: normal;
    line-height: 1.3;
    // color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};
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

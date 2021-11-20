import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/hero-about.webp';

export const Wrapper = styled.div`
 overflow:hidden;
 @media (max-width: 600px) {
  .mob{
    display: inline;
    p {
      color: ${({ theme }) => (theme === 'dark' ? 'c7c7c7' : 'black')};
    }
  }
  .desk{
    display:none;
  }
  .aboutBtn{
    display: inline;
    margin-top: 30%;

    @media (max-width: 400px) {
    margin-top: 45%;
    margin-left: 1rem;
    }

    height: auto;
    max-height: 19px;
    margin-left: 2rem;
  }
 }

 @media (min-width: 601px) {
  .mob{
    display: none;
  }
  .desk{
    display:block;
  }
 }
 
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;


  background-image: url(${detailsIllustration});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  border-radius: 6px;
  min-height: 320px;
`;

export const Details = styled.div`
  flex: 1;
  padding:2rem;

  @media (max-width: 960px) {
    padding-left: 2rem;
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
    

    @media (max-width: 960px) {
      // mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
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

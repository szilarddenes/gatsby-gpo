import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  // background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const TanuloinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
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
  
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;

export const Thumbnail = styled.div`
  
  .section-center {
    width: 80vw;
    height: 450px;
    @media (max-width:600px){
      max-width: 320px;

    }
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
     
    article {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all .3s linear;
    }
      article.activeSlide{
        opacity: 1;
        transform:translateX(0);
      }
      article.lastSlide{
        transform:translateX(-100%);
      }
      article.nextSlide{
        transform:translateX(100%);
      }
    
    }
    
    .next{
      left:0;
    }
    .prev{
      right:0;
    }
    .next, .prev {
    position: absolute;
    top: 50px;
    transform: translateY(-50%);
    background: #617d98;
    color: #fff;
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: .25rem;
    cursor: pointer;
    transition: all .3s linear;
    }

    @media (min-width: 768px){
    .next, .prev {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    }
    }
  } 

    
`;

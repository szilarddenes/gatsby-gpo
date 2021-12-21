import styled from 'styled-components';
import SliderBcgk from 'assets/illustrations/slider-bckg.webp';

export const Wrapper = styled.div`
  padding: 6rem 0 3rem 0;

`;

export const TanuloinkWrapper = styled.div`

  display: grid;
  grid-gap: 1rem;
  background-image: url(${SliderBcgk});
  background-size: cover;
  background-repeat: no-repeat;
  grid-template-columns: 1fr;
  border-radius:6px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  }

  @media (max-width: 1024px){
    padding-bottom: 4rem;
  }

  .detailsSlider{
    padding:0;
  }
`;

export const Details = styled.div`
  flex: 1;
  @media(max-width: 375px){
    padding: 3rem 2rem;
  }

  padding: 3rem 4rem 0rem 4rem;
  position:relative;
  align-self: center;

  .detailsCont{
  h3 {
    margin-bottom: 2rem;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};
    background: ${({ theme }) => (theme === 'dark' ? '#21212185' : '#ffffff94')};
    display: inline;
padding: 0 1rem;
  }

  p {
    margin-bottom: 2.5rem;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};
    background: ${({ theme }) => (theme === 'dark' ? '#21212185' : '#ffffff94')};
    padding: 0.5rem;
    border-radius: 6px;
    text-align: justify;
  }

  }
  button{
    text-alig:center;
  }


  
`;

export const Thumbnail = styled.div`

padding: 0 2rem;
@media (max-width:375px){
  padding: 0 1rem;
}
  .section-center {
    width: 100%;
    height: 300px;
    text-align: center;
    position: relative;
    display: grid;
    overflow: hidden;
    top: 38%;

    article {
      position: absolute;
         left:0;
      right:0;
      bottom:0;
      margin: auto;
      
    
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all .3s linear;
    }
      article.activeSlide{
        opacity: 1;
        transform:translateX(0);
        position:relative;
        
        img{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 6px;
        
        }
     
      }
      article.lastSlide{
        transform:translateX(-100%);
         position: absolute;
      }
      
      article.nextSlide{
        transform:translateX(100%);
         position: absolute;
          // left: 50%; 
          // top: 50%;

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
    top: 50%;
    transform: translateY(-50%);
    background: #ffff38;
    color: #000;
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

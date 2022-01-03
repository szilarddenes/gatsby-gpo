import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, TanuloinkWrapper, Details, Thumbnail } from './styles';
import Slider from './slider'

const Tanuloink = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="tanuloink" >
      <h1>Tanulóink</h1>
          <div className="detailsCont">
              <h3>-Ők már minket választottak:</h3>
              </div>
      <TanuloinkWrapper>
        <Details theme={theme} >
          <div className="detailsCont">
            <p> 
              Udvarhelyi irodánk megnyitása óta több mint 300-an választották képzéseinket, néhányukkal itt is megismerkedhettek. Sikeres vizsgázóinkról, az iskolánkat éríntő újdonságokról beszámolunk a közösségi felületeinken is, kövesetek minket <b>
              <a
              href="https://www.facebook.com/hr10gpo/"
                rel="noopener noreferrer"
                target="_blank"
                style={{color:"inherit"}}
              >Facebookon</a></b> és <b>
              <a
              href="https://www.instagram.com/hr10gpo/"
                rel="noopener noreferrer"
                target="_blank"
                style={{color:"inherit"}}
              >Instán</a></b> is!
            <br />
            </p>

          </div>
        </Details>
        <Details className='detailsSlider'theme={theme}>
          <Thumbnail>
         

            <Slider></Slider>
          </Thumbnail>

        </Details>
      </TanuloinkWrapper>
    </Wrapper>
  );
};

export default Tanuloink
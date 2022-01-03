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

      <TanuloinkWrapper>
        <Details theme={theme} >
          <div className="detailsCont">
            <p> <span>Ők már minket választottak:</span><br />
              Udvarhelyi irodánk megnyitása óta több mint 300-an választották képzéseinket, néhányukkal itt is megismerkedhettek. Sikeres vizsgázóinkról, az iskolánkat éríntő újdonságokról beszámolunk a közösségi felületeinken is, kövesetek minket <b><a
              href="https://jointadventure.co"
                rel="noopener noreferrer"
                target="_blank"
              >Facebookon</a></b> és <b><a>Instán</a></b> is!.
            </p>


          </div>
        </Details>
        <Details className='detailsSlider'>
          <Thumbnail>
            <Slider></Slider>
          </Thumbnail>

        </Details>
      </TanuloinkWrapper>
    </Wrapper>
  );
};

export default Tanuloink
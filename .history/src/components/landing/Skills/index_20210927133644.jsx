import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import imgAbout from 'assets/illustrations/About.svg';
import { Wrapper, AboutWrapper, Details, Thumbnail } from './styles';

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <AboutWrapper as={Container}>
        <Thumbnail>
          <img src={imgAbout} alt="I’m John and I’m a Backend & Devops engineer!" max-width="100%" max-height="100%" width="100%" height="100%"/>
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry’s standard dummy.
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </AboutWrapper>
    </Wrapper>
  );
};

export default About
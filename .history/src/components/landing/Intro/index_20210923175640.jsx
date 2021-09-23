import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/dev.svg";
import { Wrapper, IntroWrapper, Details, Thumbnail, BorderedImage } from "./styles";
import FadeInRight from "hooks/fadeInRight";

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>

        <Details theme={theme}>
          <fadeInRight>
          <h1>Jogsi Kell?</h1>
          <h4>Jelentkezz most sofőrsulinkba!</h4>
          <FadeInRight>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <BorderedImage>
            <img src={dev} alt="Jelentkezz most sofőrsulinkba!" />
          </BorderedImage >
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};


import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/dev.svg";
import { Wrapper, IntroWrapper, Details, Thumbnail, BorderedImage } from "./styles";
import FadeInRight from "hooks/fadeInRight";
import FadeInLeft from "hooks/fadeInLeft";
import { StaticImage } from "gatsby-plugin-image"
     



export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>

        <Details theme={theme}>
          <FadeInRight>
          <h1>Jogsi Kell?</h1>
          <h4>Jelentkezz most sofőrsulinkba!</h4>
          </FadeInRight>
          <FadeInLeft>
          <Button as={AnchorLink} href="#contact">
            Jelentekezz
          </Button>
          </FadeInLeft>

        </Details>
        <Thumbnail>
        <FadeInLeft>
          <BorderedImage>
            <StaticImage
              src='../../assets/illustrations/dev.svg'
              alt="gpo hero image"
              placeholder="blurred"
              width="400px"
              height="auto"
            />
          </BorderedImage >
        </FadeInLeft>
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};


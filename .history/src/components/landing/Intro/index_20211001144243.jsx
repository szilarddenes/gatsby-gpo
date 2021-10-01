import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import { Wrapper, IntroWrapper, Details } from "./styles";
import loadable from '@loadable/component'



const HeroImage = loadable(() => import('./heroImage.jsx'))

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  return (

    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
       
      
        <HeroImage />
      </IntroWrapper>
      <pre>

        git commit -m 'optim 21 @loadable .babelrc Contact form test'

      </pre>
    </Wrapper>

  );
};




import React from "react";
import { Header } from "components/theme";
import { Container } from "components/common";
import { Wrapper, IntroWrapper,  } from "./styles";
import loadable from "@load"




const HeroImage = loadable(() => import('./heroImage.jsx'))

export const Intro = () => {
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




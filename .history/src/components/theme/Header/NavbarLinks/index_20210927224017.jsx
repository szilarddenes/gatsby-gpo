// import React, { useContext } from "react"
// import { ThemeContext } from "providers/ThemeProvider"
// import ToggleTheme from "components/theme/Header/ToggleTheme"
// import { Wrapper } from "./styles"
// import { AnchorLink } from "gatsby-plugin-anchor-links"

// const NavbarLinks = ({ desktop }) => {
//   const { theme } = useContext(ThemeContext)

//   return (
//     <Wrapper desktop={desktop} theme={theme}>
//       <AnchorLink to="/#oktatas">Oktatás</AnchorLink>
//       <AnchorLink to="/#about">Rólunk</AnchorLink>
//       <AnchorLink to="/#tanuloink">Tanulóink</AnchorLink>
//       <AnchorLink to="/#contact">Kapcsolat</AnchorLink>
//       <ToggleTheme />
//     </Wrapper>
//   )
// }

// export default NavbarLinks

// import React, {useContext} from 'react';
// import { ThemeContext } from 'providers/ThemeProvider';
// import ToggleTheme from 'components/theme/Header/ToggleTheme';
// import { Wrapper } from './styles';
// import { Link, animateScroll as scroll } from "react-scroll";

// const NavbarLinks = ({ desktop }) => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <Wrapper desktop={desktop} theme={theme}>
//       <Link to="oktatas" activeClass="active"

//     duration={500} smooth={true} >Oktatás</Link>
//       <Link to="about" activeClass="active"

//     duration={500} smooth={true} >Rólunk</Link>
//       <Link to="tanuloink" activeClass="active"

//     duration={500} smooth={true} >Tanulóink</Link>
//       <Link to="contact" activeClass="active"

//     duration={500} smooth={true} >Kapcsolat</Link>
//       <ToggleTheme />
//     </Wrapper>
//   )

// };

// export default NavbarLinks;

import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import ScrollSpy from "react-scrollspy-navigation"
import FancyButton from "components/common/FancyButton"

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper desktop={desktop} theme={theme}>
      <ScrollSpy>
        {/* <a href="#oktatas" ref={createRef()} duration="250ms" >
          Oktatás
        </a>
        <a href="#about" ref={createRef()} duration="250ms">
          Rólunk
        </a>
        <a href="#tanuloink" ref={createRef()} duration="250ms">
          Tanulóink
        </a>
        <a href="#contact" ref={createRef()} duration="250ms">
          Kapcsolat
        </a> */}

<FancyButton href="#oktatas" text="Oktatás" ref={createRef()} duration="250ms" />
<FancyButton href="#about" text="Rólunk" ref={createRef()} duration="250ms" />
<FancyButton href="#tanuloink" text="Tanulóink" ref={createRef()} duration="250ms" />
<FancyButton href="#contact" text="Kapcsolat" ref={createRef()} duration="250ms" />
      </ScrollSpy>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks


import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import ScrollSpy from "hooks/scrollSpy"


const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)

  React.useEffect(() => {

    const handleView = item => {
        const linkEl = document.querySelector(`#link-${item}`);
          
        let offsetHeight = 0.6*(window.innerHeight)
        inView.offset({
          bottom:offsetHeight
        });
        
        inView(`#${item}`)
          .on("enter", () => linkEl.classList.add('active'))
          .on("exit", el  => linkEl.classList.remove('active'))
      };
      ["oktatas", "about", "tanuloink", "contact"].forEach(handleView);
},

[]);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      {/* <ScrollSpy> */}
      <a href="#oktatas" id="link-oktatas"   >
        Oktatás
      </a>
      <a href="#about" id="link-about"  >
        Rólunk
      </a>
      <a href="#tanuloink" id="link-tanuloink"  >
        Tanulóink
      </a>
      <a href="#contact" id="link-contact" >
        Kapcsolat
      </a>
      {/* </ScrollSpy> */}


      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks


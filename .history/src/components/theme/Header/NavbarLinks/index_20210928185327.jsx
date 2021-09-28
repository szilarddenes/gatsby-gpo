import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { AnchorLink } from "gatsby-plugin-anchor-links";




const NavbarLinks = ({ desktop, props }) => {
  const { theme } = useContext(ThemeContext)
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <a href="/#oktatas" className="active" >
        Oktatás
      </a>
      <a href="/#about" className="active" >
        Rólunk
      </a>
      <a href="/#tanuloink"  className="active" >
        Tanulóink
      </a>
      <a href="/#contact" className="active" >
        Kapcsolat
      </a>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks


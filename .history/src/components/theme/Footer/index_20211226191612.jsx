import React, { useContext } from "react"
import { Container } from "components/common"
import { Wrapper, GridItem, Links, Details } from "./styles"
// import social from './social.json';
import { ThemeContext } from "providers/ThemeProvider"
import Facebook from "assets/icons/gpo-facebook.svg"
import Instagram from "assets/icons/gpo-instagram.svg"
import Popup from './Popup';

export const Footer = () => {
  const { theme } = useContext(ThemeContext)
  const links = [
    {
      id: 0,
      name: "Facebook",
      link: "https://facebook.com/#",
      icon: Facebook,
    },
    {
      id: 1,
      name: "Instagram",
      link: "https://instagram.com",
      icon: Instagram,
    },
  ]



  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Wrapper>
      <GridItem as={Container}>
        <Details theme={theme}>
        <hr />
          <div>
            <h2>Kövess minket a közösségi médiában is</h2>
          </div>
          <div className="footerRow">
            <Links>
              {links.map(({ id, name, link, icon }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`follow me on ${name}`}
                >
                  <img width="40" src={icon} alt={name} />
                </a>
              ))}
            </Links>
          </div>
          <div className="footerRow">

            <span>
              © {new Date().getFullYear()} | Scoala de conducatori auto - Pálfi
              Gáspár Csaba - Autósiskola / Cat.B, BE / AS Nr. 000443{"  "}
            </span>


            <div>
              <a href="">Adatkezelési tájékoztató (GDPR) |  </a> 
              <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
            <a
              href="https://jointadventure.co"
              rel="noopener noreferrer"
              target="_blank"
            >
              készítette: JointADVenture.co
            </a>

            </div>
          </div>
        </Details>
      </GridItem>
    </Wrapper>
  )
}

export default Footer

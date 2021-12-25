import React, { useContext } from "react"
import { Container } from "components/common"
import { Wrapper, GridItem, Links, Details } from "./styles"
// import social from './social.json';
import { ThemeContext } from "providers/ThemeProvider"
import Facebook from "assets/icons/gpo-facebook.svg"
import Instagram from "assets/icons/gpo-instagram.svg"

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

  return (
    <Wrapper>
      <GridItem as={Container}>
        <Details>
        <div className='footerRow'>
          <h2>Kövess minket a közösségi médiában is</h2>
        </div>
            <Links>
              {links.map(({ id, name, link, icon }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`follow me on ${name}`}
                >
                  <img width="24" src={icon} alt={name} />
                </a>
              ))}
            </Links>
          <span>
            © All rights are reserved | {new Date().getFullYear()} | Made with{" "}
            <span aria-label="love" role="img">
              🚕
            </span>{" "}
            by{" "}
            <a
              href="https://solidgarden.tricky.ro"
              rel="noopener noreferrer"
              target="_blank"
            >
              @solidgarden
            </a>
          </span>
        </Details>
      </GridItem>
    </Wrapper>
  )
}

export default Footer

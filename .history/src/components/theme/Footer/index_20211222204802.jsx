import React, {useContext} from 'react';
import { Container } from 'components/common';
import { Wrapper, GridItem, Links, Details } from './styles';
import social from './social.json';
import { ThemeContext } from 'providers/ThemeProvider';


export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return(
  <Wrapper>
    <GridItem as={Container}>
      {/* <Details> */}
        <h2>Kövess minket a közösségi médiában is</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            🚕
          </span>{' '}
          by{' '}
          <a href="https://solidgarden.tricky.ro" rel="noopener noreferrer" target="_blank">
            @solidgarden
          </a>
        </span>
      {/* </Details> */}
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            {/* <img width="24" src={icon} alt={name} /> */}
          </a>
        ))}
      </Links>
    </GridItem>
  </Wrapper>
  )
}

export default Footer
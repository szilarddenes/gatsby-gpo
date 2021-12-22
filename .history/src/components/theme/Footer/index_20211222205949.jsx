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
      <Details>
        <h2>Kövess minket a közösségi médiában is</h2>
        <div>

        </div>
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
      </Details>
   
    </GridItem>
  </Wrapper>
  )
}

export default Footer
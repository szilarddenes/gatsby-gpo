import React, { useState, useContext } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';


export const Header=() => {
  const [sidebar, toggle] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper  toggle={toggle}  theme={theme}>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar sidebar={sidebar} toggle={toggle} />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};


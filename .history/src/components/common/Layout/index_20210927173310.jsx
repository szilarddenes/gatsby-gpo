import React, { useContext } from 'react';
import loadable from '@loadable/component'
import { ThemeContext } from 'providers/ThemeProvider';
import { Global } from './styles';
import { Link } from "gatsby"
import './fonts.css';

const Footer = loadable(() => import('../../theme/Footer/index.jsx'))
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}


export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};

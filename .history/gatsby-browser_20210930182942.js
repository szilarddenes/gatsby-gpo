import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';

export const onServiceWorkerUpdateReady = () => window.location.reload(true);

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
// ES6 way
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
  }

  const loadableReady = require("@loadable/component").loadableReady

  exports.replaceHydrateFunction = () => {
    return (element, container, callback) => {
      loadableReady(() => {
        ReactDOM.render(element, container, callback)
      })
    }
  }
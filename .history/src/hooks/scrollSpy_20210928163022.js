import React from 'react';

function ScrollSpy() {

    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);

    return (
     ["one", "two", "three", "four", "five", "six"].forEach(handleView);
    );
  }

export default ScrollSpy
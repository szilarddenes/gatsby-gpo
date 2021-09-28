import React from 'react';

function ScrollSpy() {



    React.useEffect(() => {

        const handleView = item => {
            const linkEl = document.querySelector(`#link-${item}`);
              
            let offsetHeight = 0.6*(window.innerHeight)
            inView.offset({
              bottom:offsetHeight
            });
            
            inView(`#${item}`)
              .on("enter", () => linkEl.classList.add('is-active'))
              .on("exit", el  => linkEl.classList.remove('is-active'))
          };
    }, []);

    return (
     ["one", "two", "three", "four", "five", "six"].forEach(handleView);
    );
  }

export default ScrollSpy
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
              .on("enter", () => linkEl.classList.add('active'))
              .on("exit", el  => linkEl.classList.remove('active'))
          };
    }, []);

    
    
}
["oktatas", "about", "tanuloink", "contact"].forEach(handleView);

export default ScrollSpy
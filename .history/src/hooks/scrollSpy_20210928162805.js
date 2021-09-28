import React from 'react';

function ScrollSpy(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

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
          
          // Apply method on each DOM element 
          
          
          
          
        }
        return(
            ["one", "two", "three", "four", "five", "six"].forEach(handleView)
        )

  export default ScrollSpy
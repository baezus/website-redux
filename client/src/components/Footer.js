import React, { useState, useEffect } from 'react';

const Footer = ({gradientSide}) => {

  const [whatWay, setWhatWay] = useState();

  function handleGradient() {
    if (gradientSide === 'hero-body'){
      setWhatWay('');
    } else if (gradientSide === 'hero-body active') {
      setWhatWay('active');
    }
  }

  useEffect(() => {
    handleGradient();
  }, [gradientSide])

  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
          <ul className={whatWay}>
            <li>
              <a>Overview</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
             <a>GitHub</a>
            </li>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        
      </nav>
    </div>
  )
}

export default Footer;
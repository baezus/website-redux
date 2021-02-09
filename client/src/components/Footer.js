import React, { useState, useEffect } from 'react';
import Pdf from '../Baez_Resume.pdf';

const codeLinks = ['Github', 'https://github.com/baezus', 'Hash Server', 'https://github.com/baezus/hash_server', 'Blog', 'https://dev.to/baezus/setting-up-a-react-bulma-app-using-sass-3lnk', 'Boop', 'https://baez.us'];
const poetLinks = ['Miss Bay & The Parasite', 'https://www.nocontactmag.com/miss-bay-the-parasite', 'I wanna tutor Katy Perry', 'https://issuu.com/chris_talbot/docs/bkvol11issue4fall', 'Patreon', 'https://patreon.com/baezus', 'Miss Bay & the Parasite', 'https://www.nocontactmag.com/miss-bay-the-parasite'];
const homeLinks = ['Linkedin','https://www.linkedin.com/in/baezus/','Twitter','https://twitter.com/baez_us','Contact','mailto: elias@baez.us','Feedback'];


const Footer = ({gradientSide, path}) => {

  const [whatWay, setWhatWay] = useState();
  const [hyperLinks, setHyperlinks] = useState('are','','you','','kidding','','me');

  function handleGradient() {
    if (gradientSide === 'hero-body'){
      setWhatWay('');
    } else if (gradientSide === 'hero-body active') {
      setWhatWay('active');
    }
  }

  function handleLinks() {
    switch(path) {
      case 'home':
        setHyperlinks(homeLinks);
        break;
      case 'coding':
        setHyperlinks(codeLinks);
        break;
      case 'poetry':
        setHyperlinks(poetLinks);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    handleLinks();
  }, [path])

  useEffect(() => {
    handleGradient();
  }, [gradientSide])

  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-medium is-fullwidth">
          <ul className={whatWay}>
            <li>
              <a href={hyperLinks[1]} 
                target="_blank" 
                rel="noreferrer">{hyperLinks[0]}</a>
            </li>
            <li>
              <a href={hyperLinks[3]}
                target="_blank" 
                rel="noreferrer">{hyperLinks[2]}</a>
            </li>
            <li>
              <a 
                href={hyperLinks[5]}              
                target="_blank" 
                rel="noreferrer">{hyperLinks[4]}</a>
            </li>
            {/* <li>
              <a 
                href={hyperLinks[7]}              
                target="_blank" 
                rel="noreferrer">{hyperLinks[6]}</a>
            </li> */}
          </ul>
      </nav>
    </div>
  )
}

export default Footer;
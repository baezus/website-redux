import React, { useState, useEffect } from 'react';

const codeLinks = ['Github', 'https://github.com/baezus', 'Resume', 'https://baez.us', 'Blog', 'https://baez.us', 'Boop', 'https://baez.us'];
const poetLinks = ['Fruitopia!', 'https://baez.us', 'Publications', 'https://baez.us', 'Patreon', 'https://patreon.com/baezus', 'Miss Bay & the Parasite', 'https://www.nocontactmag.com/miss-bay-the-parasite'];
const homeLinks = ['Linkedin','https://www.linkedin.com/in/baezus/','Twitter','https://twitter.com/baez_us','Contact','elias@baez.us','Guestbook'];


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
            <li>
              <a 
                href={hyperLinks[7]}              
                target="_blank" 
                rel="noreferrer">{hyperLinks[6]}</a>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default Footer;
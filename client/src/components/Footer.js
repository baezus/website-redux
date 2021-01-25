import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';

const Footer = () => {

  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li className="">
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
        </div>
      </nav>
    </div>
  )

}

export default Footer;
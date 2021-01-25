import React, { useEffect, useState } from 'react';
import './styles/App.scss';

function App() {

  const [isHome, setIsHome] = useState(true);
  const [path, setPath] = useState('home');

  useEffect(() => {
    console.log('use effect hook ran');
  }, [])

  return (
    <div className="App">
      <section className="hero is-primary is-fullheight">
        <div className="hero-head">
          <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://baez.us">
                Elias Baez
              </a>
              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item" href="https://baez.us">
                  Programming
                </a>
                <a className="navbar-item" href="https://baez.us">
                  Poetry
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <h1 className="title">
            Elias Baez
          </h1>
          <h2 className="subtitle">
            Programmer, Poet, Editor
          </h2>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
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
      </section>
    </div>
  );
}

export default App;

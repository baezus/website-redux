import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LeftActive from './components/LeftActive';
import LeftSupport from './components/LeftSupport';
import RightActive from './components/RightActive';
import RightSupport from './components/RightSupport';
import Picture from './components/Picture';

function App() {

  const [isHome, setIsHome] = useState(true);
  const [path, setPath] = useState('home');
  const [color, setColor] = useState('hero is-primary is-fullheight');
  const [gradientSide, setGradientSide] = useState('hero-body');

  useEffect(() => {
    console.log('use effect hook ran');
    setGradientSide('hero-body active');
  }, [isHome])

  useEffect(() => {
    console.log('use effect hook ran');
    setGradientSide('hero-body');
  }, [])

  return (
    <div className="App">
      <section className={color}>
        <Navbar/>
        <div className={gradientSide}>
            <div className="container has-text-centered">
              {isHome && 
              <Picture/>}
              <h1 className="title">Elias Baez</h1>
              <div className="columns is-variable is-7 is-vcentered">
                <div className="column is-full">
                  <div className="columns is-mobile">
                    <div className="column">

                      {isHome &&
                      
                      <button 
                      className="button is-large is-outlined has-text-weight-bold" 
                      onClick={() => {setPath('coding'); 
                      setIsHome(false)}}>coding</button>}

                      {!isHome &&
                      path === 'coding' &&
                      
                      <LeftActive/>
                      }

                      {!isHome && 
                      path === 'poetry' && 
                      <LeftSupport/>}

                    </div>
                    <div className="column is-vcentered">

                      {isHome && 
                      <button className="button is-large is-outlined has-text-weight-bold" 
                      onClick={() => {setPath('poetry'); 
                      setIsHome(false)}}>
                        poetry
                      </button>}
                      
                      {!isHome && 
                      path === 'poetry' && 
                      <RightActive/>}

                      {!isHome && 
                      path === 'coding' && 
                      <RightSupport/>}

                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <Footer gradientSide={gradientSide} path={path}/>
      </section>
    </div>
  );
}

export default App;

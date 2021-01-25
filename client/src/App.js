import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [isHome, setIsHome] = useState(true);
  const [path, setPath] = useState('home');
  const [color, setColor] = useState('hero is-primary is-fullheight');

  useEffect(() => {
    console.log('use effect hook ran');
  }, [])

  return (
    <div className="App">
      <section className={color}>
        <Navbar/>
        <div className="hero-body">
            <div className="container has-text-centered">
            <h1 className="title">
              Elias Baez
            </h1>
            <h2 className="subtitle">
              Programmer, Poet, Editor
            </h2>
            <button className="button is-large" onClick={() => {setColor('hero is-success is-fullheight')}}>
              Hey
            </button>
          </div>
        </div>
        <Footer/>
      </section>
    </div>
  );
}

export default App;

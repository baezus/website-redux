import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [isHome, setIsHome] = useState(true);
  const [path, setPath] = useState('home');

  useEffect(() => {
    console.log('use effect hook ran');
  }, [])

  return (
    <div className="App">
      <section className="hero is-primary is-fullheight">
        <Navbar/>
        <div className="hero-body">
          <h1 className="title">
            Elias Baez
          </h1>
          <h2 className="subtitle">
            Programmer, Poet, Editor
          </h2>
        </div>
        <Footer/>
      </section>
    </div>
  );
}

export default App;

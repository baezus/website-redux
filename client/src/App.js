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
      <p>Elias Baez</p>
      <p>you are {path}</p>
    </div>
  );
}

export default App;

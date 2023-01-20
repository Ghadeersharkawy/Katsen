import { useState, useEffect } from 'react';
import './App.css';
import CatsList from './components/cats-list/cats-list.component';

function App() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((cats) => { setCats(cats); console.log(cats); })

  }, [])


  return (
    <div className='app'>

      <CatsList cats={cats} />

    </div>

  );
}

export default App;

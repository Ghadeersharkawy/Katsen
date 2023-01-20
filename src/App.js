import { useState, useEffect } from 'react';
import './App.css';
import CatsList from './components/cats-list.component';

function App() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((cats) => { setCats(cats); console.log(cats); })

  }, [])


  return (
    <div className="App">


      <CatsList cats={cats} />
    </div>
  );
}

export default App;

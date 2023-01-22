import { useState, useEffect } from 'react';
import './App.css';
import CatsList from './components/cats-list/cats-list.component';
import Search from './components/search/search.component';

function App() {
  const [cats, setCats] = useState([]);
  const [searchvalue, setSearchvalue] = useState('');
  const [filteredCats, setFilteredCats] = useState(cats);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((cats) => { setCats(cats); console.log(cats); })

  }, [])

  useEffect(() => {
    const filteredCats = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchvalue);
    })
    setFilteredCats(filteredCats);
  }, [searchvalue, cats])

  const searchHandel = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchvalue(searchString);
    console.log(searchString);
    console.log('filteredCats', filteredCats);
  }

  return (
    <div className='app'>
      <h1>Sweet Cats</h1>
      <Search searchHandel={searchHandel} />
      <CatsList cats={filteredCats} />

    </div>

  );
}

export default App;

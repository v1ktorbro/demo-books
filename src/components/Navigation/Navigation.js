import { useEffect, useState } from 'react';
import './Navigation.css';

function Navigation({ openFormAddBook, resultSearch }) {
  const [valueInputSearch, setValueInputSearch] = useState('');

  useEffect(() => {
    resultSearch(valueInputSearch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInputSearch])

  return (
    <nav className="navigation">
      <input className="navigation__input-search" type="text" placeholder="Поиск книги в коллекции" onChange={(evt) => {setValueInputSearch(evt.target.value);}} />
      <button className="navigation__btn-add-book" type="button" onClick={openFormAddBook} >Добавить книгу</button>
    </nav>
  );
}

export default Navigation;
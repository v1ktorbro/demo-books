import './Navigation.css';

function Navigation({ openFormAddBook, setValueInputSearch }) {
  return (
    <nav className="navigation">
      <input className="navigation__input-search" type="text" placeholder="Поиск книги в коллекции" onChange={(evt) => setValueInputSearch(evt.target.value)} />
      <button className="navigation__btn-add-book" type="button" onClick={openFormAddBook} >Добавить книгу</button>
    </nav>
  );
}

export default Navigation;
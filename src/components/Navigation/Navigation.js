import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <input className="navigation__input-search" type="text" placeholder="Поиск книги в коллекции" />
      <button className="navigation__btn-add-book" type="button">Добавить книгу</button>
    </nav>
  );
}

export default Navigation;
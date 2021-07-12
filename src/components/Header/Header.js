import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg'

function Header({ openFormAddBook, setValueInputSearch }) {
  return (
    <header className="header">
      <Navigation 
        openFormAddBook={openFormAddBook}
        setValueInputSearch={setValueInputSearch}
      />
      <img src={logo} className="header__logo" alt="логотип" />
    </header>
  );
}

export default Header;
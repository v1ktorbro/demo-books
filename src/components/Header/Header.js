import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg'

function Header({ openFormAddBook }) {
  return (
    <header className="header">
      <Navigation 
        openFormAddBook={openFormAddBook}
      />
      <img src={logo} className="header__logo" alt="логотип" />
    </header>
  );
}

export default Header;
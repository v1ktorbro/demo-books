import './Main.css';
import CardBookList from '../CardBookList/CardBookList';

function Main({ onBookClick }) {
  return (
    <main className="main">
      <CardBookList onBookClick={onBookClick} />
    </main>
  );
}

export default Main;
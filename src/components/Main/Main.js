import './Main.css';
import CardBookList from '../CardBookList/CardBookList';

function Main({ onBookClick, listBook }) {
  return (
    <main className="main">
      <CardBookList 
        onBookClick={onBookClick} 
        listBook={listBook}
      />
    </main>
  );
}

export default Main;
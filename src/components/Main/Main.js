import './Main.css';
import CardBookList from '../CardBookList/CardBookList';

function Main({ onBookClick, initialBooks }) {
  return (
    <main className="main">
      <CardBookList 
        onBookClick={onBookClick} 
        initialBooks={initialBooks}
      />
    </main>
  );
}

export default Main;
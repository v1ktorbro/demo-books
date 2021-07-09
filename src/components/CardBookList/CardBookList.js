import './CardBookList.css';
import initialDataBooks from '../../utils/initialDataBooks';
import CardBook from '../CardBook/CardBook';

function CardBookList({ onBookClick }) {
  return (
    <article className="card-book-list">
      {initialDataBooks.map((book, id) => {
        return (
          <CardBook 
            key={id} 
            linkImage={book.linkImage}
            title={book.title}
            description={book.description}
            onBookClick={onBookClick}
          />
        );
      })}
    </article>
  );
}

export default CardBookList;
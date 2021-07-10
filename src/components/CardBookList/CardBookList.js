import './CardBookList.css';
import CardBook from '../CardBook/CardBook';

function CardBookList({ onBookClick, initialBooks }) {
  return (
    <article className="card-book-list">
      {initialBooks.map((book, _id) => {
        return (
          <CardBook 
            key={_id} 
            linkImage={book.linkImage}
            title={book.title}
            description={book.description}
            onBookClick={onBookClick}
            _id={_id}
          />
        );
      })}
    </article>
  );
}

export default CardBookList;
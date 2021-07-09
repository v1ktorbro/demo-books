import './CardBook.css';

function CardBook({ linkImage, title, description }) {
  return (
    <section className="card-book">
        <img src={linkImage} className="card-book__image" alt="Обложка книги" />
      <div className="card-book__text-block" >
        <h3 className="card-book__title">{title}</h3>
        <p className="card-book__description">{description}</p>
      </div>
    </section>
  );
}

export default CardBook;
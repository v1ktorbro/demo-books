import './CardBook.css';

function CardBook() {
  return (
    <section className="card-book">
        <img src="https://img4.labirint.ru/rc/29c8d0b98ac4798cee0f91279103c181/220x340/books71/705242/cover.jpg?1564210842" className="card-book__image" alt="Обложка книги" />
      <div className="card-book__text-block" >
        <h3 className="card-book__title">Мастер и Маргарита</h3>
        <p className="card-book__description">«Ма́стер и Маргари́та» — роман Михаила Афанасьевича Булгакова, работа над которым началась в декабре 1928 года и продолжалась вплоть до смерти писателя. Роман относится к незавершённым произведениям; редактирование и сведение воедино черновых записей осуществляла после смерти мужа вдова писателя — Елена Сергеевна</p>
      </div>
    </section>
  );
}

export default CardBook;
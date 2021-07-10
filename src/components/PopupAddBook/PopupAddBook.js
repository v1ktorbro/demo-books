import './PopupAddBook.css';

function PopupAddBook({ isOpen, onClose, onSubmit, title, description, linkImage }) {
  return (
    <section className={`popup-add-book ${!isOpen && "popup-add-book_closed"}`}>
    <form className="popup-add-book__container" onSubmit={onSubmit}>
      <span className="popup-add-book__btn-close" onClick={onClose} />
        <h3 className="popup-add-book__title">Добавить книгу</h3>
        <input className="popup-add-book__input popup-add-book__input-title" type="text" placeholder="Введите название книги" required />
        <textarea className="popup-add-book__input popup-add-book__input-description" type="text" placeholder="Введите описание книги" required />
        <input className="popup-add-book__input popup-add-book__input-link" type="text" placeholder="Введите ссылку на картинку" />
        <button className="popup-add-book__btn-submit" type="submit">Создать</button>
    </form>
  </section>
  );
}

export default PopupAddBook;
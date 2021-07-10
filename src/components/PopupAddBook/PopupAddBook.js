import { useState } from 'react';
import './PopupAddBook.css';

function PopupAddBook({ isOpen, onClose, onSubmit }) {
  const [dataNewBook, setDataNewBook] = useState({
    title: "",
    description: "",
    linkImage: "",
  });
  return (
    <section className={`popup-add-book ${!isOpen && "popup-add-book_closed"}`}>
    <form name="addBook" className="popup-add-book__container" onSubmit={(evt) => onSubmit(evt, dataNewBook)}>
      <span className="popup-add-book__btn-close" onClick={onClose} />
        <h3 className="popup-add-book__title">Добавить книгу</h3>
        <input name="title" onChange={(evt) => setDataNewBook({...dataNewBook, title: evt.target.value})} className="popup-add-book__input popup-add-book__input-title" type="text" placeholder="Введите название книги" required />
        <textarea name="description" onChange={(evt) => setDataNewBook({...dataNewBook, description: evt.target.value})} className="popup-add-book__input popup-add-book__input-description" type="text" placeholder="Введите описание книги" required />
        <input name="linkImage" onChange={(evt) => setDataNewBook({...dataNewBook, linkImage: evt.target.value})} className="popup-add-book__input popup-add-book__input-link" type="text" placeholder="Введите ссылку на картинку" />
        <button className="popup-add-book__btn-submit" type="submit">Создать</button>
    </form>
  </section>
  );
}

export default PopupAddBook;
import { useState } from 'react';
import './PopupAddBook.css';
import fileIcon from "../../images/file-icon.svg";

function PopupAddBook({ isOpen, onClose, onSubmit }) {
  const [nameFileImage, setNameFileImage] = useState('')
  const [dataNewBook, setDataNewBook] = useState({
    title: "",
    description: "",
    linkImage: "",
  });

  function readerFile (evt) {
    const reader = new FileReader();
    console.log(nameFileImage);
    reader.addEventListener("load", function ()  {
      setDataNewBook({...dataNewBook, linkImage: reader.result});
      setNameFileImage(evt.target.files[0].name);
    });
      reader.readAsDataURL(evt.target.files[0]);
  }
  
  function clearInput() {
    setDataNewBook({
      title: "",
      description: "",
      linkImage: "",
    });
    setNameFileImage('');
  }
  
  return (
    <section className={`popup-add-book ${!isOpen && "popup-add-book_closed"}`}>
    <form name="addBook" className="popup-add-book__container" onSubmit={(evt) => {
      onSubmit(evt, dataNewBook);
      clearInput()
      }}>
      <span className="popup-add-book__btn-close" onClick={onClose} />
        <h3 className="popup-add-book__title">Добавить книгу</h3>
        <input name="title" onChange={(evt) => setDataNewBook({...dataNewBook, title: evt.target.value})} className="popup-add-book__input popup-add-book__input-title" type="text" placeholder="Введите название книги" required />
        <textarea name="description" onChange={(evt) => setDataNewBook({...dataNewBook, description: evt.target.value})} className="popup-add-book__input popup-add-book__input-description" type="text" placeholder="Введите описание книги" required />
        <div className="btns-edit-change__input-file-wrapper">
          <input name="imageFile" id="input__image-file" className="btns-edit-change__input-file" type="file" accept=".jpg, .jpeg, .png" onChange={(evt) => readerFile(evt)} />
          <label htmlFor="input__image-file" className="btns-edit-change__input-file-button">
            <span className="btns-edit-change__input-file-icon-wrapper">
              <img className="btns-edit-change__input-file-icon" src={fileIcon} alt="Выбрать файл" width="25" />
            </span>
            <span className="btns-edit-change__input-file-button-text">Выберите файл для обложки</span>
          </label>
          { nameFileImage.length > 0 && <span className="popup-add-book__label-file-name">Вы выбрали: {nameFileImage}</span>}
        </div>
        <button className="popup-add-book__btn-submit" type="submit">Создать</button>
    </form>
  </section>
  );
}

export default PopupAddBook;
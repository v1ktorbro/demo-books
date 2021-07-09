import './PopupOpenBook.css';

function PopupOpenBook({ isOpen, onClose, linkImage, title, description }) {
  return (
    <section className={`popup-open-book ${!isOpen && "popup-open-book_closed"}`}>
      <div className="popup-open-book__container">
        <span className="popup-open-book__btn-close" onClick={onClose} />
        <div className="popup-open-book__container-image">
          <img src={linkImage} className="popup-open-book__image" alt="Обложка книги" />
        </div>
        <div className="popup-open-book__text-container">
          <div className="popup-open-book__title-block">
            <h3 className="popup-open-book__title">{title}</h3>
            <button className="popup-open-book__btn-edit" />
          </div>
          <div className="popup-open-book__description-block">
            <p className="popup-open-book__description">{description}</p>
            <button className="popup-open-book__btn-edit" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopupOpenBook;
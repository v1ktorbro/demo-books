import './PopupOpenBook.css';
import BtnsEditChange from '../BtnsEditChange/BtnsEditChange';
import { useEffect, useState } from 'react';

function PopupOpenBook({ isOpen, onClose, linkImage, title, description, 
  onSubmitUpdTitleBook, onSubmitUpdDescriptionBook, onSubmitUpdImageBook, removeBook 
}) {
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [isDescriptionEdit, setIsDescriptionEdit] = useState(false);
  const [isImageEdit, setIsImageEdit] = useState(false);
  const [isRemoveBook, setIsRemoveBook] = useState(false);
  const [mouseOnImage, setMouseOnImage] = useState(false);
  const [mouseOnBtnEditTitle, setMouseOnBtnEditTitle] = useState(false);
  const [mouseOnBtnEditDescr, setMouseOnBtnEditDescr] = useState(false);

  useEffect(() => {
    setIsTitleEdit(false);
    setIsDescriptionEdit(false);
    setIsImageEdit(false);
  }, [title, description, linkImage]);

  return (
    <section className={`popup-open-book ${!isOpen && "popup-open-book_closed"}`}>
      <div className="popup-open-book__container">
        <span className="popup-open-book__btn-close" onClick={() => {
          onClose();
          setIsRemoveBook(false);
          setMouseOnBtnEditTitle(false);
          setMouseOnBtnEditDescr(false);
        }} />
        <div className="popup-open-book__container-image">
          <img className="popup-open-book__image" 
            alt="Обложка книги" 
            onClick={() => setIsImageEdit(true)} 
            src={linkImage}
            onMouseEnter={() => setMouseOnImage(true)} 
            onMouseLeave={() => setMouseOnImage(false)}
          />
          {mouseOnImage && !isImageEdit && <span className="popup-open-book__label popup-open-book__label_image">Редактировать обложку</span>}
          { isImageEdit &&
              <BtnsEditChange
                ifFileLoadForm
                onCancel={() => setIsImageEdit(false)}
                onSubmit={onSubmitUpdImageBook}
                labelHide={() => setMouseOnImage(false)}
                styleComponent={{
                  position: 'absolute',
                  top: '39%',
                  zIndex: '10',
                  left: "14px",
                  width: "calc(100% - 50px)",
                  border: "1px solid #4D76A1"
                }}
                styleArea={{
                  height: "18px",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: "normal",
                  whiteSpace: "nowrap",
                }}
                placeholder="Введите ссылку на новую обложку"
              />
          }
        </div>
        <div className="popup-open-book__text-container">
          <div className="popup-open-book__title-block">
          {mouseOnBtnEditTitle && !isTitleEdit && <span className="popup-open-book__label popup-open-book__label_title">Редактировать</span>}
            {!isTitleEdit ? 
              <>
                <h3 className="popup-open-book__title">{title}</h3>
                <button className="popup-open-book__btn-edit" 
                  onClick={() => setIsTitleEdit(true)}
                  onMouseEnter={() => setMouseOnBtnEditTitle(true)} 
                  onMouseLeave={() => setMouseOnBtnEditTitle(false)} 
                />
              </>
              :
              <BtnsEditChange
                onCancel={() => setIsTitleEdit(false)}
                onSubmit={onSubmitUpdTitleBook}
                defaultValueTextArea={title}
                labelHide={() => setMouseOnBtnEditTitle(false)}
                placeholder="Редактировать название книги"
              />}
          </div>
          <div className="popup-open-book__description-block">
          {mouseOnBtnEditDescr && !isDescriptionEdit && <span className="popup-open-book__label popup-open-book__label_description">Редактировать</span>}
            {!isDescriptionEdit ? 
            <>
              <p className="popup-open-book__description">{description}</p>
              <button className="popup-open-book__btn-edit" 
                onClick={() => setIsDescriptionEdit(true)}
                onMouseEnter={() => setMouseOnBtnEditDescr(true)} 
                onMouseLeave={() => setMouseOnBtnEditDescr(false)} 
              />
            </>
            :
            <BtnsEditChange
              onCancel={() => setIsDescriptionEdit(false)}
              onSubmit={onSubmitUpdDescriptionBook}
              defaultValueTextArea={description}
              styleArea={{
                height: "200px",
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: "normal"
              }}
              labelHide={() => setMouseOnBtnEditDescr(false)}
              placeholder="Редактировать описание книги"
            />}
          </div>
        </div>
        <button className="popup-open-book__btn-remove" type="button" onClick={() => setIsRemoveBook(true)}>Удалить книгу</button>
        { isRemoveBook && 
            <div className="popup-open-book__remove-block">
              <h3 className="popup-open-book__title">Вы уверены?</h3>
              <div className="popup-open-book__remove-block-wrapper">
                <button className="popup-open-book__btn-remove-yes" type="button" onClick={() => {
                  removeBook();
                  setIsRemoveBook(false);
                  }}>Да</button>
                <button className="popup-open-book__btn-remove-no" type="button" onClick={() => setIsRemoveBook(false)}>Нет</button>
              </div>
            </div>
        }
      </div>
    </section>
  );
}

export default PopupOpenBook;
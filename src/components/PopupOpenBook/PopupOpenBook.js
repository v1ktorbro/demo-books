import './PopupOpenBook.css';
import BtnsEditChange from '../BtnsEditChange/BtnsEditChange';
import { useEffect, useState } from 'react';

function PopupOpenBook({ isOpen, onClose, linkImage, title, description, 
  onSubmitUpdTitleBook, onSubmitUpdDescriptionBook, onSubmitUpdImageBook 
}) {
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [isDescriptionEdit, setIsDescriptionEdit] = useState(false);
  const [isImageEdit, setIsImageEdit] = useState(false);

  useEffect(() => {
    setIsTitleEdit(false);
    setIsDescriptionEdit(false);
    setIsImageEdit(false);
  }, [title, description, linkImage]);

  return (
    <section className={`popup-open-book ${!isOpen && "popup-open-book_closed"}`}>
      <div className="popup-open-book__container">
        <span className="popup-open-book__btn-close" onClick={onClose} />
        <div className="popup-open-book__container-image">
          <img src={linkImage} className="popup-open-book__image" alt="Обложка книги" onClick={() => setIsImageEdit(true)} />
          { isImageEdit &&
              <BtnsEditChange
                onCancel={() => setIsImageEdit(false)}
                onSubmit={onSubmitUpdImageBook}
                styleComponent={{
                  position: 'absolute',
                  top: '39%',
                  zIndex: '10',
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
            {!isTitleEdit ? 
              <>
                <h3 className="popup-open-book__title">{title}</h3>
                <button className="popup-open-book__btn-edit" onClick={() => setIsTitleEdit(true)} />
              </>
              :
              <BtnsEditChange
                onCancel={() => setIsTitleEdit(false)}
                onSubmit={onSubmitUpdTitleBook}
                defaultValueTextArea={title}
                placeholder="Редактировать название книги"
              />}
          </div>
          <div className="popup-open-book__description-block">
            {!isDescriptionEdit ? 
            <>
              <p className="popup-open-book__description">{description}</p>
              <button className="popup-open-book__btn-edit" onClick={() => setIsDescriptionEdit(true)} />
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
              placeholder="Редактировать описание книги"
            />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopupOpenBook;
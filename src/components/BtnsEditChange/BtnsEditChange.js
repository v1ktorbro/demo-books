import { useState } from 'react';
import './BtnsEditChange.css';
import fileIcon from "../../images/file-icon.svg";

function BtnsEditChange({ styleArea, styleComponent, placeholder, onCancel, defaultValueTextArea, onSubmit, labelHide, ifFileLoadForm }) {
  const [valueTextArea, setValueTextArea] = useState(defaultValueTextArea);
  return (
    <form className="btns-edit-change" style={styleComponent} onSubmit={(evt) => onSubmit(evt, valueTextArea)}>
    { ifFileLoadForm ?
        <div className="btns-edit-change__input-file-wrapper">
          <input name="imageFile" id="input__image-file" className="btns-edit-change__input-file" type="file" />
          <label htmlFor="input__image-file" className="btns-edit-change__input-file-button">
            <span className="btns-edit-change__input-file-icon-wrapper">
              <img className="btns-edit-change__input-file-icon" src={fileIcon} alt="Выбрать файл" width="25" />
            </span>
            <span className="btns-edit-change__input-file-button-text">Выберите файл</span>
          </label>
        </div>
      :
      <textarea defaultValue={valueTextArea} className="btns-edit-change__textarea" placeholder={placeholder} style={styleArea} onChange={(evt) => setValueTextArea(evt.target.value)} />
    }
      { !ifFileLoadForm &&
        <div className="btns-edit-change__btns-container">
          <button className="btns-edit-change__save" type="submit" onClick={labelHide}>Сохранить</button>
          <button className="btns-edit-change__cancel" type="button" onClick={() => {
            onCancel();
            labelHide();
          }} >Отменить</button>
        </div>
      }
    </form>
  );
}
  
export default BtnsEditChange;
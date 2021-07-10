import { useState } from 'react';
import './BtnsEditChange.css';

function BtnsEditChange({ styleArea, styleComponent, placeholder, onCancel, defaultValueTextArea, onSubmit, labelHide }) {
  const [valueTextArea, setValueTextArea] = useState(defaultValueTextArea);
  return (
    <form className="btns-edit-change" style={styleComponent} onSubmit={(evt) => onSubmit(evt, valueTextArea)}>
      <textarea defaultValue={valueTextArea} className="btns-edit-change__textarea" placeholder={placeholder} style={styleArea} onChange={(evt) => setValueTextArea(evt.target.value)} />
      <div className="btns-edit-change__btns-container">
        <button className="btns-edit-change__save" type="submit" onClick={labelHide}>Сохранить</button>
        <button className="btns-edit-change__cancel" type="button" onClick={() => {
          onCancel();
          labelHide();
        }} >Отменить</button>
      </div>
    </form>
  );
}
  
export default BtnsEditChange;
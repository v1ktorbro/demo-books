import { useState } from 'react';
import './BtnsEditChange.css';

function BtnsEditChange({ styleArea, placeholder, onCancel, defaultValueTextArea, onSubmit }) {
  const [valueTextArea, setValueTextArea] = useState(defaultValueTextArea);
  return (
    <form className="btns-edit-change" onSubmit={(evt) => onSubmit(evt, valueTextArea)}>
      <textarea defaultValue={valueTextArea} className="btns-edit-change__textarea" placeholder={placeholder} style={styleArea} onChange={(evt) => setValueTextArea(evt.target.value)} />
      <div className="btns-edit-change__btns-container">
        <button className="btns-edit-change__save" type="submit">Сохранить</button>
        <button className="btns-edit-change__cancel" type="button" onClick={onCancel} >Отменить</button>
      </div>
    </form>
  );
}
  
export default BtnsEditChange;
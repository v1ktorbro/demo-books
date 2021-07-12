import './NotFound.css';
import iconNotFound from '../../images/icon-not-found.png';

function NotFound({ textRequest }) {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">По запросу "{textRequest}" ничего не найдено</h1>
        <img src={iconNotFound} className="not-found__icon" alt="икнонка"/>
      </div>
    </section>
  );
}

export default NotFound;
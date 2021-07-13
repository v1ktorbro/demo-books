import './NotFound.css';
import iconNotFound from '../../images/icon-not-found.png';

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">По вашему запросу ничего не найдено</h1>
        <img src={iconNotFound} className="not-found__icon" alt="икнонка"/>
      </div>
    </section>
  );
}

export default NotFound;
import './PopupOpenBook.css';
import post from '../../images/post.jpg';

function PopupOpenBook({ isOpen,onClose }) {
  return (
    <section className={`popup-open-book ${!isOpen && "popup-open-book_closed"}`}>
      <div className="popup-open-book__container">
        <span className="popup-open-book__btn-close" onClick={onClose} />
        <div className="popup-open-book__container-image">
          <img src={post} className="popup-open-book__image" alt="Обложка книги" />
        </div>
        <div className="popup-open-book__text-container">
          <div className="popup-open-book__title-block">
            <h3 className="popup-open-book__title">Заголовок какой то книги очень длинной заголовок оказался оч оч длинной кнгии</h3>
            <button className="popup-open-book__btn-edit" />
          </div>
          <div className="popup-open-book__description-block">
            <p className="popup-open-book__description">Люди невероятно предсказуемы. За десятилетия исследований ученые продемонстрировали закономерности в человеческом поведении и мышлении, которые могут привести нас к очень ожидаемым результатам. Другими словами, есть действенные способы наладить хорошие отношения с окружающими, используя инструменты психологии и поведенческих моделей. Об этом в своей книге «Социальный интеллект. Как привлечь внимание, произвести сильное впечатление и повысить свой социальный статус» говорит американский специалист по социальному взаимодействию и тренер по общению Патрик Кинг.социальную жизнь. Эта книга – глубокий взгляд на концепцию социального интеллекта, который позволит в полной мере раскрыть потенциал человеческих возможностей в общении. Автор опирается не только на научные изыскания, но и на собственный богатый опыт в области поведенческих навыков и взаимодействия.</p>
            <button className="popup-open-book__btn-edit" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopupOpenBook;
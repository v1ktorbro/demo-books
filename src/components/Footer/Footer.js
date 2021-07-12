import './Footer.css';

function Footer () {
  return (
    <footer className="footer">
      <ul className="footer__link-list">
        <li className="footer__item-list">
          <span className="footer__link-icon footer__link-icon_vk" />
          <a className="footer__link" href="https://vk.com/v1ktorabrosimov" target="_blank" rel="noreferrer">Вконтакте</a>
        </li>
        <li className="footer__item-list">
          <span className="footer__link-icon footer__link-icon_tg" />
          <a className="footer__link" href="https://t.me/v1ktorin" target="_blank" rel="noreferrer">Telegram</a>
        </li>
        <li className="footer__item-list">
          <span className="footer__link-icon footer__link-icon_gh" />
          <a className="footer__link" href="https://github.com/v1ktorbro" target="_blank" rel="noreferrer">Github</a>
        </li>
      </ul>
      <span className="footer__signature-author">&#169; 2021. Абросимов Виктор</span>
    </footer>
  );
}

export default Footer;
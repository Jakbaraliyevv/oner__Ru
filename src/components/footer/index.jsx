import React from "react";
import "./footer.scss";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// Rasmlar

import dumalo from "../../img/dumalo.svg";
import visa1 from "../../img/visa1.svg";
import visa2 from "../../img/visa2.svg";
import visa3 from "../../img/visa3.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer1">
            <p>Меню компании</p>
            <a href="#">Что такое Oner</a>
            <a href="#">Реквизиты и информация</a>
            <a href="#">Новости</a>
            <a href="#">Вакансии</a>
            <a href="#">Поставщикам</a>
            <a href="#">Контакты</a>
          </div>
          <div className="footer1">
            <p>Каталоги</p>
            <a href="#">Реквизиты и информация</a>
            <a href="#">Что такое Oner</a>
            <a href="#">Вакансии</a>
            <a href="#">Новости</a>
            <a href="#">Контакты</a>
            <a href="#">Поставщикам</a>
          </div>
          <div className="footer1">
            <p>Помощь</p>
            <a href="#">Что такое Oner</a>
            <a href="#">Вакансии</a>
            <a href="#">Контакты</a>
            <a href="#">Новости</a>
            <a href="#">Контакты</a>
            <a href="#">Часто задаваемые вопросы</a>
          </div>
          <div className="footer1">
            <p>Товары и бренды</p>
            <a href="#">Что такое Oner</a>
            <a href="#">Вакансии</a>
            <a href="#">Новости</a>
          </div>

          <div className="footer2">
            <button className="button">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="texte">
                <h4>Консультация Online</h4>
                <p>Задавайте вопросы</p>
              </div>
            </button>
            <div className="dumalo">
              <button>
                <img src={dumalo} alt="" />
              </button>

              <p>
                Сервис работает в <br /> обычном режиме
              </p>
            </div>
          </div>
        </div>

        <div className="footer__border"></div>
        <div className="footer__bottom">
          <p>Copyright © ООО «Oner.ru» 2021. All rights reserved.</p>

          <div className="visa">
            <p>Принимаем к оплате</p>
            <a href="#">
              <img src={visa1} alt="" />
            </a>
            <a href="#">
              <img src={visa2} alt="" />
            </a>
            <a href="#">
              <img src={visa3} alt="" />
            </a>
          </div>

          <div className="footer__link">
            <p>Оферта</p>
            <p>Конфиденциальность</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

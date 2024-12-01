import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faPhone,
  faUser,
  faCartShopping,
  faBorderNone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="headerLeft">
            <img src={logo} alt="" />
            <form className="form order2">
              <input
                type="search"
                placeholder="Введите номер запчасти или VIN"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="avisome avicomeloop"
              />
            </form>
          </div>

          <div className="headerMiddle">
            <div className="headerRight">
              <div className="location">
                <FontAwesomeIcon icon={faLocationDot} className="avisome" />
                <a href="#"> Санкт-Петербург</a>
              </div>
              <div className="location">
                <FontAwesomeIcon icon={faPhone} className="avisome" />
                <a href="tel:+998902006469"> +7 (347) 229-46-45</a>
              </div>
            </div>
            <div className="user">
              <FontAwesomeIcon icon={faUser} className="avisome" />
              <a href="#">
                <span>Вход /</span> Регистрация
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header__border"></div>

      <div className="header__bottom">
        <div className="container">
          <div className="headerBottom__left">
            <button className="button_catagory">
              <FontAwesomeIcon icon={faBorderNone} />
              Все категории
            </button>
          </div>
          <div className="headerBottom__middle">
            <ul className="ul">
              <li className="li">
                <button>Запчасти для ТО</button>
              </li>
              <li className="li li__avtomasala">
                <button>Автомасла</button>
              </li>
              <li className="li li__Оригинальные  ">
                <button>Оригинальные запчасти</button>
              </li>
              <li className="li li__запчасти">
                <button>Неоригинальные запчасти</button>
              </li>
              <li className="li li__Лампочки">
                <button>Лампочки</button>
              </li>
              <li className="li li__akumlator">
                <button>Аккумуляторы</button>
              </li>
            </ul>
          </div>
          <div className="headerBottom__right order1">
            <button>
              <FontAwesomeIcon icon={faCartShopping} />
              <p>Корзина</p>
              <span>5</span>
            </button>
          </div>
        </div>
      </div>

      <header className="nav2">
        <div className="container">
          <div className="nav__top">
            <div className="nav__logo">
              <FontAwesomeIcon icon={faBars} className="avisome__bars" />
              <img src={logo} alt="" />
            </div>
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} className="avisome__nav" />
              <FontAwesomeIcon icon={faCartShopping} className="avisome__nav" />
              <FontAwesomeIcon icon={faUser} className="avisome__nav" />
            </div>
          </div>
        </div>
      </header>

      <div className="nav__border"></div>

      <header className="nav2__bottom">
        <div className="container">
          <div className="nav__bottom">
            <button className="button_catagory">
              <FontAwesomeIcon icon={faBorderNone} />
              <p>Все категории</p>
            </button>
            <form className="form_nav">
              <input
                type="search"
                placeholder="Введите номер запчасти или VIN"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="avisome avicomeloop"
              />
            </form>
          </div>
        </div>
      </header>
    </header>
  );
}

export default Header;

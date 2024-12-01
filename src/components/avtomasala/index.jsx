import React from "react";
import "./avto.scss";
import useAxios from "../../hooks/useAxios";
// Iconlar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faStar,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
// Rasmlar
import img__card1 from "../../img/mobil.png";

import bg__sarq from "../../img/sarqpng.png";

function Avtomasala() {
  const { data, loading, error } = useAxios({ url: "avtomasala" });

  const avtomasala = data.find((item) => item.avtomasala)?.avtomasala || [];

  console.log(avtomasala);
  return (
    <section className="avtomasala">
      <div className="container">
        <div className="avto__top">
          <h1>Автомасла</h1>
          <button>
            Все автомасла
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="avto__bottom">
          <div className="card1">
            <div className="card1__text">
              <h4>Автомасла №1 от официальных дилеров</h4>
            </div>
            <div className="card1__img">
              <img src={img__card1} alt="" />
            </div>
          </div>

          {avtomasala.map((value) => (
            <div key={value.id} className="card2">
              <div className="card2__img">
                <img src={value.image} alt="" />
              </div>
              <div className="card2__text">
                <div className="all__stars">
                  <p>{value.title}</p>
                  <div className="stars">
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className="yulduz" />
                      <FontAwesomeIcon icon={faStar} className="yulduz" />
                      <FontAwesomeIcon icon={faStar} className="yulduz" />
                      <FontAwesomeIcon icon={faStar} className="yulduz" />
                      <FontAwesomeIcon icon={faStar} className="yulduz1" />
                    </div>
                    <p>4.0 (51)</p>
                  </div>
                </div>

                <h2>{value.description}</h2>

                <div className="prices">
                  <div className="price">
                    <h1>{value.price}</h1>
                    <s>2 864 ₽</s>
                  </div>
                  <button>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sarq__all">
          <div className="sariq">
            <img src={bg__sarq} alt="" />
            <div className="sarq__text">
              <h3>Шины зимние дешевле</h3>
              <button>
                Выбрать
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          <div className="sariq">
            <img src={bg__sarq} alt="" />
            <div className="sarq__text">
              <h3>Шины зимние дешевле</h3>
              <button>
                Выбрать
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          <div className="sariq">
            <img src={bg__sarq} alt="" />
            <div className="sarq__text">
              <h3>Шины зимние дешевле</h3>
              <button>
                Выбрать
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Avtomasala;

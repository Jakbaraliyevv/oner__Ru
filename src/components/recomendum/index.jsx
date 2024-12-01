import React from "react";
// import "./recomendum.scss";
import ".././avtomasala/avto.scss";
import useAxios from "../../hooks/useAxios";
// Iconlar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
// Rasmlar

function Recomended() {
  const { data, loading, error } = useAxios({ url: "recomended" });

  const recomended = data.find((item) => item.recomended)?.recomended || [];

  console.log(recomended);

  return (
    <section className="avtomasala">
      <div className="container">
        <div className="avto__top">
          <h1>Рекомендуем</h1>
        </div>
        <div className="avto__bottom">
          {recomended.map((value) => (
            <div key={value.id} className="card2">
              <div className="card2__img">
                <img src={value.imagie} alt="" />
              </div>
              <div className="card2__text">
                <div className="all__stars">
                  <p>
                    Артикул: <span>{value.article}</span>
                  </p>
                  <div className="stars">
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className="yulduz" />
                      <FontAwesomeIcon icon={faStar} className="yulduz" />
                      <FontAwesomeIcon icon={faStar} className="yulduz" />
                      <FontAwesomeIcon icon={faStar} className="yulduz" />
                      <FontAwesomeIcon icon={faStar} className="yulduz1" />
                    </div>
                    <p>
                      {value.rating} (<span>{value.reviews})</span>
                    </p>
                  </div>
                </div>

                <h2>{value.name}</h2>

                <div className="prices">
                  <div className="price">
                    <h1>
                      {value.price_current} <span>{value.currency}</span>{" "}
                    </h1>
                    <s>
                      {value.price_old} <span>{value.currency}</span>{" "}
                    </s>
                  </div>
                  <button>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recomended;
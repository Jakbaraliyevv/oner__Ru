import React, { useContext } from "react";
import { ShopAppContext } from "../../context/shopContext";
import "./korzina.scss";
import bombosh from "../../img/bombosh.png";
import { useNavigate } from "react-router-dom";

function KorzinaComponents() {
  const { state, dispatch } = useContext(ShopAppContext);

  let totalPrice = state.data.reduce(
    (acc, value) => (acc += value.userPrice),
    0
  );

  const useNAvigate = useNavigate();

  const navigete_button = () => {
    useNAvigate("/");
  };

  return (
    <div>
      {state.data.length ? (
        <div className="all">
          <div className="container">
            <div className="all__price--card">
              {state.data.map((value) => (
                <div key={value.id} className="korzina__price">
                  <div className="korzina__img">
                    <img src={value.imagie} alt="" />
                    <div className="korzina__text">
                      <h2>{value.action}</h2>
                      <h4>{value.name}</h4>
                    </div>
                  </div>

                  <div className="hammasi">
                    <div className="plus__minus">
                      <button
                        onClick={() =>
                          dispatch({
                            type: "decrement",
                            product__id: value.id,
                          })
                        }
                      >
                        -
                      </button>
                      <span className="span__price"> {value.count}</span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "increment",
                            product__id: value.id,
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="korzina__delete">
                      <div className="price">
                        <p>Price:</p>
                        <h2>{`${value.userPrice}$`}</h2>
                      </div>
                      <button
                        onClick={() =>
                          dispatch({ type: "delete", delet_ID: value.id })
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="korzina__total">
              <h2>Buyurtmangiz</h2>
              <div className="total">
                <h4>Jami:</h4>
                <p>{totalPrice}$</p>
              </div>

              <button className="finishButton">Sotib olish</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bombomsh">
          <div className="container">
            <div className="bosh__img">
              <img src={bombosh} alt="" />
            </div>
            <div className="bosh__text">
              <h2>Savatingiz hozircha bo‘sh</h2>
              <p>
                Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali
                topishingiz yoki to‘plamlarni ko‘rishingiz mumkin
              </p>

              <button onClick={navigete_button} className="bosh__button">
                Bosh sahifa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KorzinaComponents;

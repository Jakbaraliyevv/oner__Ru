import React, { useContext } from "react";
import { ShopAppContext } from "../../context/shopContext";
import "./korzina.scss";

function KorzinaComponents() {
  const { state, dispatch } = useContext(ShopAppContext);

  return (
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
                <span>{value.count}</span>
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
                  <h2>{value.price_current}</h2>
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
          ))}
        </div>

        <div className="korzina__total">
          <h2>Buyurtmangiz</h2>
          <div className="total">
            <h4>Jami:</h4>
            <p>1 150 000 $</p>
          </div>

          <button className="finishButton">Sotib olish</button>
        </div>
      </div>
    </div>
  );
}

export default KorzinaComponents;

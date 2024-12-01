import React from "react";
import "./card.scss";
import useAxios from "../../hooks/useAxios";

function Cards() {
  const { data, loading, error } = useAxios({ url: "catagory" });

  const catagory = data.find((item) => item.catagory)?.catagory || [];

  console.log(catagory);

  return (
    <section className="cardlar">
      <div className="container">
        {catagory.map((value) => (
          <div key={value.id} className="card">
            <img src={value.image} alt="" />
            <div className="card__text">
              <h4>{value.name}</h4>
              <p>{value.products_count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;

import React from "react";
import useAxios from "../../hooks/useAxios";

function Crad() {
  const { data, loading, error } = useAxios({ url: "catagory" });

  const hero = data.find((item) => item.catagory)?.catagory || [];

  console.log(hero);

  return <div></div>;
}

export default Crad;

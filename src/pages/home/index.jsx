import React from "react";
import Header from "../../components/header";
import Cards from "../../components/cardalr";
import Avtomasala from "../../components/avtomasala";
import Footer from "../../components/footer";
import Recomended from "../../components/recomendum";
import Chasto from "../../components/chasto";
import Showcase from "../../components/showcase";

function Home() {
  return (
    <>
      <Header />
      <Showcase />
      <Cards />
      <Avtomasala />
      <Recomended />
      <Chasto />
      <Footer />
    </>
  );
}

export default Home;

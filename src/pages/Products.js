import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import ProductList from "../component/productList";
import Footer from "./footer";

function Products() {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
      );
      setData(response.data);
    })();
  }, []);
  return (
    <div>
      <Header />
      <ProductList storage={data?.productsPage?.products} />
      <Footer />
    </div>
  );
}

export default Products;

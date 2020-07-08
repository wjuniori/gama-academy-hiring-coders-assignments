import React, { useEffect, useState } from "react";
import "./App.css";
import Topnav from "./components/Topnav";
import Container from "./components/Container";
import Products from "./components/Products";
import Shopping from "./components/Shopping";
import { URL } from "./constants";
import Loading from "./components/Loading";
import Modal from "./components/Modal";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setProducts(
          json.results.map((result) => {
            return {
              id: parseInt(result.url.split("/")[6]),
              name: result.name,
              price: parseInt(result.url.split("/")[6]),
            };
          })
        );
      })
      .catch((error) => {
        console.log(
          "Ocorreu algum problema ao buscar os produtos! Tente novamente mais tarde!",
          error
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleClickProducts = (product) => {
    setCart([...cart, product]);
  };

  const handleClickShopping = (visible) => {
    setVisibleModal(visible);
  };

  const handleClickModal = () => {
    setCart([]);
  };

  return (
    <>
      <Topnav />
      <main>
        <Container>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="row">
              <Products data={products} onClick={handleClickProducts} />
              <Shopping data={cart} onClick={handleClickShopping} />
            </div>
          )}
        </Container>
      </main>
      <Modal visible={visibleModal} onClick={handleClickModal} />
    </>
  );
}

export default App;

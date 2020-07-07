import React, { useEffect, useState } from "react";
import "./App.css";
import Topnav from "./components/Topnav";
import Container from "./components/Container";
import Products from "./components/Products";
import Shopping from "./components/Shopping";
import { URL } from "./constants";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setProducts(
          json.results.map((result) => {
            return {
              id: result.url.split("/")[6],
              name: result.name,
              price: result.url.split("/")[6],
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

  return (
    <>
      <Topnav />
      <main>
        <Container>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="row">
              <Products data={products} />
              <Shopping />
            </div>
          )}
        </Container>
      </main>
    </>
  );
}

export default App;

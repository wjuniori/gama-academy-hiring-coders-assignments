import React from "react";
import Topnav from "./components/Topnav";
import Container from "./components/Container";
import Products from "./components/Products";
import Shopping from "./components/Shopping";
import "./App.css";

function App() {
  return (
    <>
      <Topnav />
      <main>
        <Container>
          <div className="row">
            <Products />
            <Shopping />
          </div>
        </Container>
      </main>
    </>
  );
}

export default App;

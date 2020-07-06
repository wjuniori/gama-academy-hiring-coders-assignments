import React from "react";
import Container from "./Container";
import "./Topnav.css";

const Topnav = () => {
  return (
    <nav className="topnav">
      <Container>
        <div className="topnav__content">
          <h1 className="topnav__title">Pokestore</h1>
        </div>
      </Container>
    </nav>
  );
};

export default Topnav;

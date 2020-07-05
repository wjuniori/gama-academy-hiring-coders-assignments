import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav className="topnav">
        <div className="container">
          <div className="topnav__content">
            <h1 className="topnav__title">Pokestore</h1>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="row">
            <section className="products">
              <article className="product">
                <div className="product__header">
                  <img
                    className="product__image"
                    src="https://pokeres.bastionbot.org/images/pokemon/1.png"
                    alt="Imagem do Pokémon Bulbasaur"
                  />
                </div>
                <div className="product__body">
                  <p>bulbasaur</p>
                  <h3>R$ 30,00</h3>
                </div>
              </article>
              <article className="product">
                <div className="product__header">
                  <img
                    className="product__image"
                    src="https://pokeres.bastionbot.org/images/pokemon/1.png"
                    alt="Imagem do Pokémon Bulbasaur"
                  />
                </div>
                <div className="product__body">
                  <p>bulbasaur</p>
                  <h3>R$ 30,00</h3>
                </div>
              </article>
              <article className="product">
                <div className="product__header">
                  <img
                    className="product__image"
                    src="https://pokeres.bastionbot.org/images/pokemon/1.png"
                    alt="Imagem do Pokémon Bulbasaur"
                  />
                </div>
                <div className="product__body">
                  <p>bulbasaur</p>
                  <h3>R$ 30,00</h3>
                </div>
              </article>
              <article className="product">
                <div className="product__header">
                  <img
                    className="product__image"
                    src="https://pokeres.bastionbot.org/images/pokemon/1.png"
                    alt="Imagem do Pokémon Bulbasaur"
                  />
                </div>
                <div className="product__body">
                  <p>bulbasaur</p>
                  <h3>R$ 30,00</h3>
                </div>
              </article>
              <article className="product">
                <div className="product__header">
                  <img
                    className="product__image"
                    src="https://pokeres.bastionbot.org/images/pokemon/1.png"
                    alt="Imagem do Pokémon Bulbasaur"
                  />
                </div>
                <div className="product__body">
                  <p>bulbasaur</p>
                  <h3>R$ 30,00</h3>
                </div>
              </article>
              <article className="product">
                <div className="product__header">
                  <img
                    className="product__image"
                    src="https://pokeres.bastionbot.org/images/pokemon/1.png"
                    alt="Imagem do Pokémon Bulbasaur"
                  />
                </div>
                <div className="product__body">
                  <p>bulbasaur</p>
                  <h3>R$ 30,00</h3>
                </div>
              </article>
            </section>
            <section className="shopping">Segunda Coluna</section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

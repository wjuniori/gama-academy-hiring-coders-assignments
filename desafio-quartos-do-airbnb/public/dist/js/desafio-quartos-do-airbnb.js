"use strict"; // Start of use strict

// Executes when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const cardsElement = document.querySelector("#cards");

  async function getData() {
    const URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
    const results = await fetch(URL)
      .then((r) => r.json())
      .then((json) => json);
    return results;
  }

  function renderCards(cards) {
    cardsElement.innerHTML = "";
    cards.map(renderCard);
  }

  function renderCard(card) {
    const div = document.createElement("div");
    div.style.width = "18rem";
    div.style.margin = "1rem";
    div.className = "card";
    div.innerHTML = `
    <img src="${card.photo}" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">${card.property_type}</h5>
      <p class="card-text">${card.name}</p>
      <p class="card-text">R$ ${card.price}</p>
    </div>
  `;
    cardsElement.appendChild(div);
  }

  async function main() {
    const data = await getData();
    renderCards(data);
  }

  main();
});

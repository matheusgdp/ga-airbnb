const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const cardsList = document.querySelector(".card-list");
let data = [];

async function fetchCards() {
  let response =  await fetch(url)
  return await response.json()
}

function renderCards(cards) {
  cardsList.innerHTML = "";
  cards.map(renderCard);
}

function renderCard(card) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
  <div class="card-img">
    <img src="${card.photo}"/>
  </div>
  <div class="card-body">
    <h3 class="card-local">${card.name}</h3>
    <p class="card-type">
      Tipo: ${card.property_type}
    </p>
    <p class="card-price">
    Preço: R$${card.price},00
  </p>
  </div>
`;
  cardsList.appendChild(div);
}

async function main() {
  data = await fetchCards();
  if(data) {
    renderCards(data);
  }
}

main();
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  cardGenerator();
};

function cardGenerator() {
  const cardValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  document.getElementById("centerNum").innerHTML =
    cardValue[Math.floor(Math.random() * cardValue.length)];

  const cardSymbol = ["♦", "♥", "♠", "♣"];
  let symbol = cardSymbol[Math.floor(Math.random() * cardSymbol.length)];
  document.getElementById("firstSymbol").innerHTML = symbol;
  document.getElementById("secondSymbol").innerHTML = symbol;

  if (symbol == "♥" || symbol == "♦") {
    return [
      (document.getElementById("firstSymbol").style.color = "red"),
      (document.getElementById("secondSymbol").style.color = "red")
    ];
  } else {
    return [
      (document.getElementById("firstSymbol").style.color = "black"),
      (document.getElementById("secondSymbol").style.color = "black")
    ];
  }
}

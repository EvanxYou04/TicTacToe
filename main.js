player = "X"; //defualt player
const gridContainer = document.querySelector(".game-container");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.id = `${i}-${j}`;
    gridContainer.appendChild(gridItem);
  }
}

const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.textContent === "") {
      e.target.textContent = player;
      if (checkWinner()) {
        alert(`${player} wins!`);
      }
    }
  });
});

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.textContent = " ";
  });
});

function checkWinner() {
  //check rows
  for (let i = 0; i < 3; i++) {
    if (
      gridItems[i * 3].textContent === player &&
      gridItems[i * 3 + 1].textContent === player &&
      gridItems[i * 3 + 2].textContent === player
    ) {
      return true;
    }
  }
  //check columns
  for (let i = 0; i < 3; i++) {
    if (
      gridItems[i].textContent === player &&
      gridItems[i + 3].textContent === player &&
      gridItems[i + 6].textContent === player
    ) {
      return true;
    }
  }
  //check diagonals
  if (
    gridItems[0].textContent === player &&
    gridItems[4].textContent === player &&
    gridItems[8].textContent === player
  ) {
    return true;
  }
  if (
    gridItems[2].textContent === player &&
    gridItems[4].textContent === player &&
    gridItems[6].textContent === player
  ) {
    return true;
  }
  return false;
}

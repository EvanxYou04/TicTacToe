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
    }
  });
});

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.textContent = " ";
  });
});

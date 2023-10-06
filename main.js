console.log("Hello World!");
const gridContainer = document.querySelector(".game-container");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.id = `${i}-${j}`;
    gridContainer.appendChild(gridItem);
  }
}

let player = "X";
let gameOver = false;

const cells = document.querySelectorAll("td");

cells.forEach(function(cell) {
  cell.addEventListener("click", function() {
    if (!gameOver && cell.textContent === "") {
      cell.textContent = player;
      checkWin();
      player = player === "X" ? "O" : "X";
    }
  });
});

function checkWin() {
  const combinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c] = combinations[i];
    if (
      cells[a - 1].textContent === player &&
      cells[b - 1].textContent === player &&
      cells[c - 1].textContent === player
    ) {
      gameOver = true;
      alert(`Player ${player} wins!`);
      break;
    }
  }
}


document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("game-board");
    const timerDisplay = document.getElementById("time");
    const newGameBtn = document.getElementById("new-game");

    let timer = 0;
    let timerInterval;

    // Create the chessboard
    function createBoard() {
        const pieces = {
            "rook": "rook.png",
            "knight": "knight.png",
            "bishop": "bishop.png",
            "queen": "queen.png",
            "king": "king.png",
            "pawn": "pawn.png"
        };
        const initialSetup = [
            ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
            ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
            [], [], [], [],
            ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
            ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]
        ];
        const colors = ["dark", "light"];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement("div");
                square.classList.add("square", colors[(row + col) % 2]);
                if (initialSetup[row] && initialSetup[row][col]) {
                    const piece = document.createElement("div");
                    piece.classList.add("piece");
                    const img = document.createElement("img");
                    img.src = `images/${row < 2 ? "white" : "black"}_${pieces[initialSetup[row][col]]}`;
                    piece.appendChild(img);
                    square.appendChild(piece);
                }
                board.appendChild(square);
            }
        }
    }

    // Timer functionality
    function startTimer() {
        clearInterval(timerInterval);
        timer = 0;
        timerInterval = setInterval(() => {
            timer++;
            timerDisplay.textContent = timer;
        }, 1000);
    }

    // Start new game
    newGameBtn.addEventListener("click", function () {
        board.innerHTML = "";
        createBoard();
        startTimer();
    });

    // Initialize board and timer
    createBoard();
    startTimer();
});

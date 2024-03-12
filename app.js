let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector('#resetbtn');
let newGameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
}

var count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button Was Clicked");
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        count++;
        box.disabled = true;
        checkWinner();
        drawResult();
    });
})

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
        
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

let winner = null;

const showWinner= (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
} 

const drawResult = () => {
    if (count === 9 && winner===null) {
        console.log("draw")
        msgContainer.classList.remove("hide");
        msg.innerText ="It is a draw";
    }
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val!=="" && pos2val!=="" && pos3val!=="") {
            if (pos1val === pos2val && pos2val=== pos3val) {
                console.log("Winner", pos1val);
                disableBoxes();
                showWinner(pos1val);
            }
            // drawResult();
        }
    }
};


newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


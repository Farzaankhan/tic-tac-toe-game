let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let chng = false;
let pera = document.getElementById("pera");
let newbtn = document.getElementById("newgame");


function myfuntion(box) {
    box.addEventListener("click", () => {
        console.log("box click");
       if (!chng) {
        box.textContent = "X";
        chng = true;
       
       }else{
        box.textContent = "O";
        chng = false;
       }
    //    box.disabled = false;
       box.style.pointerEvents = "none";
      mypattern();
      
    });
}

boxs.forEach(myfuntion);

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function mypattern() {
    for (let pettern of winPatterns) {
     
        let res1= boxs[pettern[0]].innerText;
        let res2 =boxs[pettern[1]].innerText;
        let res3=boxs[pettern[2]].innerText;
      
       if (res1 != "" && res2 != "" && res3 != "" ) {
         if (res1 === res2 && res2=== res3) {
            console.log("winner",res1);
            pera.textContent=`winner ${res1}`;
            boxs.forEach((box)=>{
               box.style.pointerEvents = "none";
            })
            
         }
       }
    }
}


function restartbtn() {
    boxs.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
    });

    chng = false;
    pera.innerText = "";
}

resetBtn.addEventListener("click", () => {
    restartbtn();
});

function newGame() {
    newbtn.addEventListener("click", () => {
        restartbtn();
    });
}

newGame();

// Your code here
const dodger = document.getElementById("dodger");
// dodger.style.background = "#FF69B4";
// dodger.style.bottom = "0px";
// dodger.style.left = "0px";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        console.log('d')
        moveDodgerLeft();
    }
  });

function moveDodgerRight(){
    const rightNumber = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumber);
    if (right<361){
        dodger.style.left = `${right + 1}px`;
    }
    }
  
document.addEventListener('keydown', function(event){
    if (event.key === "ArrowRight"){
        moveDodgerRight();
        // console.log('nooch');
        // const rightNumber = dodger.style.left.replace("px","");
        // console.log(dodger.style.right)
        // console.log(rightNumber)
        // const right = parseInt(rightNumber,10);
        // console.log(right)
        // dodger.style.left = `${right + 1}px`;
    }
});
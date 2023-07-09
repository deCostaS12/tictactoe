let selection = "X";
let counter = 0;
let boxes = document.getElementsByClassName("square");
let player1 = "";
let player2 = "";
let currentPlayer = "";


for(let i=0; i<boxes.length; i++ ){
  boxes[i].addEventListener('click',function(){
    if(!this.textContent){
      this.textContent = selection;
      switchMark();
      setTimeout(function() {
        winning();
      }, 10);
      
    }
    else{
      alert("This square is already selected")
    }
  })
}




function startGame(){
    
    let players = document.getElementById("players");
    let gameBoard = document.getElementById("gameBoard");
    let name = document.getElementById("turn");
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    currentPlayer = player1;

    name.textContent = "It's " + currentPlayer + "'s turn";
    players.style.display = "none";
    gameBoard.style.display = "block";
    

}


function switchMark(){

  if(selection =="X" ){
    selection = "O";
  }
  else {
    selection = "X"
  }


}

function gameEnd(){
  counter = 0;
  selection = "X";

  for(let x=0;x<boxes.length;x++){
    boxes[x].textContent = ""
  }
}


function winning(){

  counter += 1;
  let topFirst = document.getElementById("topFirst");
  let topSecond = document.getElementById("topSecond");
  let topThird = document.getElementById("topThird");
  let midFirst = document.getElementById("midFirst");
  let midSecond = document.getElementById("midSecond");
  let midThird = document.getElementById("midThird");
  let bottomFirst = document.getElementById("bottomFirst");
  let bottomSecond = document.getElementById("bottomSecond");
  let bottomThird = document.getElementById("bottomThird");
  
  if(topFirst.textContent && topFirst.textContent == topSecond.textContent && topSecond.textContent == topThird.textContent){
    alert("Winner is " + topFirst.textContent);
    gameEnd()
  }
  else if(midFirst.textContent && midFirst.textContent == midSecond.textContent && midSecond.textContent == midThird.textContent){
    
    alert("Winner is " + midFirst.textContent);
    gameEnd()
  }
  else if(bottomFirst.textContent && bottomFirst.textContent == bottomSecond.textContent && bottomSecond.textContent == bottomThird.textContent){
    
    alert("Winner is " + bottomFirst.textContent);
    gameEnd()
  }
  else if(topFirst.textContent && topFirst.textContent == midFirst.textContent && midFirst.textContent == bottomFirst.textContent){
    
    alert("Winner is " + topFirst.textContent);
    gameEnd()
  }
  else if(topSecond.textContent && topSecond.textContent == midSecond.textContent && midSecond.textContent == bottomSecond.textContent){
    
    alert("Winner is " + topSecond.textContent);
    gameEnd()
  }
  else if(topThird.textContent && topThird.textContent == midThird.textContent && midThird.textContent == bottomThird.textContent){
    
    alert("Winner is " + topThird.textContent);
    gameEnd();
  }
  else if(topFirst.textContent && topFirst.textContent == midSecond.textContent && midSecond.textContent == bottomThird.textContent){
    
    alert("Winner is " + topFirst.textContent);
    gameEnd()

  }
  else if(bottomThird.textContent && bottomThird.textContent == midSecond.textContent && midSecond.textContent == topFirst.textContent){
    
    alert("Winner is " + bottomFirst.textContent);
    gameEnd()

  }
  else if(counter == 9){
    alert("It's a draw");
    gameEnd()
    
  }

}






let selection = "X";
let counter = 0;
let boxes = document.getElementsByClassName("square");
let player1;
let player2;
let currentPlayer;



for(let i=0; i<boxes.length; i++ ){
  boxes[i].addEventListener('click',function(){
    if(!this.textContent){
      this.textContent = currentPlayer.marker;
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
    let statrBtn = document.getElementById("startBtn");
    let name = document.getElementById("turn");
    let player_init_1 = document.getElementById("player1")
    let player_init_2 = document.getElementById("player2")
    player1 = new player(player_init_1.value,player_init_1.getAttribute("data-mark"));
    player2 = new player(player_init_2.value,player_init_2.getAttribute("data-mark"));
    // player1 = document.getElementById("player1").value;
    // player2 = document.getElementById("player2").value;
    currentPlayer = player1;
    name.textContent = "It's " + currentPlayer.name + "'s turn";
    players.style.display = "none";
    statrBtn.style.display ="none";
    gameBoard.style.display = "block";

    

}

function player(name, marker){

  this.name = name;
  this.marker = marker;

}


function switchMark(){

  if(currentPlayer == player1 ){
    currentPlayer = player2
    let name = document.getElementById("turn");
    name.textContent = "It's " + currentPlayer.name + "'s turn";

  }
  else {
    currentPlayer = player1;
    let name = document.getElementById("turn");
    name.textContent = "It's " + currentPlayer.name + "'s turn";
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
    alert("Winner is " + currentPlayer.name);
    gameEnd()
  }
  else if(midFirst.textContent && midFirst.textContent == midSecond.textContent && midSecond.textContent == midThird.textContent){
    
    alert("Winner is " + currentPlayer.name);
    gameEnd()
  }
  else if(bottomFirst.textContent && bottomFirst.textContent == bottomSecond.textContent && bottomSecond.textContent == bottomThird.textContent){
    
    alert("Winner is " + currentPlayer.name);
    gameEnd()
  }
  else if(topFirst.textContent && topFirst.textContent == midFirst.textContent && midFirst.textContent == bottomFirst.textContent){
    
    alert("Winner is " + currentPlayer.name);
    gameEnd()
  }
  else if(topSecond.textContent && topSecond.textContent == midSecond.textContent && midSecond.textContent == bottomSecond.textContent){
    
    alert("Winner is " + currentPlayer.name);
    gameEnd()
  }
  else if(topThird.textContent && topThird.textContent == midThird.textContent && midThird.textContent == bottomThird.textContent){
    
    alert("Winner is " + currentPlayer.name);
    gameEnd();
  }
  else if(topFirst.textContent && topFirst.textContent == midSecond.textContent && midSecond.textContent == bottomThird.textContent){
    
    alert("Winner is " + currentPlayer.name);
    gameEnd()

  }
  else if(bottomFirst.textContent && bottomFirst.textContent == midSecond.textContent && midSecond.textContent == topThird.textContent){
    
    alert("Winner is " + currentPlayer.name);
    gameEnd()

  }
  else if(counter == 9){
    alert("It's a draw");
    gameEnd()
    
  }
  else{
    switchMark();
  }

}






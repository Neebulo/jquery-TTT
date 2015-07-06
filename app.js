
var theSquares = document.querySelectorAll('.square');


/////////declared all square positions////////////////////////////////////
  var firstSquare= theSquares[0];
  var secondSquare= theSquares[1];
  var thirdSquare= theSquares[2];
  var fourthSquare= theSquares[3];
  var fifthSquare= theSquares[4];
  var sixthSquare= theSquares[5];
  var seventhSquare= theSquares[6];
  var eigthSquare= theSquares[7];
  var ninthSquare= theSquares[8];
////////////////////////////////////////////////////////////////
//declares function 'put'

function put(){               //'this' refers to each square div (the DOM path)
  if(!this.innerText){        // '!' says that if there is an element, no other click is allowed
    this.innerText=whosTurn; // this.innerText is assigned to whosTurn
    changeTurn();            // calls on function changeTurn
  }
}


 var whosTurn = 'X'    // creates variable whoTurn assigned to 'X' for use in function changeTurn
 //////////////////////////////
 function changeTurn(){
     if(whosTurn == 'X'){ // if 'X' has been placed in previous turn, put 'O'
          whosTurn = 'O';
     } else {
          whosTurn = 'X'; //otherwise place 'X'
     }

}
function changeColor(){ // creates function changeColor
  if (whosTurn ==='X'){ // if 'X' was previously used
    this.style.backgroundColor = "green"; //assign color green
  } else {
    //whosTurn = 'O'; // otherwise if 'O' assign red
    this.style.backgroundColor = "red";
  }
}

//////////////////////////////////////////////////
for(var i=0; i<9; i++){ // counts til 9th square is reached
theSquares[i].addEventListener('click', put); // 'i' means each square div listens
theSquares[i].addEventListener('click', changeColor); // each square changes color accordingly
}
////////reset button section below///////////////////////////////////////////////


var button = document.querySelector('#reset'); //assigns reset button with variable 'button'
 button.addEventListener('click', resetGame); // at click of reset button do function resetGame()

function resetGame(){ // declares function to resetGame()
  for(var i=0; i<9; i++){ // counts til 9th square is reached
    theSquares[i].innerText=""; // clears the X and O
    theSquares[i].style.backgroundColor=""; // clears the colors
  }
}


/////////////////////////////////////////////////////////////////
// this addEventListener is arrayed to theSquares[i] in for loop //////////////////////
// firstSquare.addEventListener('click', put );
// secondSquare.addEventListener('click', put );
// thirdSquare.addEventListener('click', put );
// fourthSquare.addEventListener('click', put );
// fifthSquare.addEventListener('click', put );
// sixthSquare.addEventListener('click', put );
// seventhSquare.addEventListener('click', put );
// eigthSquare.addEventListener('click', put );
// ninthSquare.addEventListener('click', put );



///////////////////////////////saved code ////////////////////////////////

console.log('test')

///// all squares defined //////////////
var square = $('.square');

// var allSquares = {
//   firstSquare: square[0],
//   secondSquare: square[1],
//   thirdSquare: square[2],
//   fourthSquare: square[3],
//   fifthSquare: square[4],
//   sixthSquare: square[5],
//   seventhSquare: square[6],
//   eighthSquare: square[7],
//   ninthSquare: square[8]
// };

// creates variable whoTurn assigned to 'X' for use
//in function changeTurn
var whosTurn = 'X'
changeTurn = function(){
    if(whosTurn === 'X'){ // if 'X' has been placed in previous turn, put 'O'
         whosTurn = 'O';
    } else {
         whosTurn = 'X'; //otherwise place 'X'
    }
}
alert('Let play some Tic-Tacky-Toe! '+whosTurn+' TEAM, PLACE YOUR MARK!')
/////// the 'put' function //////////////////////
put = function(){
  if ($(this).is(':empty')){ //if square is empty. 'this' allows for only 1 element in square
    $(this).text(whosTurn); // call whosTurn() on 'square'
  if (whosTurn ==='X'){ // if 'X'
    this.style.backgroundColor = "green"; //assign color green
  } else {
    //whosTurn = 'O'; // otherwise if 'O' assign red
    this.style.backgroundColor = "red";
    }
  }
  changeTurn(); //call changeTurn()
}
////////////the 'changeColor' function //////////////////////
changeColor = function(){ // creates function changeColor

}
square.on('click', put);// call 'put' function on click per square
square.on('click', changeColor); // call 'changeColor' on click per square
// resetGame() makes each square empty and removes attribute style
resetGame = function (){
  square.empty();
  square.removeAttr("style");
  alert(whosTurn+' Team, You are up');
}
// long form for id '#reset'
$('#reset').click(function() {
    resetGame();
});
//////////////////////////////////////////////////////////

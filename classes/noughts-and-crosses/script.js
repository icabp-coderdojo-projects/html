// use to track if placing an X or an O next
let placeX = true;

// function to add X or O to our grid square
function squareClicked(square) {
  if (square.innerText != "") {
    return;  // square is already used so do nothing
  }

  if (placeX) {
    square.innerText = "X";  // takes our empty <div></div> and makes it <div>X</div>
  } else {
    square.innerText = "0";
  }
  // placeX = not placeX (not true = false)
  placeX = !placeX;
}

// select elements in DOM using javascript
// first row
let square1 = document.getElementById("1");  // this is why we have id set in the html
let square2 = document.getElementById("2");
let square3 = document.getElementById("3");

// second row
let square4 = document.getElementById("4");
let square5 = document.getElementById("5");
let square6 = document.getElementById("6");

// third row
let square7 = document.getElementById("7");
let square8 = document.getElementById("8");
let square9 = document.getElementById("9");

// add onclick handlers to each square
// first row
square1.onclick = () => squareClicked(square1);  // what happens if no "() => " before squareClicked?
square2.onclick = () => squareClicked(square2);
square3.onclick = () => squareClicked(square3);
// second row
square4.onclick = () => squareClicked(square4);
square5.onclick = () => squareClicked(square5);
square6.onclick = () => squareClicked(square6);
// third row
square7.onclick = () => squareClicked(square7);
square8.onclick = () => squareClicked(square8);
square9.onclick = () => squareClicked(square9);

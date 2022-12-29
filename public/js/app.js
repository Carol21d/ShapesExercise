document.getElementById("hideElementTriangle").onclick = function () {
  document.getElementById("hideElementTriangle").style.visibility = "hidden";
};

document.getElementById("hideElementSquare").onclick = function () {
  document.getElementById("hideElementSquare").style.visibility = "hidden";
};

document.getElementById("hideElementCircle").onclick = function () {
  document.getElementById("hideElementCircle").style.visibility = "hidden";
};

const elemenTriangle = document.querySelector('.figures-triangle');
const elemenSquare = document.querySelector('.figures-square');
const elemenCircle = document.querySelector('.figures-circle');

function showAllFigures() {
 showTriangle()
 showSquare()
 showCircle()
}


function showTriangle() {
    if (elemenTriangle.style.visibility === 'hidden') {
      elemenTriangle.style.visibility = 'visible';
     
    } else {
      elemenTriangle.style.visibility = 'hidden';
     
    }
  }

function showSquare() {
    if (elemenSquare.style.visibility === 'hidden') {
      elemenSquare.style.visibility = 'visible';
     
    } else {
      elemenSquare.style.visibility = 'hidden';
     
    }
  }


  function showCircle() {
    if (elemenCircle.style.visibility === 'hidden') {
      elemenCircle.style.visibility = 'visible';
     
    } else {
      elemenCircle.style.visibility = 'hidden';
     
    }
  }




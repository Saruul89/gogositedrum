// const button = document.getElementById("alertButton");
// button.addEventListener("keydown", printKey);

// function printKey(event) {
//   console.log("Event key = ", event.key);
// }

// const title = document.getElementById("title");
// title.addEventListener("mouseenter", mouseHover);
// title.addEventListener("mouseout", mouseOut);

// function mouseHover() {
//   console.log("mouseHover");
// }
// function mouseOut() {
//   console.log("mouseOut");
// }

// function print(event) {
//   if (event.key == "a") {
//     console.log("a useg darsan bn");
//   }
// }

const buttom = document.getElementById("drumW");
buttom.addEventListener("click", playAudio);
const drumW = new Audio("./tom-1.mp3");
function playAudio() {
  drumW.cloneNode().play();
}
const buttom2 = document.getElementById("drumA");
buttom2.addEventListener("click", playAudio2);
const drumA = new Audio("./tom-2.mp3");
function playAudio2() {
  drumA.play();
}
const buttom3 = document.getElementById("drumS");
buttom3.addEventListener("click", playAudio3);
const drumS = new Audio("./tom-3.mp3");
function playAudio3() {
  drumS.play();
}
const buttom4 = document.getElementById("drumD");
buttom4.addEventListener("click", playAudio4);
const drumD = new Audio("./tom-4.mp3");
function playAudio4() {
  drumD.play();
}
const buttom5 = document.getElementById("drumJ");
buttom5.addEventListener("click", playAudio5);
const drumJ = new Audio("./kick-bass.mp3");
function playAudio5() {
  drumJ.play();
}
const buttom6 = document.getElementById("drumK");
buttom6.addEventListener("click", playAudio6);
const drumK = new Audio("./snare.mp3");
function playAudio6() {
  drumK.play();
}
const buttom7 = document.getElementById("drumL");
buttom7.addEventListener("click", playAudio7);
const drumL = new Audio("./crash.mp3");
function playAudio7() {
  drumL.play();
}

window.addEventListener("keydown", function printKey(event) {
  if (event.key == "w") {
    drumW.cloneNode().play();
  } else if (event.key == "a") {
    drumA.cloneNode().play();
  } else if (event.key == "s") {
    drumS.cloneNode().play();
  } else if (event.key == "d") {
    drumD.cloneNode().play();
  } else if (event.key == "j") {
    drumJ.cloneNode().play();
  } else if (event.key == "k") {
    drumK.cloneNode().play();
  } else if (event.key == "l") {
    drumL.cloneNode().play();
  }
});

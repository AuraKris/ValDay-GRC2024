"use strict";

const titleElement = document.querySelector(".title");
const subtitleElement = document.querySelector(".subtitle");
const buttonsContainer = document.querySelector(".buttons");
const imgContainer = document.querySelector(".img-box");
const imgContainer2 = document.querySelector(".img-box2");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const itButton = document.querySelector(".btn--itin");
const nextButton = document.querySelector(".btn--nxt2");
const allImg = document.querySelector(".all-img");
const hidImg = document.querySelector(".hid-img");
const hidImg2 = document.querySelector(".hid-img2");
var audio = new Audio('Memes_MeRingtone_Toothless Dance Meme Song.mp3');

const MAX_IMAGES = 8;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES-1){
      removeNoButton();
    }
    else if (noCount === MAX_IMAGES) {
      
      play = false;
    }
  }
});

if (nextButton){
  nextButton.addEventListener("click", handleNextClick);
}

function handleNextClick() {
  titleElement.innerHTML = "What's Next?";
  imgContainer.classList.add("hidden");
  imgContainer2.classList.add("show");
  nextButton.innerHTML = "Continue";
}

function handleYesClick() {
  titleElement.innerHTML = "Yeaaaaaaayyy!!";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  hidImg.style.display = "block";
  hidImg2.style.display = "block";
  subtitleElement.innerHTML = "I love you soooooooo much babyyy❤️❤️❤️❤️❤️❤️❤️❤️"
  audio.play();
  itButton.style.display = "inline-block";
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.4;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function removeNoButton() {
  noButton.classList.add("hidden");
}


function generateMessage(noCount) {
  const messages = [
    "No",
    "Heeeeee?",
    "Pretty pleaseeeee",
    "Why you do dis to meeeee",
    "You're breaking my heart",
    "Why you so evilll...",
    "I'm gonna cry...",
    "That's it... no more choices",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  allImg.src = `img/image-${image}.jpg`;
}

function updateNoButtonText() {
  titleElement.innerHTML = generateMessage(noCount);
  var i = Math.floor(Math.random()*500)+1;
  var j = Math.floor(Math.random()*500)+1;
  noButton.style.left = i+"px";
  noButton.style.top = j+"px";
}

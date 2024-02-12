"use strict";

const titleElement = document.querySelector(".title");
const subtitleElement = document.querySelector(".subtitle");
const buttonsContainer = document.querySelector(".buttons");
const imgContainer = document.querySelector(".img-box");
const imgContainer2 = document.querySelector(".img-box2");
const itButton = document.querySelector(".btn--itin");
const nextButton = document.querySelector(".btn--next")
const allImg = document.querySelector(".all-img");


nextButton.addEventListener("click", handleNextClick);

function handleNextClick() {
  titleElement.innerHTML = "What's Next?";
  imgContainer.classList.add("hidden");
  imgContainer2.classList.add("show");
  nextButton.innerHTML = "Continue";
}

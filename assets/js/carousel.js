const carousel = document.getElementById("carousel");
const carouselItems = document.querySelector(".carousel-items-list");
const carouselSlides = document.getElementsByClassName("carousel-slide");
const carouselButtons = Array.from(
  document.getElementsByClassName("carousel-button")
);
const buttonsContainer = document.querySelector(".carousel-buttons");

const slideWidth = carouselSlides[0].getBoundingClientRect().width;

Array.from(carouselButtons).forEach((element) => {
  if (element.classList.contains("current-slide")) {
    // Remove the class 'bg-grayish'
    element.classList.remove("bg-grayish");
    // Add the class 'new-class-name'
    element.classList.add("bg-black");
  }
});

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

Array.from(carouselSlides).forEach(setSlidePosition);

// move slides right

const moveToSlide = (carouselItems, currentSlide, targetSlide) => {
  carouselItems.style.transform = "translateX(-" + targetSlide.style.left + ")";
  // change current slide class
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const moveSlidesRight = () => {
  const currentSlide = carouselItems.querySelector(".current-slide");
  let nextSlide = currentSlide.nextElementSibling;
  const currentButton = buttonsContainer.querySelector(".current-slide");
  const nextButton = currentButton.nextElementSibling;

  moveToSlide(carouselItems, currentSlide, nextSlide);

  updateButtons(currentButton, nextButton);
};

const updateButtons = (currentButton, targetButton) => {
  // change current slide class
  currentButton.classList.remove("current-slide");
  targetButton.classList.add("current-slide");
  currentButton.classList.remove("bg-black");
  currentButton.classList.add("bg-grayish");
  targetButton.classList.remove("bg-grayish");
  targetButton.classList.add("bg-black");
};



// add functionality for the buttons
buttonsContainer.addEventListener("click", (e) => {
  //what indicator was clicked on
  const target = e.target.closest("button");

  if (!target) return;

  const currentSlide = carouselItems.querySelector(".current-slide");
  const currentButton = buttonsContainer.querySelector(".current-slide");
  const targetIndex = carouselButtons.findIndex((dot) => dot === target);
  const targetSlide = carouselSlides[targetIndex];
  const targetButton = carouselButtons[targetIndex];

  moveToSlide(carouselItems, currentSlide, targetSlide);
  updateButtons(currentButton, targetButton);
});

let intervalID = setInterval(moveSlidesRight, 6000);

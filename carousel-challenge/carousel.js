// STEP 1: Select all slides and store them in the variable <slides>.
//
// HINT: Select the the HTML elements with the class <slide>.
const slides = document.querySelectorAll(".slide");
// Loop through slides and set each slides translateX.
//
// NOTE: This sets each slide’s translateX property to be 0 percent, 100 percent,
// 200 percent, and 300 percent — making the last three slides overflow horizontally
// to the right of the carousel slider container.
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// STEP 2: Select next slide button into the variable <nextSlideButton>.
//
// HINT: Select the button with the relevant class.
const nextSlideButton = document.querySelector(".btn-next")
// Current slide counter.
let curSlide = 0;

// STEP 3: Calculate the maximum index of slides.
//
// HINT: The index starts at 0, so the maximum slide index will be total number
// of slides - 1.
const maxIndex = slides.length - 1;

// Add event listener and navigation functionality
nextSlideButton.addEventListener("click", function () {
    // STEP 4: Check if current slide is the last slide. If yes, reset to the first slide,
    // else go to the next slide.
    if (curSlide == maxIndex) {
        curSlide = 0;
    }else {
        curSlide ++;
    }
    // STEP 5: Loop through the slides and move each slide by -100% by using
    // `translateX(${100 * (indx - curSlide)}%)`.
    //
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
    // NOTE: If curSlide is incremented by 1 everytime we click the next button, 
    // `translateX(${100 * (indx - curSlide)}%)` decrements each slide's index by -1.
});
// Select previous slide button.
const prevSlideButton = document.querySelector(".btn-prev");

// STEP 6: Add event listener and navigation functionality.
//
// HINT: Use the code you wrote to add the functionality to the next slide button. 

prevSlideButton.addEventListener("click", function () {
    // STEP 4: Check if current slide is the last slide. If yes, reset to the first slide,
    // else go to the next slide.
    if (curSlide <= 0) {
        curSlide = maxIndex;
    }else {
        curSlide --;
    }
    // STEP 5: Loop through the slides and move each slide by -100% by using
    // `translateX(${100 * (indx - curSlide)}%)`.
    //
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
    // NOTE: If curSlide is incremented by 1 everytime we click the next button, 
    // `translateX(${100 * (indx - curSlide)}%)` decrements each slide's index by -1.
});
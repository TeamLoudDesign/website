const slidesContainer = document.querySelector(".carosel-track");
const slide = document.querySelector(".project-item");
const prevButton = document.querySelector(".carosel-back");
const nextButton = document.querySelector(".carosel-forward");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
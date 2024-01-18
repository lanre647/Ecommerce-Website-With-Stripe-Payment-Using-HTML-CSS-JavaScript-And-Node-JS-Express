let ratingStarInput = [...document.querySelectorAll(".rating-star")];

ratingStarInput.map((star, index) => {
  star.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      if (i <= index) {
        ratingStarInput[i].src = "assets/fill star.png";
      } else {
        ratingStarInput[i].src = "assets/no fill star.png";
      }
    }
  });
});

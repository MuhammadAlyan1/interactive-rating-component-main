let oneBtn = document.querySelector("#oneBtn");
let twoBtn = document.querySelector("#twoBtn");
let threeBtn = document.querySelector("#threeBtn");
let fourBtn = document.querySelector("#fourBtn");
let fiveBtn = document.querySelector("#fiveBtn");
let submit = document.querySelector("#submit");
let ratingButtons = [oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn];
let userRating;
let userRatingSpan = document.querySelector("#user-rating");

let ratingCard = document.querySelector(".rating-card");
let thankyouCard = document.querySelector(".thankyou-card");

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", (element) => {
    userRating = element.target.innerText;
    element.target.classList.add("btnSelect");

    for (let btn of ratingButtons) {
      if (btn == element.target) {
        continue;
      } else {
        btn.classList.remove("btnSelect");
      }
    }
  });
});

submit.addEventListener("click", (element) => {
  if (userRating === undefined) {
    return;
  } else {
    userRatingSpan.innerText = userRating;
    ratingCard.classList.add("displayNone");
    thankyouCard.classList.remove("displayNone");
  }
});

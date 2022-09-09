const cityButton = document.querySelector(".header_city");

const popup = document.querySelector(".popup");

const popupCross = document.querySelector(".popup_close");

cityButton.addEventListener("click", function () {
  popup.classList.add("open");
});

popupCross.addEventListener("click", function () {
  popup.classList.remove("open");
});

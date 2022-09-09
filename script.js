const catigories = document.querySelectorAll(".catigories span");

const forMen = catigories[0];

const forWomen = catigories[1];

const forKids = catigories[2];

const сatigories = document.querySelector(".header_down_products");

const buttonCat = document.querySelector(".forman");

const fieldsSwim = document.querySelectorAll(".field_swim");

const ratings = document.querySelectorAll(".rating");

const burgMenu = document.querySelector(".burger");

forMen.addEventListener("click", function () {
  forMen.classList.toggle("underline");
  forWomen.classList.remove("underline");
  forKids.classList.remove("underline");
  сatigories.classList.toggle("active");
  сatigories.classList.toggle("for_men");
});

forWomen.addEventListener("click", function () {
  forMen.classList.remove("underline");
  forWomen.classList.toggle("underline");
  forKids.classList.remove("underline");
  сatigories.classList.toggle("active");
  сatigories.classList.toggle("for_women");
});

forKids.addEventListener("click", function () {
  forMen.classList.remove("underline");
  forWomen.classList.remove("underline");
  forKids.classList.toggle("underline");
  сatigories.classList.toggle("active");
  сatigories.classList.toggle("for_kids");
});

let pointer = 0;

buttonCat.addEventListener("click", function (event) {
  if (event.target.closest(".cat_button")) {
    let cursorover = event.target.getAttribute("cursorover");
    showObject(cursorover);
  }
});

function showObject(a) {
  for (i = 0; i < fieldsSwim.length; i++) {
    let fieldSwim = fieldsSwim[i];
    let fs = fieldSwim.getAttribute("objectswim");
    if (fs == a) {
      fieldSwim.classList.add("active");
    } else {
      fieldSwim.classList.remove("active");
    }
    fieldSwim.addEventListener("click", function (event) {
      if (event.target.closest(".closed_field_swim")) {
        fieldSwim.classList.remove("active");
      }
    });
  }
}

// rating

if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;
  for (let i = 0; i < ratings.length; i++) {
    let rating = ratings[i];
    initRating(rating);
  }

  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains("rating_set")) {
      setRating(rating);
    }
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating_active");
    ratingValue = rating.querySelector(".rating_value");
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll(".rating-item");
    for (let i = 0; i < ratingItems.length; i++) {
      const ratingItem = ratingItems[i];
      ratingItem.addEventListener("mouseenter", function (e) {
        initRatingVars(rating);

        setRatingActiveWidth(ratingItem.value);
      });

      ratingItem.addEventListener("mouseleave", function (e) {
        setRatingActiveWidth();
      });
    }
  }
}

// Слайдер для товаров

const windowInnerWidth = document.documentElement.clientWidth;

console.log(windowInnerWidth);

if (windowInnerWidth < 450) {
  $(document).ready(function () {
    $(".products-slider__slide").slick({
      dots: true,
      slidesToShow: 1,
    });
  });

  $(document).ready(function () {
    $(".footer_stile h2").click(function (event) {
      if ($(".footer_up").hasClass("one")) {
        $(".footer_stile h2").not($(this)).removeClass("active");
        $(".footer_stile h2").not($(this)).next().slideUp("active");
      }
      $(this).toggleClass("active").next().slideToggle(300).display("flex");
    });
  });
}

if (windowInnerWidth > 450 && windowInnerWidth < 1000) {
  $(document).ready(function () {
    $(".products-slider__slide").slick({
      dots: true,
      slidesToShow: 2,
    });
  });

  $(document).ready(function () {
    $(".footer_stile h2").click(function (event) {
      if ($(".footer_up").hasClass("one")) {
        $(".footer_stile h2").not($(this)).removeClass("active");
        $(".footer_stile h2").not($(this)).next().slideUp("active");
      }
      $(this).toggleClass("active").next().slideToggle(300).display("flex");
    });
  });
}

if (windowInnerWidth < 1500 && windowInnerWidth > 1000) {
  $(document).ready(function () {
    $(".products-slider__slide").slick({
      dots: true,
      slidesToShow: 3,
    });
  });
}

if (windowInnerWidth > 1500) {
  $(document).ready(function () {
    $(".products-slider__slide").slick({
      dots: true,
      slidesToShow: 4,
    });
  });
}

$(document).ready(function () {
  $(".photo-slider__slide").slick({
    dots: true,
    slidesToShow: 1,
  });
});

burgMenu.addEventListener("click", function () {
  const burgButs = burgMenu.querySelectorAll(".burger_button");
  for (let i = 0; i < burgButs.length; i++) {
    burgBut = burgButs[i];
    burgBut.classList.toggle("push_button");
  }
  const menu_active = document.querySelector(".header");
  menu_active.classList.toggle("see");
});

//

const exit = document.querySelector(".exit");

exit.addEventListener("click", function () {
  сatigories.classList.remove("active");
});

const top_buton = document.querySelector(".arrow_up");

const head = document.querySelector(".cat");

top_buton.addEventListener("click", top_scrolling);

function top_scrolling() {
  head.scrollIntoView({ block: "start", behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  if (window.pageYOffset != 0) {
    top_buton.classList.add("active");
  }

  if (window.pageYOffset == 0) {
    top_buton.classList.remove("active");
  }
});

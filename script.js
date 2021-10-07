let btn = document.getElementsByClassName("carousel-btn");
let slide = document.getElementById("slide");

btn[0].addEventListener("click", function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
});

btn[1].addEventListener("click", function () {
  slide.style.transform = "translateX(-100vw)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
});

btn[2].addEventListener("click", function () {
  slide.style.transform = "translateX(-200vw)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
});

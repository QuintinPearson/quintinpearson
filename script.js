let btn = document.getElementsByClassName("carousel-btn");
let slide = document.getElementById("slide");

btn[0].addEventListener("click", function () {
  slide.style.transform = "translateX(0px)";
});

btn[1].addEventListener("click", function () {
  slide.style.transform = "translateX(-1150px)";
});

btn[2].addEventListener("click", function () {
  slide.style.transform = "translateX(-2300px)";
});

console.log(btn);

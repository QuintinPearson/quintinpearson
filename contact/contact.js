// current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// ----------------------
// Form spree contact form
// ----------------------

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.classList.add("success");
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

// ----------------------
// Smooth Scrolling animation for safari
// ----------------------

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (!href.startsWith("#")) {
      window.open(href);
    }

    // Close the mobile nav
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

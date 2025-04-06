console.log("✅JS Linked");

// Back to top button functionality
const backToTopButton = document.querySelector("button");
backToTopButton.id = "back-to-top";

// Show button when user scrolls down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//! or maybe I need to be something for background music

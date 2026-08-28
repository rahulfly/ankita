const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert(
    "Thank you for reaching out. This form will be connected to email later."
  );
});

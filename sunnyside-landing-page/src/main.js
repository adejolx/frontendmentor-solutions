const navToggleButton = document.querySelector(".nav__toggle");
const navPane = document.querySelector(".nav__container");
const navList = document.querySelector(".nav__menu");

navToggleButton.addEventListener("click", displayNavigation);

Array.from(navList.children).forEach((element) => {
  element.addEventListener("click", displayNavigation);
});

function displayNavigation() {
  navPane.classList.toggle("display");
  toggleAttributeValue(navToggleButton, "aria-expanded");
}

function toggleAttributeValue(element, attribute) {
  if (element.hasAttribute(attribute)) {
    if (element.getAttribute(attribute) === "false") {
      element.setAttribute(attribute, "true");
    } else {
      element.setAttribute(attribute, "false");
    }
  }
}

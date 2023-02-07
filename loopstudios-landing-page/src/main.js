let activeElementBeforeMenu;
const closeMenuButton = document.querySelector('.close-menu-button'),
  openMenuButton = document.querySelector('.open-menu-button'),
  sliderPane = document.querySelector('.slider-pane'),
  focusableElementsString = 'a[href], button:not([disabled]), [tabindex="0"]';
let focusableElements = sliderPane.querySelectorAll(focusableElementsString);

focusableElements = Array.from(focusableElements);
const firstTabStop = focusableElements[0],
  lastTabStop = focusableElements[focusableElements.length - 1];

openMenuButton.addEventListener('click', openSliderMenu, false);
closeMenuButton.addEventListener('click', closeSliderMenu, false);

// check if the position of slider menu is fixed, if true, enable tab trapping
if (getComputedStyle(sliderPane).getPropertyValue('position') === 'fixed') {
  window.addEventListener('keyup', closeMenuOnEscape, false);
  sliderPane.addEventListener('keydown', trapTabKey, false);
}

focusableElements.forEach((focusableElement) => {
  focusableElement.addEventListener('click', () => {
    sliderPane.classList.remove('open-state');
    openMenuButton.setAttribute('aria-expanded', false);
  });
});

function trapTabKey(e) {
  if (e.key === 'Tab' && !e.shiftKey) {
    if (document.activeElement === lastTabStop) {
      e.preventDefault();
      firstTabStop.focus();
    }
  }
  if (e.key && e.shiftKey) {
    if (document.activeElement === firstTabStop) {
      e.preventDefault();
      lastTabStop.focus();
    }
  }
}

function closeMenuOnEscape(e) {
  if (e.key === 'Escape') {
    closeSliderMenu();
  }
}

function openSliderMenu() {
  activeElementBeforeMenu = document.activeElement;
  sliderPane.classList.add('open-state', 'visible');
  openMenuButton.setAttribute('aria-expanded', true);
  setTimeout(function () {
    closeMenuButton.focus();
  }, 1);
}

function closeSliderMenu() {
  sliderPane.classList.remove('open-state');
  openMenuButton.setAttribute('aria-expanded', false);
  setTimeout(function () {
    activeElementBeforeMenu.focus();
  }, 1);
  setTimeout(function () {
    sliderPane.classList.remove('visible');
  }, 501);
}

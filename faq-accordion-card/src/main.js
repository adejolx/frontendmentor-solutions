const widgets = document.querySelectorAll('details');

const toggleHandler = (event) => {
  if (event.target.hasAttribute('open') === true) {
    for (let widget of widgets) {
      if (widget !== event.target) widget.removeAttribute('open');
    }
  }
};

document.addEventListener('toggle', toggleHandler, true);

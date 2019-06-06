const initEventHandlers = () => {
  for (elem of document.querySelectorAll('.nav a')) {
    elem.onclick = scrollToAnchor;
  }
}

const scrollToAnchor = (ev) => {
    const distanceToTop = (el) => {
        return Math.floor(el.getBoundingClientRect().top);
      };
        var targetID = ev.target.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
        window.scrollBy({ top: distanceToTop(targetAnchor), left: 0, behavior:
          'smooth'});
        ev.preventDefault();
    }

initEventHandlers();

const initEventHandlers = () => {
  for (elem of document.querySelectorAll('.nav a')) {
    elem.onclick = scrollToAnchor;
  }

  document.querySelector('#backToTop').onclick = scrollToTop;
}

const scrollToAnchor = (ev) => {
    const distanceToTop = (el) => {
        return Math.floor(el.getBoundingClientRect().top);
      };
        var targetID = ev.target.getAttribute('href');
        console.log(targetID);
        const targetAnchor = document.querySelector(targetID);
        window.scrollBy({ top: distanceToTop(targetAnchor), left: 0, behavior:
          'smooth'});
        ev.preventDefault();
    }

const scrollToTop = (ev) => {
    const distanceToTop = (el) => {
        return Math.floor(el.getBoundingClientRect().top);
      };
        var targetID = ev.target.getAttribute('href');
        console.log(targetID);
        const targetAnchor = document.querySelector(targetID);
        window.scrollBy({ top: distanceToTop(targetAnchor), left: 0, behavior:
          'smooth'});
        console.log(distanceToTop(targetAnchor));
        ev.preventDefault();
    }


// $(document).ready(function() {
//     $("#backToTop").click(function(event) {
//         event.preventDefault();
//         $("html, body").animate({ scrollTop: 0 }, "smooth");
//         return false;
//     });
//
// });


initEventHandlers();

/* BlueClip marketing site — vanilla JS, no dependencies */

(function () {
  "use strict";

  /* Sticky nav: subtle shadow once we scroll past the hero top */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    nav.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Fade-up reveal on scroll */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  targets.forEach(function (el) { observer.observe(el); });
})();

/* Hero screenshot rotation — ~3s hold + 0.8s cross-fade.
   Skipped entirely under prefers-reduced-motion (first screenshot stays). */
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var rotator = document.querySelector(".hero-rotator");
  if (!rotator) return;
  var shots = rotator.querySelectorAll("img");
  if (shots.length < 2) return;
  var i = 0;
  setInterval(function () {
    shots[i].classList.remove("active");
    i = (i + 1) % shots.length;
    shots[i].classList.add("active");
  }, 3800);
})();

export const parallax = () => {
  let parallax = document.querySelector(".parallax");
  let Parallax = require("parallax-js");
  new Parallax(parallax, {
    relativeInput: true,
    selector: ".layer",
  });
};

export const headerAnimation = () => {
  let header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.remove("transparent");
      header.classList.add("white");
    } else {
      header.classList.remove("white");
      header.classList.add("transparent");
    }
  });
};

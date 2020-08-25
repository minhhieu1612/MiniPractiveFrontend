var prevScrollPos = window.pageYOffset;
window.onscroll = function (event) {
  // hide/show navbar
  var currentScrollPos = window.pageYOffset;
  console.log(event);

  if (prevScrollPos < currentScrollPos) {
    document.querySelector(".header").style.top = "-70px";
  } else {
    document.querySelector(".header").style.top = "0px";
  }
  prevScrollPos = currentScrollPos;

  // shrink navbar

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelectorAll(".nav-link").forEach(function (item) {
      item.style.fontSize = "1.15em";
    });
    document.querySelector(".navbar-toggler").style.padding = "0.5em";
  } else {
    document.querySelectorAll(".nav-link").forEach(function (item) {
      item.style.fontSize = "1.5em";
    });
    document.querySelector(".navbar-toggler").style.padding = "1em 0.5em";
  }
};

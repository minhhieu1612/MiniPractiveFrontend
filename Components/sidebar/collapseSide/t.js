window.onclick = function (event) {
  var $ = document.querySelector.bind(document);
  if (event.target.classList.contains("openbtn")) {
    $(".main").style.marginLeft = "200px";
    $(".sidenav").style.width = "200px";
  } else {
    $(".main").style.marginLeft = "0px";
    $(".sidenav").style.width = "0px";
  }
};

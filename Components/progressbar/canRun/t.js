var $ = document.querySelector.bind(document);
$("#run").onclick = function (event) {
  var ele = $('[data-target="#run"');
  var width = 10;
  var frame = function () {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      ele.style.width = width + "%";
      ele.innerHTML = width + "%";
    }
  };
  var interval = setInterval(frame, 30);
};

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var collapses = $$('[data-toggle="collapse"]');
collapses.forEach(function (item) {
  item.addEventListener("click", function (event) {
    collapses.forEach(function (item) {
      item.classList.remove("active");
      item.nextElementSibling.style.height = null;
    });

    var target = event.target;
    target.classList.add("active");
    var content = target.nextElementSibling;
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + "px";
    }
  });
});

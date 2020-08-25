var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var collapses = $$('[data-toggle="collapse"]').forEach(function (item) {
  item.addEventListener("click", function (event) {
    var target = event.target;
    target.classList.toggle("active");
    var content = target.nextElementSibling;
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + "px";
    }
  });
});

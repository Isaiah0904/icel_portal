var selectField = document.getElementById("selectField")
var selectText = document.getElementById("selectText")
var options = document.getElementsByClassName("options")
var list = document.getElementById("list")
var arrowIcon = document.getElementById("arrowIcon")

selectField.onclick = function () {
  list.classList.toggle("hide")
  arrowIcon.classList.toggle("rotate")
}

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent 
    list.classList.toggle("hide")
    arrowIcon.classList.toggle("rotate")
  }
  $("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });
}
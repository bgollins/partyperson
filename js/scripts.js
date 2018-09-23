$(document).ready(function() {
  $("#questions form").submit(function(event) {
    var dishwasher = parseInt($("#dishwasher").val());
    var food = parseInt($("#food").val());
    var outfit = parseInt($("#outfit").val());
    var drink = parseInt($("#drink").val());
    var space = parseInt($("#space").val());
    var total = dishwasher + food + outfit + drink + space;

  $("form").fadeOut("", function() {
  });

    if (total < 16) {
      $('#netflix').show();
    } else if (total >= 16 && total < 31) {
      $('#potluck').show();
    } else if (total >= 31 && total < 66) {
      $('#bbq').show();
    } else {
      $('#cocktail').show();
    }

    event.preventDefault();
  });
});

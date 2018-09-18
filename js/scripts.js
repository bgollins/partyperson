$(document).ready(function() {
  $("form").submit(function(event) {
    var dishwasher = parseInt($(#dishwasher)).val());
    var food = parseInt($(#food)).val());
    var outfit = parseInt($(#outfit)).val());
    var drink = parseInt($(#drink)).val());
    var space = parseInt($(#space)).val());
    var total = dishwasher + food + outfit + drink + space;

  event.preventDefault();
  });
});

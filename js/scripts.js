$(document).ready(function() {
  $("#questions form").submit(function(event) {
    var dishwasher = parseInt($("#dishwasher").val());
    var food = parseInt($("#food").val());
    var outfit = parseInt($("#outfit").val());
    var drink = parseInt($("#drink").val());
    var space = parseInt($("#space").val());
    var total = dishwasher + food + outfit + drink + space;

    if (total <16) {
      $('#netflix').show();
    } else if (total >=16 && <31){
      $('#potluck').show();
    } else if (total >=30 && <66){
      $('#bbq').show();
    } else if (total >=65){
      $('#cocktail').show();
    }

    event.preventDefault();
  });
});

var countBy = function(countByNumber, endNumber) {

  var count = countByNumber;
  var countArray = [];

  while(count <= endNumber) {
    countArray.push(count);
    count = count + countByNumber;
  }

  return countArray;
}

$(document).ready(function() {
  $("form#countby").submit(function(event) {
    var countByNumber = parseInt($("input#countbynumber").val());
    var endNumber = parseInt($("input#endnumber").val());

    $(".countstring").text(countBy(countByNumber,endNumber));
    $("#result").show();
    event.preventDefault();
  })

});

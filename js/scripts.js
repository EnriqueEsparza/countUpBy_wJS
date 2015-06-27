var countUpBy = function(small_number, big_number) {
    var count = []
    if (small_number === 0){
      count = null
    }else{
    for(var i = small_number; i <= big_number; i += small_number) {
      count.push(i);
    }}
    return count;
};

$(document).ready(function(){
  $("form#countUpBy").submit(function(event){
    var small_number = parseInt($("input#small_number").val());
    var big_number = parseInt($("input#big_number").val());
    var result = countUpBy(small_number, big_number);

    $(".result").text(result);
    $("#result").show();
    event.preventDefault();
  });

});

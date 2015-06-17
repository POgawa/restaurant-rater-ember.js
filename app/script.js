function updateCountdown() {
  var remaining = 140 - $('input#description').val().length;
  $('span#counter').text(remaining + ' characters remaining.');
}


$(function(){
  updateCountdown();
  $('input#description').change(updateCountdown);
  $('input#description').keyup(updateCountdown);

});

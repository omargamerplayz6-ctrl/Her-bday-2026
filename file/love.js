$.fn.typewriter = function() {
  var $spans = this.find('.say');
  var i = 0;
  var timer = setInterval(function() {
    if (i < $spans.length) {
      $spans.eq(i).fadeIn(500);
      i++;
    } else {
      clearInterval(timer);
    }
  }, 2000);
};

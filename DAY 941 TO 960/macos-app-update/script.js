$(document).ready(function() {

  $('.update').hide();
  setTimeout(function() {
    $('.update').fadeIn();
  }, 2000);

  $(".update").click(function() {
    if ($(this).hasClass('refresh')) {
      $(this).fadeOut(0, function() {
        setTimeout(() => {
          $(this).removeClass('refresh').fadeIn();
        }, 2000);
      });
    } else {
      $(this).addClass('progress');
      setTimeout(() => {
        $(this).removeClass('progress').addClass('refresh');
      }, 4000);
    }
  });
});
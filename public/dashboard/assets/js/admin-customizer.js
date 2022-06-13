// RTl & Ltr
$('<ul class="custom-theme"><li class="demo-li"><a href="../front-end/index.html" target="_blank">Front end</a></li><li class="btn-rtl">RTL</li><li class="btn-dark-setting">Dark</li></ul>').appendTo($('body'));
(function () {
})();
//live customizer js
$(document).ready(function () {

  $('.btn-rtl').on('click', function () {
    $("html").attr("dir", "");
    $(this).toggleClass('rtl');
    if ($('.btn-rtl').hasClass('rtl')) {
      $('.btn-rtl').text('LTR');
      $('body').addClass('rtl');
      $("html").attr("dir", "rtl");
    } else {
      $('.btn-rtl').text('RTL');
      $('body').removeClass('rtl');
      $("html").attr("dir", "");
    }
  });
  var body_event = $("body");
  body_event.on("click", ".btn-dark-setting", function () {
    $(this).toggleClass('dark');
    $('body').removeClass('dark');
    if ($('.btn-dark-setting').hasClass('dark')) {
      $('.btn-dark-setting').text('Light');
      $('body').addClass('dark');
    } else {
      $('#theme-dark').remove();
      $('.btn-dark-setting').text('Dark');
    }

    return false;
  });
});

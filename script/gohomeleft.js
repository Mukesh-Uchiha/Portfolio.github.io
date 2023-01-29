$(document).ready(function () {
  $(".goHome").click(function (e) {
    $(".movePages").css("transform", "translateX(0)");
    $(".goHome").css("transform", "translateX(200vh)");
  });
  $(function () {
    $("a").click(function (evt) {
      var link = $(this).attr("href");
      setTimeout(function () {
        window.location.href = link;
      }, 500);
    });
  });
});

$(document).ready(function () {
  $(window).load(function () {
    function move() {
      $("#copied").css("margin-right", "-100px");
    }
    $("#primary").click(function () {
      $("#copied").css("margin-right", "100px");
      $("#copied").css("text-align", "center");
      window.setTimeout(move, 3000);
    });
    $("#secondary").click(function () {
      $("#copied").css("margin-right", "100px");
      $("#copied").css("text-align", "center");
      window.setTimeout(move, 3000);
    });
  });

  $(".card").mouseenter(function (e) {
    (x = e.pageX - $(this).offset().left),
      (y = e.pageY - $(this).offset().top),
      $(this).find("span").css({ top: y, left: x });
  });
  $(".card").mouseout(function (e) {
    (x = e.pageX - $(this).offset().left),
      (y = e.pageY - $(this).offset().top),
      $(this).find("span").css({ top: y, left: x });
  });
});
function popup1() {
  navigator.clipboard.writeText("mailtomukesh@gmail.com");
}

function popup2() {
  navigator.clipboard.writeText("mukesh.it20@bitsathy.ac.in");
}

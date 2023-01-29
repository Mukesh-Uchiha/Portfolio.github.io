$(document).ready(function () {
  $(window).load(function () {
    $("#button").click(function (e) {
      $("#button").css("background", "#00b50f");
      $("#button").css("color", "#1d1d1d");
      $("#button").css("border-color", "#1d1d1d");
      $("#button").css("letter-spacing", "0");
      $("#button").html('Downloaded  <i class="fa-solid fa-check"></i>');
    });
    function move() {
      $("#button").css("background", "#1d1d1d");
      $("#button").css("color", "#00adb5");
      $("#button").css("border-color", "#00adb5");
      $("#button").css("letter-spacing", "0");
      $("#button").html(' Download Resume <i class="fa-solid fa-download">');
    }
    window.setTimeout(move, 5000);
  });
});

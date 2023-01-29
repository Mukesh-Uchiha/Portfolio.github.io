$(document).ready(function () {
  $(window).load(function () {
    function move() {
      $("#Myname").css("margin", "-208px 0px 0px -690px");
    }
    function slideDown() {
      $("#table").css("opacity", "1");

      $("#about-me").css("opacity", "1");
    }
    window.setTimeout(slideDown, 6000);
    window.setTimeout(move, 5000); // 5 seconds
  });
});

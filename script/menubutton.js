$(document).ready(function () {
  var id = 1;
  console.log(id);
  $(".aboutme").hover(
    function () {
      $(".aboutme-span").css("display", "block");
      $(".aboutme").css("width", "200px");
      $(".aboutme").addClass("move");
      $(".textIn").fadeIn();
      $("#Circle").css("transform", "rotateZ(130deg)");
    },
    function () {
      $(".aboutme-span").css("display", "none");
      $(".aboutme").css("width", "60px");
      $(".aboutme").removeClass("move");
    }
  );

  $(".skill").hover(
    function () {
      $(".skill-span").css("display", "block");
      $(".skill").css("width", "200px");
      $(".skill").addClass("move");
      $("#Circle").css("transform", "rotateZ(90deg)");
    },
    function () {
      $(".skill-span").css("display", "none");
      $(".skill").css("width", "60px");
      $(".skill").removeClass("move");
    }
  );

  $(".project").hover(
    function () {
      $(".project-span").css("display", "block");
      $(".project").css("width", "200px");
      $(".project").addClass("move");
      $("#Circle").css("transform", "rotateZ(45deg)");
    },
    function () {
      $(".project-span").css("display", "none");
      $(".project").css("width", "60px");
      $(".project").removeClass("move");
    }
  );

  $(".resume").hover(
    function () {
      $(".resume-span").css("display", "block");
      $(".resume").css("width", "200px");
      $(".resume").addClass("move");
      $("#Circle").css("transform", "rotateZ(230deg)");
    },
    function () {
      $(".resume-span").css("display", "none");
      $(".resume").css("width", "60px");
      $(".resume").removeClass("move");
    }
  );

  $(".social").hover(
    function () {
      $(".social-span").css("display", "block");
      $(".social").css("width", "200px");
      $(".social").addClass("move");
      $("#Circle").css("transform", "rotateZ(270deg)");
    },
    function () {
      $(".social-span").css("display", "none");
      $(".social").css("width", "60px");
      $(".social").removeClass("move");
    }
  );

  $(".contactme").hover(
    function () {
      $(".contactme-span").css("display", "block");
      $(".contactme").css("width", "200px");
      $(".contactme").addClass("move");
      $("#Circle").css("transform", "rotateZ(315deg)");
    },
    function () {
      $(".contactme-span").css("display", "none");
      $(".contactme").css("width", "60px");
      $(".contactme").removeClass("move");
    }
  );
});

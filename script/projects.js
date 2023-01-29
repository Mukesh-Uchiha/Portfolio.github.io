$(document).ready(function () {
  $("#ORVB").hover(function (e) {
    $("#Title").html("Onroad Vehicle Breakdown Webapp");
    $("#Description").html(
      "This is a Web Application that helps when the vehicle <br> is out-of-fuel or it broke-down. <br />The User can request for fuel or services. <br />The location of the user with vechile register number <br />to a common deliver-person or mechanical shop from them <br />to talk the order"
    );
    $("#keyword").html(
      " <span>HTML</span> <span>CSS</span> <span>JAVASCRIPT</span> <span>Fire-Base</span>"
    );
    $("#vid").html(
      '<source id="mp4vid" src="videos/orba.mp4" type="video/mp4" />'
    );
    $("#vid")[0].load();
    $("#vid")[0].play();
  });

  $("#VRC").hover(function (e) {
    $("#Title").html("Voice Recognition Chatbot");
    $("#Description").html(
      "This is a Web ChatBot that can response <br> to the user input. The input can be <br /> by text or speech <br />"
    );
    $("#keyword").html(
      " <span>CSS</span> <span>JAVASCRIPT</span> <span>JAVASCRIPT</span>"
    );
    $("#vid").html(
      '<source id="mp4vid" src="videos/chatbox.mp4" type="video/mp4" />'
    );
    $("#vid")[0].load();
    $("#vid")[0].play();
  });

  $("#MGJ").hover(function (e) {
    $("#Title").html("Memory game javascript");
    $("#Description").html(
      "This is a simple memory game <br> simon says games with color <br /> matching challenges<br />"
    );
    $("#keyword").html(
      " <span>HTML</span> <span>CSS</span> <span>JAVASCRIPT</span>"
    );
    $("#vid").html(
      '<source id="mp4vid" src="videos/memory.mp4" type="video/mp4" />'
    );
    $("#vid")[0].load();
    $("#vid")[0].play();
    e.preventDefault();
  });

  $("#SMS").hover(function (e) {
    $("#Title").html("Student Management System");
    $("#Description").html(
      "It is a student management website <br> for teacher to manage student details and <br /> Marks, add or remove students from the database ect. <br />"
    );
    $("#keyword").html(
      " <span>HTML</span> <span>CSS</span> <span>JAVASCRIPT</span> <span>JSP</span> <span>MYSQL</span>"
    );
    $("#vid").html(
      '<source id="mp4vid" src="videos/students.mp4" type="video/mp4" />'
    );
    $("#vid")[0].load();
    $("#vid")[0].play();
  });
});

let clip = document.querySelector(".vid");

clip.addEventListener("mouseover", function (e) {
  clip.pause();
});

clip.addEventListener("mouseout", function (e) {
  clip.play();
});

function sendMail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "Mukesh N",
    Password: "qwertymukesh",
    To: "mailtomukeshn@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br>Phone No :" +
      document.getElementById("phone").value +
      "<br>     " +
      document.getElementById("message").value,
  }).then((message) => alert("Email has been successfully sent"));
}

var loader = document.getElementById("preloader");

window.addEventListener(
  "load",
  setTimeout(function () {
    loader.style.display = "none";
  }, 5000)
);

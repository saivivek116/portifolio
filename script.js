document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("nav a");

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        var targetSection = document.querySelector(hash);

        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  }
});

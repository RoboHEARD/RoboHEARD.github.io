(function () {
  "use strict";

  function setActiveNav() {
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll("#mainNav .nav-link");
    var currentId = "";

    sections.forEach(function (section) {
      if (scrollY >= section.offsetTop - 120) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentId) {
        link.classList.add("active");
      }
    });
  }

  document.querySelectorAll('a.js-scroll-trigger[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var targetId = this.getAttribute("href");
      if (targetId === "#") return;
      var target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        var top = targetId === "#top" || targetId === "#page-top" ? 0 : target.offsetTop - 62;
        window.scrollTo({ top: top, behavior: "smooth" });
        var collapse = document.getElementById("navbarResponsive");
        if (collapse && collapse.classList.contains("show")) {
          new bootstrap.Collapse(collapse).hide();
        }
      }
    });
  });

  window.addEventListener("scroll", setActiveNav, { passive: true });
  window.addEventListener("load", setActiveNav);
  setActiveNav();
})();

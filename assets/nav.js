(function () {
  var header = document.getElementById("site-header");
  if (!header) {
    return;
  }

  var page = header.dataset.page || "about";
  var prefix = header.dataset.rootPrefix || "";

  var links = [
    { id: "about", href: prefix + "index.html", label: "关于我" },
    { id: "certificates", href: prefix + "certificates/index.html", label: "课程证书" },
    { id: "resume", href: prefix + "certificates/resume.pdf", label: "简历", external: true }
  ];

  var navLinks = links
    .map(function (link) {
      var isActive = link.id === page;
      var className = isActive ? " class=\"active\"" : "";
      var current = isActive ? " aria-current=\"page\"" : "";
      var target = link.external ? " target=\"_blank\" rel=\"noopener noreferrer\"" : "";
      return "<a" + className + " href=\"" + link.href + "\"" + current + target + ">" + link.label + "</a>";
    })
    .join("");

  header.innerHTML =
    "<div class=\"topbar-inner\">" +
    "<a class=\"site-name\" href=\"" + prefix + "index.html\">Asc Ho</a>" +
    "<nav class=\"nav\" aria-label=\"Main Navigation\">" +
    navLinks +
    "</nav>" +
    "</div>";
})();

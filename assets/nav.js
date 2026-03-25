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
    { id: "resume", href: prefix + "resume/resume.pdf", label: "简历", external: true }
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
    "<a class=\"site-name\" href=\"" + prefix + "index.html\" aria-label=\"返回首页\">" +
    "<svg class=\"site-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">" +
    "<path d=\"M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z\"/>" +
    "</svg>" +
    "<span>Asc Ho</span>" +
    "</a>" +
    "<nav class=\"nav\" aria-label=\"Main Navigation\">" +
    navLinks +
    "</nav>" +
    "</div>";
})();

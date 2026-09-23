const menuItems = [
  ["index.html", "Domů"],
  ["EPIC_rules_CZ.pdf", "Pravidla (PDF)"],
  ["faq.html", "FAQ"],
  ["contact_form.html", "Kontakt"]
];

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navigation = document.createElement("nav");
navigation.className = "site-nav";
navigation.setAttribute("aria-label", "Hlavní navigace");

menuItems.forEach(([href, label]) => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = label;
  if (href === currentPage) {
    link.setAttribute("aria-current", "page");
  }
  if (href.endsWith(".pdf")) {
    link.target = "_blank";
    link.rel = "noopener";
  }
  navigation.append(link);
});

document.querySelector(".title-image").after(navigation);

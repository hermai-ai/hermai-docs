// Mintlify currently maps zh-Hant to the China flag in the locale switcher.
// Hide all locale flag assets globally until Mintlify exposes a proper override.
(() => {
  if (typeof document === "undefined") return;
  if (document.getElementById("hermai-hide-language-flags")) return;

  const style = document.createElement("style");
  style.id = "hermai-hide-language-flags";
  style.textContent = `
    img[src*="/flags/"],
    img[src*="cloudfront.net/flags/"] {
      display: none !important;
    }
  `;

  document.head.appendChild(style);
})();

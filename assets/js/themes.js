const toggle = document.getElementById("theme-toggle");
const body = document.body;

/* ===== Sistem tema algılama (EK) ===== */
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

if (toggle) {
  const savedTheme = localStorage.getItem("theme");

  /* ===== Öncelik sırası =====
     1. Kullanıcı tercihi (localStorage)
     2. Sistem teması
  ============================ */

  if (savedTheme === "dark") {
    body.classList.add("theme-dark");
    toggle.textContent = "☀️";
  } else if (!savedTheme && systemPrefersDark.matches) {
    body.classList.add("theme-dark");
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }

  /* ===== Manuel tema değişimi (SENİN KODUN) ===== */
  toggle.addEventListener("click", () => {
    body.classList.toggle("theme-dark");

    const isDark = body.classList.contains("theme-dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggle.textContent = isDark ? "☀️" : "🌙";
  });
}

/* ===== Sistem teması değişirse (manuel seçim yoksa) ===== */
systemPrefersDark.addEventListener("change", (e) => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return; // kullanıcı override ettiyse dokunma

  if (e.matches) {
    body.classList.add("theme-dark");
    toggle && (toggle.textContent = "☀️");
  } else {
    body.classList.remove("theme-dark");
    toggle && (toggle.textContent = "🌙");
  }
});

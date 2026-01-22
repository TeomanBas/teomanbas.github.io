document.querySelectorAll("div[class^='language-']").forEach(wrapper => {
  const langClass = Array.from(wrapper.classList)
    .find(c => c.startsWith("language-"));

  if (!langClass) return;

  const lang = langClass.replace("language-", "");
  const pre = wrapper.querySelector("pre");

  if (!pre) return;

  // terminal header için data-lang ekle
  pre.setAttribute("data-lang", lang);
});

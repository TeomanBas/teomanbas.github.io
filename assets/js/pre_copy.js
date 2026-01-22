document.querySelectorAll("pre").forEach((block) => {
  const button = document.createElement("button");
  button.className = "copy-btn";
  button.type = "button";
  button.setAttribute("aria-label", "Kodu kopyala");

  // Clipboard icon (SVG)
  button.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>
  `;

  block.appendChild(button);

  button.addEventListener("click", () => {
    const code = block.querySelector("code");
    if (!code) return;

    navigator.clipboard.writeText(code.innerText).then(() => {
      button.classList.add("copied");

      // Check icon
      button.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.485 1.929a.75.75 0 0 1 .086 1.056l-7.25
                   9a.75.75 0 0 1-1.08.08L2.43
                   9.14a.75.75 0 1 1 1.06-1.06l2.13
                   2.13 6.72-8.28a.75.75 0 0 1
                   1.056-.086z"/>
        </svg>
      `;

      setTimeout(() => {
        button.classList.remove("copied");

        // Back to clipboard icon
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>
        `;
      }, 1400);
    });
  });
});

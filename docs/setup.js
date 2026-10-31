"use strict";

(() => {
  const message = document.getElementById("setup-message");
  const setupLink = document.getElementById("setup-link");
  const copyButton = document.getElementById("copy-message");
  const copyStatus = document.getElementById("copy-status");
  const openStatus = document.getElementById("open-status");
  const prompt = message.value.trim();

  // Official Codex link format: prefill a composer; never submit automatically.
  setupLink.href = "codex://new?prompt=" + encodeURIComponent(prompt);
  setupLink.addEventListener("click", () => {
    openStatus.textContent = "In Codex, press Send to begin. If the app didn't open, use the copy option below.";
  });

  copyButton.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard not available");
      }
      await navigator.clipboard.writeText(prompt);
      copyStatus.textContent = "Copied. Paste it into a new local Codex chat, then press Send.";
    } catch {
      message.focus();
      message.select();
      copyStatus.textContent = "Copy wasn't available. The message is selected; copy it, then paste it into Codex.";
    }
  });
})();

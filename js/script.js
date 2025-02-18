document.addEventListener("DOMContentLoaded", () => {
  const paletteContainer = document.getElementById("palette");
  const generateBtn = document.getElementById("generate-btn");

  function generatePalette() {
    paletteContainer.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      let color = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
      let colorBox = document.createElement("div");
      colorBox.classList.add("color-box");
      colorBox.style.background = color;
      colorBox.innerText = color;
      colorBox.addEventListener("click", () => copyToClipboard(color));
      paletteContainer.appendChild(colorBox);
    }
  }

  function copyToClipboard(color) {
    navigator.clipboard.writeText(color).then(() => {
      alert(`Copiado: ${color}`);
    });
  }

  generateBtn.addEventListener("click", generatePalette);

  generatePalette();
});

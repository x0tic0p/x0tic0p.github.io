document.addEventListener("DOMContentLoaded", function () {
    const gradientBox = document.getElementById("gradientBox");
    const generateButton = document.getElementById("generateButton");
    const color1Hex = document.getElementById("color1Hex");
    const color1Rgb = document.getElementById("color1Rgb");
    const color2Hex = document.getElementById("color2Hex");
    const color2Rgb = document.getElementById("color2Rgb");
    function generateRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function updateGradient() {
        const color1 = generateRandomColor();
        const color2 = generateRandomColor();
        gradientBox.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
        color1Hex.textContent = color1;
        color1Rgb.textContent = hexToRgb(color1);
        color2Hex.textContent = color2;
        color2Rgb.textContent = hexToRgb(color2);
        lineargradient.textContent = `linear-gradient(to right,${color1}, ${color2})`;
    }
    function hexToRgb(hex) {
        const bigint = parseInt(hex.substring(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `RGB(${r}, ${g}, ${b})`;
    }
    generateButton.addEventListener("click", updateGradient);
    updateGradient();
});

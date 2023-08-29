document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("weather-form");
const inputArea = document.getElementById("input-area");
const areaError = document.getElementById("area-error");
const weatherFrame = document.getElementById("weather-frame");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const area = inputArea.value.trim();

        if (!area) {
            areaError.textContent = "Please enter an area";
            weatherFrame.src = "";
        } else {
            areaError.textContent = "";
            const formattedArea = area.replace(/\s+/g, '%20'); // Replace spaces with %20
            const linksrc = "https://wttr.in/" + formattedArea;
            weatherFrame.src = linksrc;
        }
    });
});

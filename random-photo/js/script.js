const apiURL = "https://random.imagecdn.app/1920/1080";
const randomImageContainer = document.getElementById("random-image");
const generateButton = document.getElementById("generate-button");
function getimg() {
    fetch(apiURL)
        .then(response => response.blob())
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            randomImageContainer.src = imageUrl;
        })
        .catch(error => {
            console.error("Error fetching image:", error);
        });
}

// Event listener for the "Generate Random Image" button
generateButton.addEventListener("click", getimg);

// Generate a random image when the page loads
getimg();

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    const slokaContainer = document.getElementById("slokaContainer");
    const chapterShlokas = {
        1: 47,
        2: 72,
        3: 43,
        4: 42,
        5: 29,
        6: 47,
        7: 30,
        8: 28,
        9: 34,
        10: 42,
        11: 55,
        12: 20,
        13: 35,
        14: 27,
        15: 20,
        16: 24,
        17: 28,
        18: 78
    };

    submitButton.addEventListener("click", function () {
        const chapterInput = parseInt(document.getElementById("chapterInput").value);
        const shlokaInput = parseInt(document.getElementById("shlokaInput").value);

        if (chapterInput in chapterShlokas) {
            const maxVerse = chapterShlokas[chapterInput];
            
            if (shlokaInput >= 1 && shlokaInput <= maxVerse) {
                const apiUrl = `https://bhagavadgitaapi.in/slok/${chapterInput}/${shlokaInput}/`;

                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        const chapter = data.chapter;
                        const verse = data.verse;
                        const sloka = data.slok;
                        const transliteration = data.transliteration;
                        const author = data.tej.author;
                        const ht = data.tej.ht;

                        const slokaHtml = `
                            <p><strong>अध्याय ${chapter}, श्लोक ${verse}:</strong></p>
                            <p><b>${sloka}</b></p>
                            <p><b>Transliteration: ${transliteration}</b></p>
                            <p><b>Hindi: ${ht}</b></p>
                        `;

                        slokaContainer.innerHTML = slokaHtml;
                    })
                    .catch(error => {
                        console.error("Error fetching data:", error);
                        slokaContainer.innerHTML = "<p>Error fetching sloka. Please try again.</p>";
                    });
            } else {
                window.alert(`Invalid shloka number for Chapter ${chapterInput}. Please enter a shloka number between 1 and ${maxVerse}.`);
            }
        } else {
            window.alert("Invalid chapter number. Please enter a valid chapter number.");
        }
    });
});

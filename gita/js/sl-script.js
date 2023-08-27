const chapterInput = document.getElementById('chapterInput');
        const shlokaInput = document.getElementById('shlokaInput');
        const submitButton = document.getElementById('submitButton');
        const slokaFrame = document.getElementById('slokaFrame');

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
        

        submitButton.addEventListener('click', () => {
            const chapter = chapterInput.value;
            const shloka = shlokaInput.value;
            
            if (!chapter || !shloka) {
                alert('Please enter valid chapter and shloka numbers.');
                return;
            }

            const chapterShlokaCount = chapterShlokas[chapter];
            if (!chapterShlokaCount) {
                alert('Invalid chapter number.');
                return;
            }

            if (shloka > chapterShlokaCount || shloka <= 0) {
                alert(`Please enter a valid shloka number between 1 and ${chapterShlokaCount}.`);
                return;
            }

            const url = `https://bhagavadgitaapi.in/slok/${chapter}/${shloka}/gita.svg`;
            slokaFrame.src = url;
        });
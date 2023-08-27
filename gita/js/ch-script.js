const apiUrl = 'https://bhagavadgitaapi.in/chapters/';
        
        const fetchChapterButton = document.getElementById('fetchChapter');
        const chapterContainer = document.getElementById('chapter-container');

        fetchChapterButton.addEventListener('click', fetchChapter);

        function fetchChapter() {
            const chapterNumberInput = document.getElementById('chapterNumber');
            const selectedChapterNumber = chapterNumberInput.value;

            fetch(apiUrl)
                .then(response => response.json())
                .then(chapters => {
                    const selectedChapter = chapters.find(chapter => chapter.chapter_number === parseInt(selectedChapterNumber));

                    if (selectedChapter) {
                        displayChapter(selectedChapter);
                    } else {
                        alert('Chapter not found. Please enter a valid chapter number between 1 and 18.');
                    }
                })
                .catch(error => {
                    console.error('Error fetching chapters:', error);
                });
        }

        function displayChapter(chapter) {
            const chapterDiv = document.createElement('div');
            chapterDiv.classList.add('chapter');
        
            const chapterNumber = document.createElement('h2');
            chapterNumber.textContent = `Chapter ${chapter.chapter_number}`;
        
            const chapterName = document.createElement('h3');
            chapterName.textContent = chapter.name;
        
            const chapterTranslation = document.createElement('p');
            chapterTranslation.textContent = `Translation: ${chapter.translation}`;
        
            const chapterMeaning = document.createElement('p');
            chapterMeaning.textContent = `Meaning: ${chapter.meaning.en}`;
        
            const chapterHindiMeaning = document.createElement('p');
            chapterHindiMeaning.textContent = `Hindi Meaning: ${chapter.meaning.hi}`;
        
            const chapterSummary = document.createElement('p');
            chapterSummary.textContent = `Summary: ${chapter.summary.en}`;
        
            const chapterHindiSummary = document.createElement('p');
            chapterHindiSummary.textContent = `Hindi Summary: ${chapter.summary.hi}`;
        
            chapterDiv.appendChild(chapterNumber);
            chapterDiv.appendChild(chapterName);
            chapterDiv.appendChild(chapterTranslation);
            chapterDiv.appendChild(chapterMeaning);
            chapterDiv.appendChild(chapterHindiMeaning);
            chapterDiv.appendChild(chapterSummary);
            chapterDiv.appendChild(chapterHindiSummary);
        
            chapterContainer.innerHTML = ''; // Clear previous chapter
            chapterContainer.appendChild(chapterDiv);
        }
        
        
        
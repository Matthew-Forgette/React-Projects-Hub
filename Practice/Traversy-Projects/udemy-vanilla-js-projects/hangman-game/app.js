/* GLOBAL VARIABLES */
const words = [
    "hammocks",
    "transitorily",
    "casuals",
    "veer",
    "perpetuates",
    "contralto",
    "coronets",
    "rheostatic",
    "shikars",
    "degausses",
    "vulcanisate",
    "modulation",
    "janisaries",
    "declarative",
    "cordwainers",
    "pulmotor",
    "cornicing",
    "yumminesses",
    "reoperating",
    "multiethnics",
    "nonaromatic",
    "retirement",
    "culverin",
    "dugong",
    "boomeranged",
    "rubbishes",
    "mischarge",
    "parotic",
    "internalizes",
    "maidenly",
    "nosegay",
    "monogamous",
    "shortbread",
    "honoring",
    "asafetidas",
    "pumiced",
    "patination",
    "mice",
    "socialised",
    "rollouts",
    "reexpels",
    "canonizers",
    "aether",
    "down",
    "accruals",
    "bimetallists",
    "parakite",
    "avalanches",
    "napkins",
    "assortative",
    "unattuned",
    "toothier",
    "amnesiacs",
    "mateyness",
    "cardsharp",
    "reconnaissance",
    "unedited",
    "partans",
    "cumbersomeness",
    "oilbirds",
    "coasting",
    "restitching",
    "retied",
    "catachrestic",
    "swearword",
    "reams",
    "laminitis",
    "musky",
    "checkrooms",
    "spruce",
    "scamped",
    "carburetor",
    "rejoicer",
    "birled",
    "sandpile",
    "bellyaches",
    "foreground",
    "sacker",
    "hagiological",
    "shibahs",
    "morphallaxis",
    "deluders",
    "azonal",
    "chromophil",
    "jinni",
    "conscript",
    "morae",
    "chromaffin",
    "commanderies",
    "unchristened",
    "insaner",
    "puberal",
    "wiggier",
    "montage",
    "antisocially",
    "zippered",
    "milkless",
    "ilea",
    "fluorinating",
    "reexportations"
]


const wrongLettersEl = document.getElementById('wrong-letters');
const wordEl = document.getElementById('word');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const figureParts = document.querySelectorAll('.figure-part');

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];



// ----------------------------------- --------------------------------------


/* FUNCTIONS */

// Show hidden word
function displayWord() {
    wordEl.innerHTML = 
    `
        ${selectedWord
            .split('')
            .map(letter => 
                `<span class='letter'>
                    ${correctLetters.includes(letter) ? letter : ''}
                    </span>`)
            .join('')
        }
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You Won!';
        popup.style.display = 'flex';
    }
    
}

// update the wrong letters
function updateWrongLettersEl() {
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    // display parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    // check if lost
    if (wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'You Lost You Pepega! Go Agane!!';
        popup.style.display = 'flex';
    }
}

// show notification
function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show')
    }, 2000);
}



// ----------------------------------- --------------------------------------


/* EVENT LISTENERS */

// letter input listener
window.addEventListener('keydown', (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);

                displayWord();
            } else {
                showNotification();
            }
        } else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLettersEl();
            } else {
                showNotification();
            }
        }
    }
})

// restart game and play again
playAgainBtn.addEventListener('click', () => {
    // empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLettersEl();

    popup.style.display = 'none';
})

// ----------------------------------- --------------------------------------


/* FUNCTION INVOCATIONS */

displayWord()


// ----------------------------------- --------------------------------------


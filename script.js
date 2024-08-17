// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomNumber(1, 20);
let maxTries = 3;  // Maximum number of attempts
let guessedCorrectly = false;  // Flag to track if the user guessed correctly

function makeGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const result = document.getElementById('result');

    let guess = parseInt(guessInput.value, 10);

    if (isNaN(guess)) {
        feedback.innerHTML = "Please enter a valid number.";
        return;
    }

    maxTries--;

    if (guess > randomNumber) {
        feedback.innerHTML = "Tinggi sngt tu, nk pergi mana tinggi2 !!.";
    } else if (guess < randomNumber) {
        feedback.innerHTML = "Rendahnya, diri tu dh la rendah lepastu teka nmbr rendh pulak!.";
    } else {
        feedback.innerHTML = "TAHNIAHH HG BERJAYA TEKA HANYA " + (3 - maxTries) + " PERCUBAAN !!.";
        guessedCorrectly = true;
        result.innerHTML = "Congrats !! You've unlocked the secret message:<br>" +
                            "DAHLA BUSUK, KETOT PULAK TU HAHAHHAHAHA NASIB COMEL<br>" +
                            "HAHHAAHAHA tkdela mana ada secret massage pun<br>" +
                            "Aku saja nk test simple web game yg aku baru belajar buat<br>" +
                            "Thanks do sebab luangkan masa mencuba HAHHAHAHH :)";
        guessInput.disabled = true;
        return;
    }

    if (maxTries > 0) {
        feedback.innerHTML += "<br>Cuba lagi.hg ada lagi " + maxTries + " peluang.";
    } else {
        feedback.innerHTML += "<br>NI PELUANG TERAKHIR, TEKA BETUL2.";
        guessInput.disabled = true;
        result.innerHTML = "Nombor yang sebenar adalah " + randomNumber + ".<br>" +
                            "LEMAHH!! senang ja nk teka nya tu pun tk dpt. WERK";
    }
}

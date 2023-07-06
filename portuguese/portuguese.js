//Click Flag Redict Page English
const OPENUS = document.querySelector(".us");
OPENUS.addEventListener("click", englishPage);
    function englishPage() {
        location.href = "../english/english.html";
    }
//END - Click Button Redict Page English
//Loop Developer
const typing = document.querySelector("#textdeveloper");

const messages = ["Matheus L. Marchetti, desenvolvedor."];

let messageIndex = 0;
let characterIndex = 0;
let currentMessage = "";
let currentCharacters = "";

const type = () => {
    if (messageIndex === messages.length) {
        messageIndex = 0
    }

    currentMessage = messages[messageIndex]
    currentCharacters = currentMessage.slice(0, characterIndex++)
    typing.textContent = currentCharacters

    if (currentCharacters.length === currentMessage.length) {
        messageIndex;
    }
}

setInterval(type, 200)
//END - Loop Developer
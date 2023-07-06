//Click Flag Redict Page Portuguese
const OPPTBR = document.querySelector(".br");
OPPTBR.addEventListener("click", portuguesePage);
    function portuguesePage() {
        location.href = "../portuguese/portuguese.html";
    }
//END - Click Button Redict Page Portuguese
//Loop Developer
const typing = document.querySelector("#textdeveloper");

const messages = ["Matheus L. Marchetti, developer."];

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
const typing = document.querySelector("#textwelcome");

const messages = ["Welcome to Marchetti Codes", "Bem-vindo ao Marchetti Codes"];

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
        messageIndex++
        characterIndex = 0
    }
}

setInterval(type, 200)

//

function changeTextptbr() {
    document.querySelector("#textpEnUS").innerHTML = "Escolha seu idioma.";
    document.querySelector("#buttonportuguesetext").innerHTML = "Português (Brasil)";
    document.querySelector("#buttonenglishtext").innerHTML = "Inglês (EUA)";
    document.querySelector("#footertext").innerHTML = "Desenvolvido por Matheus L. Marchetti";
}
function changeTextenus() {
    document.querySelector("#textpEnUS").innerHTML = "Choose your language.";
    document.querySelector("#buttonportuguesetext").innerHTML = "Portuguese (Brazil)";
    document.querySelector("#buttonenglishtext").innerHTML = "English (USA)";
    document.querySelector("#footertext").innerHTML = "Developed by Matheus L. Marchetti";
}

const BTNPTBR = document.querySelector("#buttonportuguese");
BTNPTBR.addEventListener("click", portuguesePage);
    function portuguesePage() {
        location.href = "portuguese/portuguese.html";
    }
const BTNENUS = document.querySelector("#buttonenglish");
BTNENUS.addEventListener("click", englishPage);
    function englishPage() {
        location.href = "english/english.html";
    }
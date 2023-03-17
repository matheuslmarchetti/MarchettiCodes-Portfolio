function changeTextptbr() {
    document.querySelector("#textH1EnUS").innerHTML = "Escolha seu idioma.";
    document.querySelector("#buttonportuguesetext").innerHTML = "Português (Brasil)";
    document.querySelector("#buttonenglishtext").innerHTML = "Inglês (EUA)";
    document.querySelector("#footertext").innerHTML = "Desenvolvido por Matheus L. Marchetti";
}
function changeTextenus() {
    document.querySelector("#textH1EnUS").innerHTML = "Choose your language.";
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
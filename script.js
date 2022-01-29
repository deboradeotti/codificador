var input = document.querySelector("input");
var result = "";

function showResult() {
    document.querySelector("div.result-text").innerHTML = "<p>" + result + "</p>";
    input.value = "";
}

const encryptBtn = document.querySelector("button.encrypt");
encryptBtn.addEventListener("click", function encrypt() {

    var text = input.value;
    result = text 

    if (text.includes("a") == true) {
        result = result.replace("a", "ai");
    } 
    if (text.includes("e") == true) {
        result = result.replace("e", "enter");
    } 
    if (text.includes("i") == true) {
        result = result.replace("i", "imes");
    } 
    if (text.includes("o") == true) {
        result = result.replace("o", "ober");
    } 
    if (text.includes("u") == true) {
        result = result.replace("u", "ufat");
    }

    showResult();
});

const decryptBtn = document.querySelector("button.decrypt");
decryptBtn.addEventListener("click", function decrypt() {

    var text = input.value;
    result = text 

    if (text.includes("ai") == true) {
        result = result.replace("ai", "a");
    } 
    if (text.includes("enter") == true) {
        result = result.replace("enter", "e");
    } 
    if (text.includes("imes") == true) {
        result = result.replace("imes", "i");
    } 
    if (text.includes("ober") == true) {
        result = result.replace("ober", "o");
    } 
    if (text.includes("ufat") == true) {
        result = result.replace("ufat", "u");
    }
    
    showResult();
});

const copyBtn = document.querySelector("button.copy");
copyBtn.addEventListener("click", function copy() {
    showResult();
});
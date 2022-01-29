var input = document.querySelector("input");
var result = "";

function showResult() {
    document.querySelector("div.result-text-container").innerHTML = "<p class='result-text'>" + result + "</p>";
    input.value = "";
}

const encryptBtn = document.querySelector("button.encrypt");
encryptBtn.addEventListener("click", function encrypt() {

    var text = input.value;
    result = text 

    if (text.includes("a") == true) {
        result = result.replace(/a/g, "ai");
    } 
    if (text.includes("e") == true) {
        result = result.replace(/e/g, "enter");
    } 
    if (text.includes("i") == true) {
        result = result.replace(/i/g, "imes");
    } 
    if (text.includes("o") == true) {
        result = result.replace(/o/g, "ober");
    } 
    if (text.includes("u") == true) {
        result = result.replace(/u/g, "ufat");
    }

    showResult();
});

const decryptBtn = document.querySelector("button.decrypt");
decryptBtn.addEventListener("click", function decrypt() {

    var text = input.value;
    result = text 

    if (text.includes("ai") == true) {
        result = result.replace(/ai/g, "a");
    } 
    if (text.includes("enter") == true) {
        result = result.replace(/enter/g, "e");
    } 
    if (text.includes("imes") == true) {
        result = result.replace(/imes/g, "i");
    } 
    if (text.includes("ober") == true) {
        result = result.replace(/ober/g, "o");
    } 
    if (text.includes("ufat") == true) {
        result = result.replace(/ufat/g, "u");
    }
    
    showResult();
});

const copyBtn = document.querySelector("button.copy");
copyBtn.addEventListener("click", function copy() {

    var copyText = document.querySelector("p.result-text").innerHTML;

    navigator.clipboard.writeText(copyText)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
    
});
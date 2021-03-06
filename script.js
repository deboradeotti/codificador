var input = document.querySelector("input");
var result = "";

function showResult() {
    document.querySelector("div.output__default").classList.remove("active");
    document.querySelector("div.output__result").classList.add("active");
    document.querySelector("div.result__text-container").innerHTML = "<p class='result__text'>" + result + "</p>";
    input.value = "";
}

const encryptBtn = document.querySelector("button.entry__buttons--encrypt");
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

const decryptBtn = document.querySelector("button.entry__buttons--decrypt");
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

const copyBtn = document.querySelector("button.result__text-container--button");
copyBtn.addEventListener("click", function copy() {

    var copyText = document.querySelector("p.result__text").innerHTML;

    navigator.clipboard.writeText(copyText)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
    
});
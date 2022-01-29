function showResult() {
    var input = document.querySelector("input");
    document.querySelector("div.result-text").innerHTML = "<p>" + input.value + "</p>";
    input.value = "";
}

const encryptBtn = document.querySelector("button.encrypt");
encryptBtn.addEventListener("click", function encrypt() {
    showResult();
});

const decryptBtn = document.querySelector("button.decrypt");
decryptBtn.addEventListener("click", function decrypt() {
    showResult();
});

const copyBtn = document.querySelector("button.copy");
copyBtn.addEventListener("click", function copy() {
    showResult();
});
document.querySelector("#helloButton").addEventListener("click", () => {
  document.querySelector("#message").textContent =
    "こんにちは、" + document.querySelector("#nameInput").value + "さん！";
});

//こっちでもOK
/*
Vdocument.querySelector("#helloButton").addEventListener("click", () => {
  document.querySelector("#message").textContent =
    document.querySelector("#nameInput").value;
});
*/
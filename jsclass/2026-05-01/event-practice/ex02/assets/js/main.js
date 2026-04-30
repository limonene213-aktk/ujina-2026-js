document.querySelector("#redButton").addEventListener("click", () => {
  document.querySelector("#message").classList.add("red");
});

document.querySelector("#blueButton").addEventListener("click", () => {
  document.querySelector("#message").classList.add("blue");
});

document.querySelector("#greenButton").addEventListener("click", () => {
  document.querySelector("#message").classList.add("green");
});
document.querySelector("#bigButton").addEventListener("click", () => {
  document.querySelector("#message").classList.add("big");
});

document.querySelector("#smallButton").addEventListener("click", () => {
  document.querySelector("#message").classList.add("small");
});

document.querySelector("#hideButton").addEventListener("click", () => {
  document.querySelector("#message").classList.add("hide");
});

document.querySelector("#showButton").addEventListener("click", () => {
  document.querySelector("#message").classList.remove("hide");
});

document.querySelector("#resetButton").addEventListener("click", () => {
  document.querySelector("#message").classList.remove("big", "small", "hide");
});
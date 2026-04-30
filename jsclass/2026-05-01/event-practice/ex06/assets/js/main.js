document.querySelector("#cuteButton").addEventListener("click", () => {
  document.querySelector("#card").classList.add("cute");
});

document.querySelector("#darkButton").addEventListener("click", () => {
  document.querySelector("#card").classList.add("dark");
});


document.querySelector("#resetButton").addEventListener("click", () => {
  document.querySelector("#card").classList.remove("dark", "cute");
});
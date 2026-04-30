document.querySelector("#textInput").addEventListener("input", () => {
  document.querySelector("#preview").textContent =
    document.querySelector("#textInput").value;
});
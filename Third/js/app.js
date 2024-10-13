button.onclick = () => {
  if (!document.documentElement.classList.contains("dark")) {
    console.log("Hello, world!");
    document.documentElement.classList.add("dark");
  } else document.documentElement.classList.remove("dark");
};

let moonLight = document.getElementById("moon-light");

moonLight.addEventListener("click", () => {
  if (document.body.className != "dark") {
    moonLight.firstElementChild.src = "img/bottom-arrow-dark.svg";
  } else {
    moonLight.firstElementChild.src = "img/bottom-arrow-white.svg";
  }
});

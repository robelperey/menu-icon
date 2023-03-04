const containerEl = document.querySelector(".container");

containerEl.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("container")) {
    target.classList.toggle("change");
  } else {
    target.parentElement.classList.toggle("change");
  }
});

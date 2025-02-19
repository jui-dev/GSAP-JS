const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // whenever the button will be clicked the function will be invoked.
  sidebar.classList.toggle("hide"); // by clicking the button the sidebar will be hide and show.
});

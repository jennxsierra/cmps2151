/* add code after this comment */
document.addEventListener("DOMContentLoaded", () => {
  // Select all <div> elements with the class "panel"
  const panels = document.querySelectorAll(".panel");

  // Add click event listener to each panel
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      // Toggle the "open" class on the clicked panel
      panel.classList.toggle("open");
    });
  });
});

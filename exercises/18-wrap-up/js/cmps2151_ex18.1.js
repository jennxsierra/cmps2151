/* add code after this comment */

// Add a border to the <ul> element with the id "thumb-list"
const thumbList = document.getElementById("thumb-list");
thumbList.style.border = "1px solid #ccc";

// Set the value of the <textarea> to the textContent of the <p> element
const text = document.querySelector("p").textContent;
const textArea = document.querySelector("textarea");
textArea.value = text;

// Add a box shadow to each <img> element within the <ul> element
const images = document.querySelectorAll("#thumb-list img");
images.forEach((img) => {
  img.style.boxShadow = "6px 5px 20px 1px rgba(0,0,0,0.22)";
});

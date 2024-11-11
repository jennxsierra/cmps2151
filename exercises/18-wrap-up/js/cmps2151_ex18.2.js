const photos = JSON.parse(content);

// Select the <section> element with id "parent"
const parentSection = document.getElementById("parent");

// Helper function to create an element with optional text content
function createElement(tag, textContent = "") {
  const element = document.createElement(tag);
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

// Loop through the photos array and create the necessary elements
photos.forEach((photo) => {
  // Create the <figure> element
  const figure = createElement("figure");

  // Create the <img> element and set its attributes
  const img = createElement("img");
  img.src = `images/${photo.filename}`;
  img.alt = photo.title;
  figure.appendChild(img);

  // Create the <figcaption> element
  const figcaption = createElement("figcaption");

  // Create and append the <h2> element
  const h2 = createElement("h2", photo.title);
  figcaption.appendChild(h2);

  // Create and append the <p> element
  const p = createElement("p", photo.description);
  figcaption.appendChild(p);

  // Loop through the colors array and create <span> elements
  photo.colors.forEach((color) => {
    const span = createElement("span");
    span.style.backgroundColor = color.hex;
    figcaption.appendChild(span);
  });

  // Append the <figcaption> to the <figure>
  figure.appendChild(figcaption);

  // Append the <figure> to the parent section
  parentSection.appendChild(figure);
});

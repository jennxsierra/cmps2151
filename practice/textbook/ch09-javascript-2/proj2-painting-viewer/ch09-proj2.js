/* add your code here */

// Runs when the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Parse the JSON file
  const paintings = JSON.parse(content);
  const ul = document.querySelector("#paintings ul");

  // Create the thumbnails for each painting
  for (const painting of paintings) {
    const thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", `./images/small/${painting.id}.jpg`);
    thumbnail.setAttribute("alt", painting.title);

    thumbnail.dataset.id = painting.id;

    ul.appendChild(thumbnail);
  }

  // Create variables for the elements that will be updated
  const figure = document.querySelector("#details figure");
  const description = document.querySelector("#description");
  const title = document.querySelector("#summary #title");
  const artist = document.querySelector("#summary #artist");

  // Add an event listener to the ul element
  // Update the figure element with the selected painting
  ul.addEventListener("click", (event) => {
    if (event.target && event.target.nodeName === "IMG") {
      figure.innerHTML = "";

      // Find the painting that was clicked
      const painting = paintings.find(
        (element) => element.id == event.target.dataset.id
      );

      // Set the title and artist of the painting
      title.textContent = painting.title;
      artist.textContent = "By " + painting.artist;

      // Create and append large image to the figure element
      const largeImg = document.createElement("img");
      largeImg.setAttribute("src", `./images/large/${painting.id}.jpg`);
      largeImg.setAttribute("alt", painting.title);

      figure.appendChild(largeImg);

      // Create and append the features of the painting
      for (const feature of painting.features) {
        const div = document.createElement("div");
        div.classList.add("box");

        // Style the div element
        div.style.position = "absolute";
        div.style.left = `${feature.upperLeft[0]}px`;
        div.style.top = `${feature.upperLeft[1]}px`;
        div.style.width = `${feature.lowerRight[0] - feature.upperLeft[0]}px`;
        div.style.height = `${feature.lowerRight[1] - feature.upperLeft[1]}px`;

        // Add a mouseover event listener to the div element
        div.addEventListener("mouseover", () => {
          description.textContent = feature.description;
        });

        // Add a mouseout event listener to the div element
        div.addEventListener("mouseout", () => {
          description.textContent = "";
        });

        figure.appendChild(div);
      }
    }
  });
});

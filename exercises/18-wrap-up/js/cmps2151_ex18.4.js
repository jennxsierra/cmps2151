document.addEventListener("DOMContentLoaded", function () {
  const figureImg = document.querySelector("#imgManipulated img");
  const figcaption = document.querySelector("#imgManipulated figcaption");
  const thumbnails = document.querySelectorAll("#thumbBox img");
  const sliders = document.querySelectorAll(".sliders");
  const resetButton = document.getElementById("resetFilters");

  // Add dynamic styles for button hover and active states
  const style = document.createElement("style");
  style.textContent = `
      button:hover {
        background-color: #ff9800;
      }
      button:active {
        background-color: #ef6c00;
      }
    `;
  document.head.appendChild(style);

  // Click handler for each thumbnail image
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const newSrc = thumbnail.src.replace("small", "medium");
      figureImg.src = newSrc;
      figcaption.innerHTML = `<em>${thumbnail.alt}</em> <br /> <span>${thumbnail.title}</span>`;
    });
  });

  // Event listener for the input event of each range slider
  sliders.forEach((slider) => {
    slider.addEventListener("input", () => {
      const opacity = document.getElementById("sliderOpacity").value;
      const saturation = document.getElementById("sliderSaturation").value;
      const brightness = document.getElementById("sliderBrightness").value;
      const hue = document.getElementById("sliderHue").value;
      const gray = document.getElementById("sliderGray").value;
      const blur = document.getElementById("sliderBlur").value;

      figureImg.style.filter = `
          opacity(${opacity}%)
          saturate(${saturation}%)
          brightness(${brightness}%)
          hue-rotate(${hue}deg)
          grayscale(${gray}%)
          blur(${blur}px)
        `;

      // Update the span elements with the current values
      document.getElementById("numOpacity").textContent = opacity;
      document.getElementById("numSaturation").textContent = saturation;
      document.getElementById("numBrightness").textContent = brightness;
      document.getElementById("numHue").textContent = hue;
      document.getElementById("numGray").textContent = gray;
      document.getElementById("numBlur").textContent = blur;
    });
  });

  // Click event listener for the reset button
  resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    figureImg.style.filter = "none";

    // Reset the sliders to their default values
    document.getElementById("sliderOpacity").value = 100;
    document.getElementById("sliderSaturation").value = 100;
    document.getElementById("sliderBrightness").value = 100;
    document.getElementById("sliderHue").value = 0;
    document.getElementById("sliderGray").value = 0;
    document.getElementById("sliderBlur").value = 0;

    // Update the span elements with the default values
    document.getElementById("numOpacity").textContent = 100;
    document.getElementById("numSaturation").textContent = 100;
    document.getElementById("numBrightness").textContent = 100;
    document.getElementById("numHue").textContent = 0;
    document.getElementById("numGray").textContent = 0;
    document.getElementById("numBlur").textContent = 0;
  });
});

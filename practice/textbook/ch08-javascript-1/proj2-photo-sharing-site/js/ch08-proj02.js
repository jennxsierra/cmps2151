/* add your code here */
const photos = JSON.parse(content);

const constructStyle = (color) => {
  return `background-color: ${color.hex};${
    color.luminance < 70 ? " color: white;" : ""
  }`;
};

const constructColor = (color) => {
  return `<span style="${constructStyle(color)}">${color.name}</span>`;
};

const outputColors = (colors) => {
  for (let color of colors) {
    document.write(constructColor(color));
  }
};

const outputCard = (photo) => {
  document.write(`
    <article>
      <img src="images/${photo.filename}" alt="${photo.title}">
      <div class="caption">
        <h2>${photo.title}</h2>
        <p>${photo.location.city}, ${photo.location.country}</p>
        <h3>Colors</h3>
`);

  outputColors(photo.colors);

  document.write(`</div></article>`);
};

for (let photo of photos) {
  outputCard(photo);
}

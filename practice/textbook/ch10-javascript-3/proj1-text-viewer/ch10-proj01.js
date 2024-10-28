document.addEventListener("DOMContentLoaded", function () {
  const url =
    "https://www.randyconnolly.com/funwebdev/3rd/api/colors/sample-colors.php";

  const loader = document.getElementById("loader");
  const article = document.querySelector("article");
  const h2 = document.querySelector("h2");
  const fieldset = document.querySelector("fieldset");

  displaySchemeData(); // function test

  async function displaySchemeData() {
    loader.style.display = "block";

    const schemeData = await fetch(url).then((resp) => resp.json());

    loader.style.display = "none";

    schemeData.forEach((c) => {
      createHeader(c);
      createColorBox(c.scheme, c.id);

      return schemeData;
    });

    function createHeader(c) {
      const header = document.createElement("h3");
      article.appendChild(header);
      header.textContent = c.title;
      return header;
    }

    function createColorBox(scheme, id) {
      const section = document.createElement("section");
      section.setAttribute("class", "scheme");
      article.appendChild(section);

      const containerDiv = document.createElement("div");
      containerDiv.style.display = "flex";
      containerDiv.style.alignItems = "center";
      section.appendChild(containerDiv);

      const div = document.createElement("div");
      div.setAttribute("class", "preview");
      containerDiv.appendChild(div);

      const colorBox = scheme;
      colorBox.forEach((b) => {
        const boxDiv = document.createElement("div");
        boxDiv.setAttribute("class", "color-box");
        boxDiv.style.width = "50px";
        boxDiv.style.height = "50px";
        boxDiv.style.marginRight = "10px";
        boxDiv.style.background = b.web;
        div.appendChild(boxDiv);
      });

      const buttonDiv = document.createElement("div");
      buttonDiv.setAttribute("class", "actions");
      buttonDiv.style.marginLeft = "47px";
      containerDiv.appendChild(buttonDiv);

      const button = document.createElement("button");
      button.setAttribute("data-id", id);
      button.textContent = "View";
      buttonDiv.appendChild(button);
    }

    console.log(schemeData);

    // for the right side of the webpage
    article.addEventListener("click", function (e) {
      // using event propagation

      if (e.target && e.target.nodeName == "BUTTON") {
        const id = e.target.getAttribute("data-id"); // getting the id of the button

        const schemeList = schemeData.find((c) => c.id == id); // finding this scheme based on the id
        const scheme = schemeList.scheme;

        console.log("schemeList: ", schemeList);

        const schemeTitle = schemeList.title;

        console.log(schemeTitle);

        fieldset.innerHTML = "";
        h2.textContent = schemeTitle;

        const colorRow = document.createElement("div");
        colorRow.setAttribute("class", "colorRow");
        fieldset.appendChild(colorRow);

        scheme.forEach((a) => {
          const detailBox = document.createElement("div");
          detailBox.setAttribute("class", "detailBox");
          detailBox.style.background = a.web;
          colorRow.appendChild(detailBox);

          const span1 = document.createElement("span");
          span1.textContent = a.web;
          colorRow.appendChild(span1);

          const span2 = document.createElement("span");
          span2.textContent = detailBox.style.background;
          colorRow.appendChild(span2);

          const label = document.createElement("label");
          label.textContent = a.name;
          colorRow.appendChild(label);
        });

        return colorRow;
      }
    });
  }
});

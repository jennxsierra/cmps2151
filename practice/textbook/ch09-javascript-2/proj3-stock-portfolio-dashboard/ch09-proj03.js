/* add your code here */
document.addEventListener("DOMContentLoaded", function () {
  // Parse the JSON data
  let usersData = JSON.parse(userContent);
  let stocksData = JSON.parse(stockContent);

  // Hide the details <section> initially
  document.querySelector(".Details").style.display = "none";

  // Generate the user list
  const userList = document.querySelector(".UserList ul");
  userList.innerHTML = ""; // Clear any existing list items

  usersData.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.user.firstname} ${user.user.lastname}`;
    listItem.dataset.userId = user.id; // Add the user's ID to the dataset for easier retrieval later
    userList.appendChild(listItem);
  });
  // Handle click events in the user list using event delegation
  document
    .querySelector(".UserList ul")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        const userId = event.target.dataset.userId;
        const selectedUser = usersData.find((user) => user.id == userId);

        if (selectedUser) {
          // Unhide the details <section>
          document.querySelector(".Details").style.display = "block";

          // Display the clicked user's information in the user details form
          document.getElementById("userID").value = selectedUser.id;
          document.getElementById("firstname").value =
            selectedUser.user.firstname;
          document.getElementById("lastname").value =
            selectedUser.user.lastname;
          document.getElementById("address").value = selectedUser.user.address;
          document.getElementById("city").value = selectedUser.user.city;
          document.getElementById("email").value = selectedUser.user.email;

          // Display the user's stock portfolio holdings in the portfolio section
          const portfolioList = document.getElementById("listPortfolio");
          portfolioList.innerHTML = ""; // Clear any existing list items
          // Clear the stock details
          document.getElementById("logo").src = "";
          document.getElementById("stockName").textContent = "";
          document.getElementById("stockSector").textContent = "";
          document.getElementById("stockIndustry").textContent = "";
          document.getElementById("stockAddress").textContent = "";
          // hide the stock details <section>
          document.querySelector(".StockDetails").style.display = "none";
          selectedUser.portfolio.forEach((stock) => {
            // Add stock symbol
            const stockSymbol = document.createElement("p");
            stockSymbol.textContent = stock.symbol;
            portfolioList.appendChild(stockSymbol);
            // Add stock owned
            const stockOwned = document.createElement("p");
            stockOwned.textContent = stock.owned;
            portfolioList.appendChild(stockOwned);
            // Add view button
            const viewButton = document.createElement("button");
            viewButton.textContent = "View";
            viewButton.dataset.symbol = stock.symbol;
            // Handle click events in the view button using event delegation
            viewButton.addEventListener("click", function (event) {
              const symbol = event.target.dataset.symbol;
              const stock = stocksData.find((s) => s.symbol === symbol);
              document.querySelector(".StockDetails").style.display = "block";
              if (stock) {
                document.getElementById("logo").src =
                  "logos/" + stock.symbol + ".svg";
                document.getElementById("stockName").textContent = stock.name;
                document.getElementById("stockSector").textContent =
                  stock.sector;
                document.getElementById("stockIndustry").textContent =
                  stock.subIndustry;
                document.getElementById("stockAddress").textContent =
                  stock.address;
              }
            });
            portfolioList.appendChild(viewButton);
          });
        }
      }
    });
  // Add event listener for the "Save" button
  document
    .getElementById("btnSave")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Get user input values
      const userId = document.getElementById("userID").value;
      const firstname = document.getElementById("firstname").value;
      const lastname = document.getElementById("lastname").value;
      const address = document.getElementById("address").value;
      const city = document.getElementById("city").value;
      const email = document.getElementById("email").value;

      // Find user in the array and update their details
      const userIndex = usersData.findIndex((u) => u.id.toString() === userId);
      if (userIndex !== -1) {
        usersData[userIndex].user.firstname = firstname;
        usersData[userIndex].user.lastname = lastname;
        usersData[userIndex].user.address = address;
        usersData[userIndex].user.city = city;
        usersData[userIndex].user.email = email;

        // update the user list display
        const userList = document.querySelector(".UserList ul");
        const selectedUser = userList.querySelector(
          `li[data-user-id="${userId}"]`
        );
        if (selectedUser) {
          selectedUser.textContent = `${firstname} ${lastname}`;
        }
      }
    });
  // Add event listener for the "Delete" button
  document
    .getElementById("btnDelete")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Get the user ID from the hidden input field
      const userId = document.getElementById("userID").value;

      // Find the index of the user in the array
      const userIndex = usersData.findIndex((u) => u.id.toString() === userId);

      // Check if the user exists in the array
      if (userIndex !== -1) {
        // Remove the user from the array
        usersData.splice(userIndex, 1);

        //update the user list display
        const userList = document.querySelector(".UserList ul");
        const selectedUser = userList.querySelector(
          `li[data-user-id="${userId}"]`
        );
        if (selectedUser) {
          selectedUser.remove();
        }
        // hide the details <section>
        document.querySelector(".Details").style.display = "none";
      }
    });
});

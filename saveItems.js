// Script to add items to saved items
const save = {
  savedItems: [],

  // Save items to local storage
  saveItems: function () {
    console.log(this.savedItems);
    localStorage.setItem("savedItems", JSON.stringify(this.savedItems));
  },

  // Load from local storage
  loadItems: function () {
    this.savedItems = JSON.parse(localStorage.getItem("savedItems"));
    console.log(this.savedItems);
  },

  // Add item and saves it to local storage
  addToSavedItems: function (brand, price, qty) {
    const item = { brand, price, qty };

    for (const i of this.savedItems) {
      if (i.brand === brand) {
        i.qty += qty;
        this.saveItems();
        return;
      }
    }

    this.savedItems.push(item);
    this.saveItems();
  },

  // Display the saved items in local storage
  displaySavedItems: function () {
    this.loadItems();
    output = "";

    for (const item of this.savedItems) {
      output += `<li>${item.brand} - ${item.qty} 
      ${item.qty > 1 ? "sets" : "set"} -
      Total Price: <strong>Php ${item.price * item.qty}</strong></li>`;
    }

    $("#savedItems ul").html(output);
  },
};

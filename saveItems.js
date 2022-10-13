// Script to add items to saved items
const save = {
  savedItems: [],

  // Save items to local storage
  saveItems: function () {
    localStorage.setItem("savedItems", JSON.stringify(this.savedItems));
    this.displaySavedItems();
  },

  // Load from local storage
  loadItems: function () {
    this.savedItems = JSON.parse(localStorage.getItem("savedItems"));
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
    let output = "";

    for (const item of this.savedItems) {
      output += `<li>${item.brand} - ${item.qty} 
      ${item.qty > 1 ? "sets" : "set"} -
      Total Price: <strong>Php ${item.price * item.qty}</strong>
      <a class="removeItem" href="#" data-brand="${item.brand}">
      Remove</a></li>`;
    }

    $("#savedItems ul").html(output);

    // For removing item in saved items
    $(".removeItem").click(function () {
      let brand = $(this).attr("data-brand");
      save.removeItem(brand);
      save.displaySavedItems();
    });
  },

  // For clearing the saved items
  clearSavedItems: function () {
    this.savedItems = [];
    this.saveItems();
  },

  // To remove an item in saved items
  removeItem: function (brand) {
    this.loadItems();
    console.log(brand, this.savedItems);

    this.savedItems.forEach(function (el, i) {
      console.log(el, i);
      if (el.brand === brand) {
        save.savedItems.splice(i, 1);
      }
    });

    this.saveItems();
  },
};

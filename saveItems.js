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

    if (!this.savedItems.length) {
      output = "You have not yet saved any item.";
      $("#savedItems div").html(output);
      $("#savedItems ul").html("");
    } else {
      for (const item of this.savedItems) {
        output += `<li class="mb-1">${item.brand} - ${item.qty}
        ${item.qty > 1 ? "sets" : "set"}
        <a class="reduceQty btn btn-secondary btn-sm" href="#" 
        data-brand="${item.brand}">
        <i class="fa-solid fa-minus"></i></a>
        <a class="increaseQty btn btn-secondary btn-sm" href="#" 
        data-brand="${item.brand}">
        <i class="fa-solid fa-plus"></i></a> -
        Total Price: <strong>Php ${item.price * item.qty}</strong>
        <a class="removeItem btn btn-danger btn-sm" href="#" 
        data-brand="${item.brand}">
        <i class="fa-solid fa-trash"></i></a></li>`;
      }

      $("#savedItems div").html("");
      $("#savedItems ul").html(output);
    }

    // For removing item in saved items
    $(".removeItem").click(function () {
      let brand = $(this).attr("data-brand");
      save.removeItem(brand);
      save.displaySavedItems();
    });

    // For reducing qty of items in saved items
    $(".reduceQty").click(function () {
      let brand = $(this).attr("data-brand");
      save.reduceQty(brand);
      save.displaySavedItems();
    });

    // For increasing qty of items in saved items
    $(".increaseQty").click(function () {
      let brand = $(this).attr("data-brand");
      save.increaseQty(brand);
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
      if (el.brand === brand) {
        save.savedItems.splice(i, 1);
      }
    });

    this.saveItems();
  },

  // Function for reducting item qty in saved item
  reduceQty: function (brand) {
    this.loadItems();
    this.savedItems.forEach(function (el, i) {
      if (el.brand === brand) {
        el.qty--;
        if (el.qty === 0) save.savedItems.splice(i, 1);
      }
    });

    this.saveItems();
  },

  // Function for increasing item qty in saved item
  increaseQty: function (brand) {
    this.loadItems();
    this.savedItems.forEach(function (el, i) {
      if (el.brand === brand) el.qty++;
    });

    this.saveItems();
  },
};

// Script for the saved items functionality
const save = {
  items: [],

  // Will add an item to the saved items
  addToSavedItems: function (brand, price, qty) {
    item = { brand, price, qty };
    this.items.push(item);
    localStorage.setItem("savedItems", JSON.stringify(this.items));
  },
};

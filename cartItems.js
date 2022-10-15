// Script to add items to cart
const cart = {
  cartItems: [],

  // Save cart items to local storage
  saveCart: function () {
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    this.displayCartItems();
  },

  // Load from local storage
  loadCart: function () {
    this.cartItems = JSON.parse(sessionStorage.getItem("cartItems"));

    if (this.cartItems === null) {
      return (this.cartItems = []);
    } else {
      return this.cartItems;
    }
  },

  // Add item and saves it to local storage
  addToCart: function (brand, price, qty) {
    const item = { brand, price, qty };

    for (const i of this.cartItems) {
      if (i.brand === brand) {
        i.qty++;
        this.saveCart();
        return;
      }
    }

    this.cartItems.push(item);
    this.saveCart();
  },

  // Display the cart items in local storage
  displayCartItems: function () {
    this.loadCart();
    let output = "";

    if (!this.cartItems.length) {
      output = "Your cart is currently empty.";
      $("#cartItems #output").html(output);
      $("#cartItems ul").html("");
    } else {
      for (const item of this.cartItems) {
        output += `<li class="mb-1">${item.brand} - 
        Price: <strong> ${formatter.format(item.price * item.qty)}</strong>
        
        <br>
        
        <a class="reduceQty btn btn-secondary btn-sm ms-5" href="#" 
        data-brand="${item.brand}">
        <i class="fa-solid fa-minus"></i></a>

        <span>
        ${item.qty} ${item.qty > 1 ? "sets" : "set"}
        </span>

        <a class="increaseQty btn btn-secondary btn-sm" href="#" 
        data-brand="${item.brand}">
        <i class="fa-solid fa-plus"></i></a>

        <a class="removeItem btn btn-warning btn-sm" href="#" 
        data-brand="${item.brand}">
        <i class="fa-solid fa-trash"></i></a></li>`;
      }

      output += `<h5 class="mt-4">Total Amount: ${formatter.format(
        cart.computeTotalPrice()
      )}</h5>`;

      $("#cartItems #output").html("");
      $("#cartItems ul").html(output);
    }

    // Conditional to disable the buttons if cart is empty
    if (!this.cartItems.length) {
      $("#cartItems #clearCart").addClass("disabled");
      $("#cartItems #checkout").addClass("disabled");
    } else if (this.cartItems.length > 0) {
      $("#cartItems #clearCart").removeClass("disabled");
      $("#cartItems #checkout").removeClass("disabled");
    }

    // For removing item in cart
    $(".removeItem").click(function () {
      let brand = $(this).attr("data-brand");
      cart.removeItem(brand);
      cart.displayCartItems();
    });

    // For reducing qty of items in cart
    $(".reduceQty").click(function () {
      let brand = $(this).attr("data-brand");
      cart.reduceQty(brand);
      cart.displayCartItems();
    });

    // For increasing qty of items in cart
    $(".increaseQty").click(function () {
      let brand = $(this).attr("data-brand");
      cart.increaseQty(brand);
      cart.displayCartItems();
    });
  },

  // For clearing the cart
  clearCartItems: function () {
    this.cartItems = [];
    this.saveCart();
  },

  // To remove an item in cart
  removeItem: function (brand) {
    this.loadCart();
    console.log(brand, this.cartItems);

    this.cartItems.forEach(function (el, i) {
      if (el.brand === brand) {
        cart.cartItems.splice(i, 1);
      }
    });

    this.saveCart();
  },

  // Function for reducting item qty in cart
  reduceQty: function (brand) {
    this.loadCart();
    this.cartItems.forEach(function (el, i) {
      if (el.brand === brand) {
        el.qty--;
        if (el.qty === 0) cart.cartItems.splice(i, 1);
      }
    });

    this.saveCart();
  },

  // Function for increasing item qty in cart
  increaseQty: function (brand) {
    this.loadCart();
    this.cartItems.forEach(function (el, i) {
      if (el.brand === brand) el.qty++;
    });

    this.saveCart();
  },

  // Function for computing the total price of items in the cart
  computeTotalPrice: function () {
    this.loadCart();
    let totalPrice = 0;
    this.cartItems.forEach(function (el, i) {
      totalPrice += el.price * el.qty;
    });

    return totalPrice;
  },
};

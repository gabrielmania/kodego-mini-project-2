// Bootstrap validation script
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// For formatting number to currency format
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP",
});

// Window on load event
$(window).on("load", function () {
  // Load saved items and cart items every reload
  save.loadItems();
  save.displaySavedItems();
  cart.loadCart();
  cart.displayCartItems();

  // Click event on the save buttons per product to add the item on saved items
  $(".save").click(function (evt) {
    evt.preventDefault();
    const brand = $(this).attr("data-brand");
    const price = $(this).attr("data-price");

    console.log(`${brand} costing ${price} added to saved items!`);
    save.addToSavedItems(brand, price, 1);
    save.displaySavedItems();

    // Bootstrap toast for showing notification when item is saved
    const notifDiv = $("#saveNotif");
    const toast = new bootstrap.Toast(notifDiv);

    $("#saveNotif .toast-body").html(`
      <strong>${brand}</strong> has been added to your Saved Items!
    `);

    toast.show();
  });

  // Click event on the save buttons per product to add the item on saved items
  $(".addToCart").click(function (evt) {
    evt.preventDefault();
    const brand = $(this).attr("data-brand");
    const price = $(this).attr("data-price");

    console.log(`${brand} costing ${price} added to cart!`);
    cart.addToCart(brand, price, 1);
    cart.displayCartItems();

    // Bootstrap toast for showing notification when item is added to cart
    const notifDiv = $("#cartNotif");
    const toast = new bootstrap.Toast(notifDiv);

    $("#cartNotif .toast-body").html(`
       <strong>${brand} - ${formatter.format(price)}</strong> has been added to your cart!
     `);

    toast.show();
  });
});

// Function that will load the products based on the arguments passed on the function
function loadProducts(products, numProducts) {
  let productsRow = null;

  if (products === bikes) {
    productsRow = $("#bikes");
  } else if (products === parts) {
    productsRow = $("#parts");
  } else if (products === gears) {
    productsRow = $("#gears");
  }

  for (let i = 0; i < numProducts; i++) {
    productsRow.append(
      `<div class="col-lg-3 col-md-6 mb-3">
        <div class="card h-100 border border-dark">
          <img src="${products[i].image}" class="card-img-top h-100">
          <div class="card-body">
            <h5 class="card-title">${products[i].brand}</h5>
            <p class="card-text">${products[i].model}</p>
            <p class="card-text fw-bold">
              ${formatter.format(products[i].price)}
            </p>
            <div class="text-center">
              <a href="#" class="cardBtn save btn btn-outline-dark px-4 rounded-pill"
                data-brand="${products[i].brand} ${products[i].model}"
                data-price="${products[i].price}">
                <i class="fa-solid fa-heart fa-xl"></i></a>
              <a href="#" class="cardBtn addToCart btn btn-outline-dark px-5 rounded-pill"
                data-brand="${products[i].brand} ${products[i].model}"
                data-price="${products[i].price}">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>`
    );
  }
}
// Function for loading cart items in checkout page
function loadCheckoutPageItems() {
  cart.loadCart();

  // To append the number of items in the cart
  $("#checkoutItems h4").append(
    `<span class="badge bg-success rounded-pill">${cart.cartItems.length}</span>`
  );

  // To render the items in the cart in the checkout page
  let output = "";
  cart.cartItems.forEach(function (el) {
    output += `
  <li class="list-group-item d-flex justify-content-between lh-sm">
  <div>
    <h6 class="my-0">${el.brand}</h6>
    <small class="text-muted">Quantity: ${el.qty} 
      ${el.qty <= 1 ? "set" : "sets"}</small>
  </div>
  <span class="text-muted">${formatter.format(el.price * el.qty)}</span>
  </li>
`;
  });

  //  Append the total price in the bottom of the cart items at the checkout page
  output += `
<li class="list-group-item d-flex justify-content-between">
  <span>Total Price</span>
  <strong>${formatter.format(cart.computeTotalPrice())}</strong>
</li>
`;
  $("#checkoutItems ul").html(output);
}

// Hover effect on the navbar
$("nav").hover(
  function () {
    $("nav").removeClass(["bg-none", "navbar-light"]);
    $("nav").addClass(["bg-dark", "navbar-dark"]);
    $("nav .btn").removeClass("btn-outline-dark");
    $("nav .btn").addClass("btn-outline-light");
    $("nav img").attr("src", "images/logos/navbar-logo-dark.png");
    $("nav .dropdown-menu").removeClass(["bg-none", "navbar-light"]);
    $("nav .dropdown-menu").addClass(["bg-dark", "navbar-dark"]);
  },
  function () {
    $("nav").removeClass(["bg-dark", "navbar-dark"]);
    $("nav").addClass(["bg-none", "navbar-light"]);
    $("nav .btn").removeClass("btn-outline-light");
    $("nav .btn").addClass("btn-outline-dark");
    $("nav img").attr("src", "images/logos/navbar-logo-light.png");
    $("nav .dropdown-menu").removeClass(["bg-dark", "navbar-dark"]);
    $("nav .dropdown-menu").addClass(["bg-none", "navbar-light"]);
  }
);

// Click event will show the saved items
$("#save").click(function (evt) {
  evt.preventDefault();
  $("#savedItems").toggle();
  $("#cartItems").css("display", "none");
  save.displaySavedItems();
});

// Click event will show the cart items
$("#cart").click(function (evt) {
  evt.preventDefault();
  $("#cartItems").toggle();
  $("#savedItems").css("display", "none");
  cart.displayCartItems();
});

// Click event for clearing the saved items
$("#clearSave").click(function () {
  save.clearSavedItems();
  save.displaySavedItems();
});

// Click event for clearing the saved items
$("#clearCart").click(function () {
  cart.clearCartItems();
  cart.displayCartItems();
});

// Toggle the saved items and cart off when clicked outside of the section
$("section").click(function () {
  $("#savedItems").css("display", "none");
  $("#cartItems").css("display", "none");
});

$("#paymentOptions").change(function () {
  let radioValue = $("input[name=paymentMethod]:checked").val();
  if (radioValue === "credit") {
    $("#paymentForm").html(`
    <div class="row gy-3">
      <div class="col-md-6">
        <label for="cc-name" class="form-label">Name on card</label>
        <input type="text" class="form-control" id="cc-name" placeholder="Juan dela Cruz" required>
        <small class="text-muted">Full name as displayed on card</small>
        <div class="invalid-feedback">
          Name on card is required
        </div>
      </div>

      <div class="col-md-6">
        <label for="cc-number" class="form-label">Credit card number</label>
        <input type="text" class="form-control" id="cc-number" placeholder="XXXX-XXXX-XXXX-XXXX" required>
        <div class="invalid-feedback">
          Credit card number is required
        </div>
      </div>

      <div class="col-md-3">
        <label for="cc-expiration" class="form-label">Expiration</label>
        <input type="text" class="form-control" id="cc-expiration" placeholder="MM/YY" required>
        <div class="invalid-feedback">
          Expiration date required
        </div>
      </div>

      <div class="col-md-3">
        <label for="cc-cvv" class="form-label">CVV</label>
        <input type="text" class="form-control" id="cc-cvv" placeholder="000" required>
        <div class="invalid-feedback">
          Security code required
        </div>
      </div>
    </div>
    `);
  } else if (radioValue === "gcash") {
    $("#paymentForm").html(`
    <div class="row">
      <img class="w-50 mx-auto rounded-5" src="images/payments/gcash.jpg">
    </div>
    `);
  } else if (radioValue === "paymaya") {
    $("#paymentForm").html(`
    <div class="row">
      <img class="w-50 mx-auto rounded-5" src="images/payments/paymaya.jpg">
    </div>
    `);
  } else if (radioValue === "paypal") {
    $("#paymentForm").html(`
    <div class="row gy-3">
      <h5 class="text-center">Login to your Paypal account!</h5>
      <div class="col-md-6">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" placeholder="juandelacruz01" required>
        <div class="invalid-feedback">
          Your username is required
        </div>
      </div>

      <div class="col-md-6">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="******" required>
        <div class="invalid-feedback">
          Your password is required
        </div>
      </div>
    </div>
    `);
  }
});

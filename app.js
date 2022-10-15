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
  cart.loadCart();

  // Click event on the save buttons per product to add the item on saved items
  $(".save").click(function (evt) {
    evt.preventDefault();
    const brand = $(this).attr("data-brand");
    const price = $(this).attr("data-price");

    console.log(`${brand} costing ${price} added to saved items!`);
    save.addToSavedItems(brand, price, 1);
    save.displaySavedItems();
  });

  // Click event on the save buttons per product to add the item on saved items
  $(".addToCart").click(function (evt) {
    evt.preventDefault();
    const brand = $(this).attr("data-brand");
    const price = $(this).attr("data-price");

    console.log(`${brand} costing ${price} added to cart!`);
    cart.addToCart(brand, price, 1);
    cart.displayCartItems();
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

function loadCheckoutPageItems() {
  cart.loadCart();
  
  // To append the number of items in the cart
  $("#checkoutItems h4").append(
    `<span class="badge bg-primary rounded-pill">${cart.cartItems.length}</span>`
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

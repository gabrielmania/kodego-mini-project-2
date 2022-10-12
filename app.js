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
              Php ${products[i].price.toLocaleString()}.00
            </p>
            <div class="text-center">
              <a href="#" class="save btn btn-outline-dark px-4 rounded-pill"
                data-brand="${products[i].brand} ${products[i].model}"
                data-price="${products[i].price}">
                <i class="fa-solid fa-heart fa-xl"></i></a>
              <a href="#" class="btn btn-outline-dark px-5 rounded-pill">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>`
    );
  }
}

// Window on load event
$(window).on("load", function () {
  // Upon loading of page, will render the products
  loadProducts(bikes, 4); // Render bike products
  loadProducts(parts, 4); // Render parts products
  loadProducts(gears, 4); // Render gears products

  // Click event on the save buttons per product to add the item on saved items
  $(".save").click(function (evt) {
    evt.preventDefault();
    const brand = $(this).attr("data-brand");
    const price = $(this).attr("data-price");
    console.log(brand, price);
  });
});

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

// Click event will show the saved items
$("#save").click(function (evt) {
  evt.preventDefault();
  $("#savedItems").toggle();
});

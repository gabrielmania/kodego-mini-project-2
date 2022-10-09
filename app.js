function loadProducts(products, numProducts) {
  const productsRow = $("#products .row");

  for (let i = 0; i < numProducts; i++) {
    productsRow.append(
      `
    <div class="col-lg-3 mb-3">
      <div class="card h-100">
        <img src="${products[i].image}" class="card-img-top h-100">
        <div class="card-body">
          <h5 class="card-title">${products[i].brand}</h5>
          <p class="card-text">${products[i].model}</p>
          <p class="card-text fw-bold">
            Php ${products[i].price.toLocaleString()}.00
          </p>
          <a href="#" class="btn btn-primary d-block">Add to Cart</a>
        </div>
      </div>
    </div>
      `
    );
  }
}

$(window).on("load", function () {
  loadProducts(bikes, 12);
});

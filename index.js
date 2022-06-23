const productsEl = document.querySelector(".products");
function renderProducts(){
    products.forEach( (product) =>{
    productsEl.innerHTML += `
    <div class="item">
        <div class="item-container">
          <div class="item-img">
            <img src="${product.imgSrc}" alt="djapanka 1" />
          </div>
          <div class="description">
            <h2>Djapanka 1</h2>
            <h2><small>$</small>cena</h2>
            <p>description na djapankata</p>
          </div>
          <div class="add-to-wishlist">
            <img src="./icons/heart.png" alt="add to wiishlist" />
          </div>
          <div class="add-to-cart">
            <img src="./icons/bag-plus.png" alt="add to cart" />
          </div>
        </div>
    </div>
    `;
});
}
renderProducts();

const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
function renderProducts(){
    products.forEach( (product) =>{
    productsEl.innerHTML += `
    <div class="item">
        <div class="item-container">
          <div class="item-img">
            <img src="${product.imgSrc}" alt="${product.name}" />
          </div>
          <div class="description">
            <h2>${product.name}</h2>
            <h2><small>$</small>${product.price}</h2>
            <p>${product.description}</p>
          </div>
          <div class="add-to-wishlist">
            <img src="./icons/heart.png" alt="add to wiishlist" />
          </div>
          <div class="add-to-cart" onclick="addToCart(${product.id})">
            <img src="./icons/bag-plus.png" alt="add to cart" />
          </div>
        </div>
    </div>
    `;
});
}
renderProducts();

let cart = [];

function addToCart(id){
    if(cart.some((item) => item.id === id )){
        alert("Product already in cart!")
    }
    else {
        const item = products.find((product) => product.id === id)

        console.log(item);
     
        cart.push({
            ...item,
            numberOfUnites: 1,
        }); 
    }
    updateCart();
}
function updateCart(){
    renderCartItems();
    // renderSubtotal();
}
function renderCartItems(){
    cart.forEach(()=>{
        cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info">
                <img src="${item.imgSrc}" alt"${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
            <small>$</small>${item.price}
            </div>
            <div class="units">
                <div class="btn minus">-</div>
                <div class="number">${item.numberOfUnites}</div>
                <div class="btn plus">+</div>
            </div>
        </div>
        `
    });
}

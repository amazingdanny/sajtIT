var container = document.getElementById("products")
fetch("./products.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
    for(var item of jsondata)
    {
        var product=document.createElement("div")
        product.innerHTML=item.name 
        product.id=item.name
        product.onclick=(e)=>{
            console.log(e.target.id)
        }
        container.appendChild(product)
    }
});
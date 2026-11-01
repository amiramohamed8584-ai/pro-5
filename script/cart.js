let allproducts = document.querySelector('.products')
let getcart = localStorage.getItem("productincart")
let cartItems = []
if(getcart){
    let item = JSON.parse(getcart)
    drowprodect(item)
}
function drowprodect(products){
     let y = products.map ((item) =>{
    return`<div class="product-item col-12 col-md-6 col-lg-4">
        <img src="${item.imageUrl}" class="card-img-top";">
<div class="card-body">
  <h4 class="card-title"> ${item.title} </h4>
  <p class="card-text"> ${item.description} </p>
  <button class=" remove btn-solid theme-primary" onclick="remove(${item.id})"> remove from cart </button>
</div>
        </div>`
 })
 allproducts.innerHTML = y.join("")
}
function remove(id){
    let getcart = localStorage.getItem("productincart")
    let cartItems = JSON.parse(getcart)
    cartItems = cartItems.filter((item) => item.id != id)
    localStorage.setItem("productincart", JSON.stringify(cartItems))
    drowprodect(cartItems)
}

const macBox = document.getElementsByClassName("mac-box")[0];
const iphoneBox = document.getElementsByClassName("iphone-box")[0];
const ipadBox = document.getElementsByClassName("ipad-box")[0];

// read json
function readJson() {
    fetch('./data.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            getJsonData(data);
        })
        .catch(err => {
            alert("Can't read JSON")
        });
}
function getJsonData(products){
    for (var i=0;i<products.length;i++){
        addProductToWeb(products[i]);
    }
}
function addProductToWeb(object){
    let product = eval(object.des+"Box").getElementsByClassName("product")[0];
    console.log(product,1);
    let newElement = document.createElement("div");
    newElement.classList.add("product-item")
    
    newElement.innerHTML=`
        <div class="product-img">  <a href=""><image class="product-img" src="${object.src}"></image></a></div>
        <div class="product-name"><a href="">${object.name}</a></div>
        <div class="produc-price">${formatMoney(object.price) + "đ"}<span class="discount">(- 25%)</span></div>
        <div class="add"><a class="btn-cart" onclick="addToCart("${object.id}")">ADD</a></div>
    `;
    product.appendChild(newElement);
    console.log(product);
}
// money_format
function formatMoney(x){
    let parts ="";
    let stringx = x.toString();
    let leng = x.toString().length;
    let count;
    if (leng%3==0) count=0;
    else if (leng%3==1) count=2;
    else if (leng%3==2) count=1;
    for (var i = 0; i < leng; i++){
        if (count==3){
            parts+=",";
            count=0;
        }
        parts+=stringx[i];
        count+=1;
    }
    return parts;
}

addProductToWeb({   
"id" : "MA29",
"name": "Macbook Air 128GB",
"price": 29000000,
"src": "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/11/12/637407967465471535_mba-2020-gold-1.png",
"des": "iphone"
})

addProductToWeb({   
    "id" : "MA29",
    "name": "Macbook Air 128GB",
    "price": 29000000,
    "src": "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/11/12/637407967465471535_mba-2020-gold-1.png",
    "des": "ipad"
})

function addToCart(product) {
    var cartCount=0;
    if (cartCount == 0) {
        document.querySelector(".empty-item");
      }
      // Set the item to be in cart and lock the add to cart button
      var buyBtn = this;
      console.log(this, product);
}

function start(){
    // readJson();

}
window.onload = start;
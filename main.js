const PRODUCT_LIST = ["MA29", "MP1666", "MP1340", "IPP35", "IPA2208", "IPM20", "IPB10", "IP13PM", "IP13", "IP13P", "IP12PM"];
var cartMenu = document.querySelector(".cart-menu");
var cartOpen = false;
var rubbin_img='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>';

var layout=document.getElementById("layout-opacity");

function initial(){    
    if(!window.sessionStorage.getItem('MA29')){
        for (let i=0; i<PRODUCT_LIST.length; i++){
            window.sessionStorage.setItem(PRODUCT_LIST[i], 0);
        }
    } else {
        for (let i=0; i<PRODUCT_LIST.length; i++){
            if (window.sessionStorage.getItem(PRODUCT_LIST[i]) != 0){
                updateCart(PRODUCT_LIST[i]);
            }
        }
    }
    // 
    let tr = document.createElement("tr");
    tr.setAttribute("id", "subtotalRow");
    // responsive
    tr.setAttribute("class", "mobile-subtotal");
    
    let td= document.createElement("td");
    td.setAttribute("colspan", "4");

    let subtotal = document.createTextNode("Subtotal");
    td.appendChild(subtotal);
    tr.appendChild(td);

    let td2 = document.createElement("td");
    td2.setAttribute("id", "subtotal");
    td2.setAttribute("colspan", "2");
    let sum = 0;
    for (let i=0; i<PRODUCT_LIST.length; i++){
    if (window.sessionStorage.getItem(PRODUCT_LIST[i]) != 0){
        sum += parseInt(window.sessionStorage.getItem(PRODUCT_LIST[i])) * data[PRODUCT_LIST[i]].price;
        }
    }
    document.getElementById("cartList").appendChild(tr);
    td2.appendChild(document.createTextNode(sum));
    tr.appendChild(td2);
    // 
    let cartToggle = document.getElementById("cartToggle");
    cartToggle.addEventListener("click", toggleCart);
}

function addToCart(name){
    let num = parseInt(window.sessionStorage.getItem(name));
    window.sessionStorage.setItem(name, (num+1));
    updateCart(name);
    toggleCart();
}

function toggleCart(){
    cartMenu.classList.add("open");
    // opacity
    layout.classList.add("opacity");
    let subtotal = document.getElementById("subtotal");
    let sum = 0;
    for (let i=0; i<PRODUCT_LIST.length; i++){
    if (window.sessionStorage.getItem(PRODUCT_LIST[i]) != 0){
        sum += parseInt(window.sessionStorage.getItem(PRODUCT_LIST[i])) * data[PRODUCT_LIST[i]].price;
        }
    }
    subtotal.innerHTML = sum;
}

function buy(){
    cartMenu.classList.toggle("open");
    //opacity
    layout.classList.toggle("opacity");
    alert("Thank you for purchasing at Apple Store");
}

function deleteItem(item){
    window.sessionStorage.setItem(item, 0);
    document.getElementById(item+"tr").remove;
    location.reload();
}

function updateCart(item){
    if (!document.getElementById(item)){
        let tr = document.createElement("tr");
        tr.setAttribute("id", (item+"tr"));
        // responsive
        tr.setAttribute("class", "mobile");

        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src", data[item].src);
        img.setAttribute("id", item);
        td1.appendChild(img);
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        let name = document.createTextNode(data[item].name);
        td2.appendChild(name);
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        let price = document.createTextNode(data[item].price);
        td3.appendChild(price);
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.setAttribute("id", (item + "Amount"));
        let amount = document.createTextNode(window.sessionStorage.getItem(item));
        td4.appendChild(amount);
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.setAttribute("id", (item + "total"));
        let total = document.createTextNode(data[item].price * parseInt(window.sessionStorage.getItem(item)));
        td5.appendChild(total);
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        let btn = document.createElement("button");
        btn.setAttribute("onclick", "deleteItem('" + item + "')");
        del = document.createTextNode("del");
        btn.appendChild(del)
        td6.appendChild(btn);
        tr.appendChild(td6);

        var list=document.getElementById("cartList");
        list.insertBefore(tr, list.childNodes[2]);
        console.log(document.getElementById("cartList"));
    } else {
        document.getElementById(item + "Amount").innerHTML = window.sessionStorage.getItem(item);
        document.getElementById(item + "total").innerHTML = data[item].price * parseInt(window.sessionStorage.getItem(item));
    }
}

let data = {
    MA29 :{
        name: "Macbook Air 128GB",
        price: 29000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/11/12/637407967465471535_mba-2020-gold-1.png", 
        des: "Lorem Ipsum" 
    },
    MP1666 :{
        name: "Macbook Pro 16inch M1 Max",
        price: 60000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/10/19/637702684259566248_macbook-pro-16-2021-bac-1.jpg",
        des:   "Lorem Ipsum"
    },
    MP1340 :{
        name: "Macbook Pro 13inch M1",
        price: 40000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/11/12/637408000895490753_mbp-2020-m1-gray-2.png",
        des:  "Lorem Ipsum"    
    },
    IPP35 :{
        name: "iPad Pro 12.9 2021 M1 Wi-Fi 5G 128GB",
        price: 35000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/4/21/637546068956139190_ipad-pro-12-9-cell-xam-1.jpg",
        des:   "Lorem Ipsum"   
    },
    IPA2208 :{
        name: "iPad Air 10.9 2020 Wi-Fi + Cellular 64GB",
        price: 20800000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/12/8/637430344008900880_ipad-air-10-9-2020-wi-fi-cellular-xanh-1.png",
        des:   "Lorem Ipsum"   
    },
    IPM20 :{
        name: "iPad Mini 8.3 2021 Wi-Fi 5G 64GB",
        price: 20000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/9/15/637673401506930865_ipad-mini-8-3-2021-wi-fi-5g-xam-1.jpg",
        des:  "Lorem Ipsum"    
    },
    IPB10 :{
        name: "iPad 10.2 2021 Wi-Fi 64GB",
        price: 10000000,
        src:   "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/9/15/637673417056583747_ipad-10-2-2021-wi-fi-bac-1.jpg",
        des:   "Lorem Ipsum"   
    }, 
    IP13PM :{
        name: "iPhone 13 Pro Max 128GB",
        price: 34000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217819795830_iphone-13-pro-max-xam-1.jpg",
        des: "Lorem Ipsum"
    }, 
    
    IP13 :{
        name: "iPhone 13 128GB",
        price: 25000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/9/15/637673230231791121_iphone-13-mini-den-1.jpg",
        des: "Lorem Ipsum"
    },
    IP13P :{
        name: "iPhone 13 Pro 128GB",
        price: 31000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/9/16/637673860095973501_iphone-13-pro-max-bac-1.jpg",
        des: "Lorem Ipsum"
    },
    IP12PM :{
        name: "iPhone 12 Pro Max 128GB",
        price: 31000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/10/14/637382725406081030_ip-12-pro-max-vang-1.png",
        des: "Lorem Ipsum"
    }   
};
initial();


// exit event
const exitBtn = document.querySelector("#exit-button");

exitBtn.addEventListener("click",function(){
  toggle();
});

function toggle() {
  cartMenu.classList.toggle("open");
  layout.classList.toggle("opacity");
}

// filter
var showmac=document.getElementById("mac");
var showipad=document.getElementById("ipad");
var showiphone=document.getElementById("iphone");
function filterSelection(e){
    if (e==="all"){
        showmac.classList.remove("hidden");
        showipad.classList.remove("hidden");
        showiphone.classList.remove("hidden");
    }
    if (e==="mac"){
        showmac.classList.remove("hidden");
        showipad.classList.add("hidden");
        showiphone.classList.add("hidden");
    }
    if (e==="ipad"){
        showmac.classList.add("hidden");
        showipad.classList.remove("hidden");
        showiphone.classList.add("hidden");
    }
    if (e==="iphone"){
        showmac.classList.add("hidden");
        showipad.classList.add("hidden");
        showiphone.classList.remove("hidden");
    }
}
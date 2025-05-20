
/*#drop-down:hover */
/* dropdown-menu*/

var dropdwn = document.getElementById("drop")
dropdwn.addEventListener("click", showmenu)

var drpdwnmenu = document.getElementById("dropdown-menu")

function showmenu() {

    drpdwnmenu.style.display = "block"
    dropdwn.addEventListener("click", closemenu)

    function closemenu() {

        drpdwnmenu.style.display = "none"
        dropdwn.addEventListener("click", showmenu)
    }

}




var data = [{
    name: "LAKMÉ ABSOLUTE MATTE ULTIMATE LIP COLOR WITH ARGAN OIL",
    details: "Lakmé Absolute introduces a new Matte Ultimate Lip colour with Argan oil - a glamorous matte lipstick range suited for every occasion. From deep plum to fierce red, the collection comprises of 12 trendy shades with a lightweight formula enriched with luxe argan oil that nourishes your lips and keeps it from drying. Every bullet has a soft velvety matte texture that comfortably sits on your lips and provides a bold, intense color payoff. Sport a sensational pout with the ultimate matte lip color!",
    color: "PETAL PINK",
    howtouse: "Step 1: Create a cross on your cupid’s bow.<br> Step 2: Start applying from the centre of your upper lip.<br> Step 3: Work from the centre towards the outer edges of your lip, following the contours of your mouth and glide across your bottom lip.",
    price: "800",
    image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29158_H2_8901030857867_600x.jpg?v=1630499339"
}];


var btnquantity = document.getElementById("quantity");
var count = 0;

function increasequantity() {
    if (count >= 0) {
        count++;
        btnquantity.textContent = count
    }
}

function decreasequantity() {
    if (count >= 1) {
        count--;
        btnquantity.textContent = count
    }
}
// }

var parent1 = document.getElementById("productimg");

var imgs = document.createElement("img")
imgs.className = "imgclass"

function showProducts(d) {
    data.forEach(function (product) {
        var div = document.createElement("div");
        div.className = "divimage"

        let anchor = document.createElement("a")
        anchor.href = "lakme.html"
        var para = document.createElement("p")

        para.textContent = "Home > " + product.name;
        anchor.append(para)
        imgs.src = product.image;

        imgs.style.height = "400px"
        imgs.style.width = "400px"
        imgs.style.marginLeft = "10%"



        div.append(anchor, imgs);
        parent1.append(div);
    })

}

function changeimg1() {
    imgs.src =
        "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29158_H2_8901030857867_600x.jpg?v=1630499339"
}

function changeimg2() {
    imgs.src =
        "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29163_H2_8901030857911_600x.jpg?v=1630500861"
}

function changeimg3() {
    imgs.src =
        "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29160_H2_8901030857881_600x.jpg?v=1630500562"
}

function changeimg4() {
    imgs.src =
        "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29160_H2_8901030857881_600x.jpg?v=1630500562"
}

function changeimg5() {
    imgs.src =
        "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29164_H2_8901030857928_600x.jpg?v=1630500979"
}


showProducts()

var parent2 = document.getElementById("nameprice")

function showProductsdetails(d) {

    data.forEach(function (product1) {
        console.log(data)
        // var div = document.createElement("div");


        var para1 = document.createElement("p");
        para1.textContent = product1.name;
        para1.style.fontFamily = "DIN Neuzeit Grotesk, sans-serif";
        para1.style.fontWeight = "800"
        var productPrice = document.createElement("p");
        productPrice.textContent = "₹ " + product1.price;



        // div.style.paddingLeft = "20%"
        // div.style.marginLeft = "260px"
        parent2.append(para1, productPrice);
    })
}
showProductsdetails()


let addtobag = document.getElementById("addtobag")
// addtobag.addEventListener("mouseenter", changecolor)
//   addtobag.addEventListener("mouseleave", changecolor1)




function changecolor() {
    addtobag.style.backgroundColor = "white"
    addtobag.style.color = "black"
}

function changecolor1() {
    addtobag.style.backgroundColor = "black"
    addtobag.style.color = "white"
}
var items = {}
items.name = data[0].name;
items.price = data[0].price;
items.image = data[0].image;
items.id = 1
items.quantity = 1;
// console.log(count++)
// items.units = btnquantity.textContent
// console.log(items, "yhanks") 

addtobag.addEventListener("click", add)
var input = Number(document.getElementById("quantity").innerText);
var result = false;
function add() {



    if (localStorage.getItem("bag") === null) {
        localStorage.setItem("bag", JSON.stringify([]))
    }

    let product = JSON.parse(localStorage.getItem("bag"))
    product.forEach((element) => {
        if (element.id == 1) {
            element.quantity++;
            result = true;
        }
    })
    if (!result) {
        product.push(items)
    }




    localStorage.setItem("bag", JSON.stringify(product))

    increasequantity()
}

let add_wish_list = document.getElementById("wishlist")
add_wish_list.addEventListener("click", addwish)

let wishPops = document.getElementById('wishlistpop');
wishPops.addEventListener('click', redirect);

function redirect() {
    window.location.href = 'wishlist.html';
}

function addwish() {

    if (localStorage.getItem("wish") === null) {
        localStorage.setItem("wish", JSON.stringify([]))
    }


    let prod = JSON.parse(localStorage.getItem("wish"))
    prod.push(items)


    localStorage.setItem("wish", JSON.stringify(prod))

    // console.log(prod)




}

let hamburger = document.getElementById("hamburger");

let opens = document.getElementById("openM");
opens.addEventListener("click", openn);

function openn() {
    hamburger.style.left = "0";
}

let closes = document.getElementById("closeM");
closes.addEventListener("click", closee);

function closee() {
    hamburger.style.left = "-900px";
}

let cart_btn = document.getElementById("cart_open");
cart_btn.addEventListener("click", showCart);

let cart = document.getElementById("cart_page");

function showCart() {
    cart.style.right = "0";
}

let cartClose_btn = document.getElementById("closeCart");
cartClose_btn.addEventListener("click", closeCart);

function closeCart() {
    cart.style.right = "-1000px";
}

let search_btn = document.getElementById("searchi");
search_btn.addEventListener("click", searchdo);

let searchbar = document.getElementById("searchBar");

let flag = false;

function searchdo() {
    console.log("hi");
    if (flag == false) {
        searchbar.style.left = "0px";
        flag = true;
    } else {
        searchbar.style.left = "-10000px";
        flag = false;
    }
}

let cart_items = document.querySelector(".all_cart_items ");
console.log(cart_items, "cart_items");
let bag_items = JSON.parse(localStorage.getItem("bag"));
console.log(bag_items, "cart_items");

var total = 0;
add_to_bag();

function add_to_bag() {
    if (bag_items === [] || bag_items === null) {
        let empty_bag = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerHTML = "Bag is empty";
        empty_bag.append(h1);
        cart_items.append(empty_bag);
        return;
    }

    bag_items.forEach((element) => {
        function display() {
            let divwcart = document.createElement("div");
            divwcart.className = "c_items";

            let divwcart_image = document.createElement("div");
            divwcart_image.className = "c_image";

            let divwcart_image_img = document.createElement("img");
            divwcart_image_img.src = element.image;

            divwcart_image.append(divwcart_image_img);

            let divwcart_text = document.createElement("div");
            divwcart_text.className = "c_text";

            let text_name = document.createElement("p");
            text_name.className = "name";
            text_name.innerHTML = element.name;

            let text_price = document.createElement("p");
            text_price.className = "price";
            text_price.innerHTML = element.price;
            total = total + Number(element.price) * Number(element.quantity);

            let text_shadesno = document.createElement("p");
            text_shadesno.className = "shadesno";
            text_shadesno.innerHTML = " 25 Shades";

            let cart_funct = document.createElement("div");
            cart_funct.className = "cart_functions";

            let quantity_add = document.createElement("div");
            quantity_add.className = "quantity_adder";
            quantity_add.onclick = function () {

            }

            let qa_btn = document.createElement("button");
            qa_btn.className = "dec_btn";
            qa_btn.innerHTML = "-";
            qa_btn.onclick = function () {
                element.quantity--;
                updatett(element.quantity, element.id)
                qa_input.innerText = element.quantity;
                total = Number(element.price) * Number(element.quantity);
                udateTotal(total)
            }

            let qa_input = document.createElement("p");
            qa_input.innerText = element.quantity;

            let qa_btn2 = document.createElement("button");
            qa_btn2.className = "inc_btn";
            qa_btn2.innerHTML = "+";
            qa_btn2.onclick = function () {
                element.quantity++;
                updatett(element.quantity, element.id)
                qa_input.innerText = element.quantity;
                total = Number(total) + Number(element.price) * 1;
                console.log(total)
                udateTotal(total)
            }

            quantity_add.append(qa_btn, qa_input, qa_btn2);

            let del_button = document.createElement("div");
            del_button.className = "del_btn";

            let del_button_b = document.createElement("button");

            del_button_b.onclick = function () {
                removeCart(element.id);
                divwcart.innerHTML = ""
                document.querySelector(".ptotal").innerHTML = "₹0";
                document.querySelector(".sum_total").innerHTML = "₹0";

            };
            let del_icon = document.createElement("i");
            del_icon.className = "far fa-trash-alt";

            del_button_b.append(del_icon);
            del_button.append(del_button_b);

            cart_funct.append(quantity_add, del_button);
            divwcart_text.append(text_name, text_price, text_shadesno, cart_funct);

            divwcart.append(divwcart_image, divwcart_text);

            cart_items.append(divwcart);
            console.log(cart_items);
            // count++;
        }
        display();
    });
    total = total.toString();
    tot = "₹" + total;

    document.querySelector(".ptotal").innerHTML = null;
    document.querySelector(".sum_total").innerHTML = null;
    document.querySelector(".ptotal").innerHTML = tot;
    document.querySelector(".sum_total").innerHTML = tot;

    console.log(total);
}
function udateTotal(total) {
    console.log(total)
    total = total.toString();
    tot = "₹" + total;

    document.querySelector(".ptotal").innerHTML = null;
    document.querySelector(".sum_total").innerHTML = null;
    document.querySelector(".ptotal").innerHTML = tot;
    document.querySelector(".sum_total").innerHTML = tot;

    localStorage.setItem("total_details", JSON.stringify([]));

    // localStorage.getItem("total_details", JSON.stringify([]));

    let pay_details = JSON.parse(localStorage.getItem("total_details"));
    pay_details.push(total);

    localStorage.setItem("total_details", JSON.stringify(pay_details));
}
function removeCart(id) {

    console.log(id)
    let prod = JSON.parse(localStorage.getItem("bag"));



    var newp = prod.filter((ele) => {
        console.log(ele)
        return ele.id != id;

    })
    console.log(newp)


    localStorage.setItem("bag", JSON.stringify(newp));



}

function updatett(q, id) {


    let product = JSON.parse(localStorage.getItem("bag"))
    product.forEach((element) => {
        if (element.id == id) {
            element.quantity = q;

        }
    })
    localStorage.setItem("bag", JSON.stringify(product));

}


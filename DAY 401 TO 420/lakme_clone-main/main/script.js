// adding eventlistner to the ham icon

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




let wishPop = document.getElementById("wishlistpop");
wishPop.addEventListener("click", redirect);

function redirect() {
    window.location.href = "../wishlist/wishlist.html";
}

var wish_fn = document.querySelector(".wishlist_ic");

wish_fn.addEventListener("click", wishlist);

function wishlist() {
    if (wish_fn.style.background === "red") {
        wish_fn.style.background = "white";
        // return;

        let prod = JSON.parse(localStorage.getItem("wishlist"));
        console.log(prod);
        prod.pop();
        localStorage.setItem("wishlist", JSON.stringify(prod));

        return;
    } else {
        wish_fn.style.background = "red";
    }

    console.log("hi");
    let list = {};

    list.name = document.querySelector(".name").innerHTML;
    list.price = document.querySelector(".price").innerHTML;
    list.image = document.querySelector(".productimg").src;
    if (localStorage.getItem("wishlist") === null) {
        localStorage.setItem("wishlist", JSON.stringify([]));
    }

    let prod = JSON.parse(localStorage.getItem("wishlist"));
    prod.push(list);
    console.log(prod);

    localStorage.setItem("wishlist", JSON.stringify(prod));
}

// console.log(count);

let user = document.getElementById("user");
user.addEventListener("click", user_check);

function user_check() {
    window.location.href = "../lakmeuser/lakmeuser.html";
}

let checkout = document.querySelector(".checkout");
checkout.addEventListener("click", go_check);

function go_check() {
    localStorage.setItem("total_details", JSON.stringify([]));

    let pay_details = JSON.parse(localStorage.getItem("total_details"));
    pay_details.push(total);

    localStorage.setItem("total_details", JSON.stringify(pay_details));

    window.location.href = "../checkout/checkout.html";
}








var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



var left = 1;
var right = 4;

function show() {
    for (i = left; i <= right; i++) {
        document.getElementById("c" + i).style.display = "inline-block"
    }
}

function moveLeft() {
    if (left <= 4 && right <= 8) {
        document.getElementById("c" + left).style.display = "none";
        left += 1;
        right += 1;
        for (i = left; i <= right; i++) {
            document.getElementById("c" + i).style.display = "inline-block"
        }

    } else {
        return;
    }
}

function moveRight() {
    if (left >= 1 && right >= 5) {
        document.getElementById("c" + right).style.display = "none";
        left -= 1;
        right -= 1;
        for (i = left; i <= right; i++) {
            document.getElementById("c" + i).style.display = "inline-block"
        }
    } else {
        return;
    }
}







var btn = document.getElementsByClassName("arrow");
var div = document.getElementsByTagName("div");
var l = 0;
// btn[0].style.visibility = 'hidden';
btn[1].onclick = function () {
    l++;
    for (var i of div) {
        if (l == 0) {
            i.style.left = "-100%";
        }
        if (l == 1) {
            i.style.left == "-100%";
        }
        if (l == 2) {
            i.style.left = "-100%";
        }

        if (l >= 2) {
            btn[0].style.visibility = "visible";
            btn[1].style.visibility = "hidden";
            l = 2;
        }
    }
};

btn[0].onclick = () => {
    l--;
    for (var i of div) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left == "-740px";
        }
        if (l == 2) {
            i.style.left = "-1480px";
        }

        if (l <= 0) {
            btn[0].style.visibility = "hidden";
            btn[1].style.visibility = "visible";
            l = 0;
        }
    }
};




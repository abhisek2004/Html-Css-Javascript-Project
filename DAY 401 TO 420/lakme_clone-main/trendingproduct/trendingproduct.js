// <button class="viewshades">VIEW SHADES</button>

var data = [
  {
    image: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29158_H2_8901030857867_300x.jpg?v=1630501152',
    newtag: 'NEW',
    id: 1,
    name: 'LAKME LIMITED EDITION LIP COLORS',
    price: ' 800',
    shades: '25 Shades',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29113_H1-8901030851667_300x.jpg?v=1630492665',
    newtag: 'NEW',
    name: 'LAKME LIMITED EDITION LIP COLORS',
    id: 2,
    price: ' 200',
    shades: '25 Shades',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29036_H1_8901030837005_300x.jpg?v=1623388003',
    newtag: 'NEW',
    name: 'LAKME LIMITED EDITION LIP COLORS',
    id: 3,
    price: ' 500',
    shades: '25 Shades',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24990_H2-8901030817496_300x.jpg?v=1620115073',
    newtag: 'NEW',
    name: 'LAKME LIMITED EDITION LIP COLORS',
    id: 4,
    price: ' 3700',
    shades: '25 Shades',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/2_1_300x.jpg?v=1618213425',
    newtag: 'NEW',
    name: 'LAKME LIMITED EDITION LIP COLORS',
    id: 4,
    price: ' 200',
    shades: '25 Shades',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1_tropical-beach---red-boots_300x.jpg?v=1615869721',
    newtag: 'NEW',
    name: 'LAKME LIMITED EDITION LIP COLORS',
    id: 5,
    price: ' 1100',
    shades: '25 Shades',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/2-fop-smokin-glam_1_300x.jpg?v=1617283284',
    newtag: 'NEW',
    name: 'LAKME LIMITED EDITION LIP COLORS',
    id: 6,
    price: ' 11100',
    shades: '25 Shades',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24704_H-8901030776533_300x.jpg?v=1612938317',
    newtag: 'NEW',
    name: 'LAKME LIMITED EDITION LIP COLORS',
    id: 7,
    price: ' 10',
    shades: '25 Shades',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1.27308_H-8901030781551_d3bb1014-49d6-41e9-8921-f68d7d9dbf2a_300x.jpg?v=1600872071',
    newtag: 'NEW',
    name: 'LAKME LIMITED EDITION LIP COLORS',
    id: 8,
    price: ' 670',
    shades: '25 Shades',
  },
];
let parent = document.getElementById ('productdetails');

function showProducts (d) {
  parent.innerHTML = null;
  data.forEach (function (product) {
    let div = document.createElement ('div');
    div.className = 'fade';
    var icon = document.createElement ('i');
    icon.className = 'far fa-heart wishlist';

    icon.onclick = function () {
      addiconproduct (product);
      icon.style.background = 'red';
    };

    let img = document.createElement ('img');

    img.src = product.image;
    // img.style.height = "300px"
    let product_newtag = document.createElement ('p');
    product_newtag.className = 'newtag';

    product_newtag.textContent = product.newtag;

    let product_name = document.createElement ('p');
    product_name.textContent = product.name;
    product_name.className = 'productname';

    let product_price = document.createElement ('p');
    product_price.textContent = '₹' + product.price;

    let product_shade = document.createElement ('p');
    product_shade.textContent = product.shades;
    product_shade.style.fontSize = '13px';

    let product_btn = document.createElement ('button');
    product_btn.textContent = 'VIEW SHADES';
    product_btn.className = 'productbtn';

    div.append (
      icon,
      img,
      product_newtag,
      product_name,
      product_price,
      product_shade,
      product_btn
    );

    parent.append (div);
  });
}
showProducts ();

function lowtohigh () {
  let arr = data.sort (function (a, b) {
    return a.price - b.price;
  });

  showProducts (arr);
}

function hightolow () {
  let arr = data.sort (function (a, b) {
    return b.price - a.price;
  });

  showProducts (arr);
}

if (localStorage.getItem ('wishlist') === null) {
  localStorage.setItem ('wishlist', JSON.stringify ([]));
}

function addiconproduct (p) {
  let products_cart = JSON.parse (localStorage.getItem ('wishlist'));

  products_cart.push (p);

  localStorage.setItem ('wishlist', JSON.stringify (products_cart));
}

let hamburger = document.getElementById ('hamburger');

let opens = document.getElementById ('openM');
opens.addEventListener ('click', openn);

function openn () {
  hamburger.style.left = '0';
}

let closes = document.getElementById ('closeM');
closes.addEventListener ('click', closee);

function closee () {
  hamburger.style.left = '-900px';
}

let cart_btn = document.getElementById ('cart_open');
cart_btn.addEventListener ('click', showCart);

let cart = document.getElementById ('cart_page');

function showCart () {
  cart.style.right = '0';
}

let cartClose_btn = document.getElementById ('closeCart');
cartClose_btn.addEventListener ('click', closeCart);

function closeCart () {
  cart.style.right = '-1000px';
}

let search_btn = document.getElementById ('searchi');
search_btn.addEventListener ('click', searchdo);

let searchbar = document.getElementById ('searchBar');

let flag = false;

function searchdo () {
  console.log ('hi');
  if (flag == false) {
    searchbar.style.left = '0px';
    flag = true;
  } else {
    searchbar.style.left = '-10000px';
    flag = false;
  }
}

let cart_items = document.querySelector ('.all_cart_items ');
console.log (cart_items, 'cart_items');
let bag_items = JSON.parse (localStorage.getItem ('bag'));
console.log (bag_items, 'cart_items');

var total = 0;
add_to_bag ();

function add_to_bag () {
  if (bag_items === [] || bag_items === null) {
    let empty_bag = document.createElement ('div');
    let h1 = document.createElement ('h1');
    h1.innerHTML = 'Bag is empty';
    empty_bag.append (h1);
    cart_items.append (empty_bag);
    return;
  }

  bag_items.forEach (element => {
    function display () {
      let divwcart = document.createElement ('div');
      divwcart.className = 'c_items';

      let divwcart_image = document.createElement ('div');
      divwcart_image.className = 'c_image';

      let divwcart_image_img = document.createElement ('img');
      divwcart_image_img.src = element.image;

      divwcart_image.append (divwcart_image_img);

      let divwcart_text = document.createElement ('div');
      divwcart_text.className = 'c_text';

      let text_name = document.createElement ('p');
      text_name.className = 'name';
      text_name.innerHTML = element.name;

      let text_price = document.createElement ('p');
      text_price.className = 'price';
      text_price.innerHTML = element.price;
      total = total + Number (element.price) * Number (element.quantity);

      let text_shadesno = document.createElement ('p');
      text_shadesno.className = 'shadesno';
      text_shadesno.innerHTML = ' 25 Shades';

      let cart_funct = document.createElement ('div');
      cart_funct.className = 'cart_functions';

      let quantity_add = document.createElement ('div');
      quantity_add.className = 'quantity_adder';
      quantity_add.onclick = function () {};

      let qa_btn = document.createElement ('button');
      qa_btn.className = 'dec_btn';
      qa_btn.innerHTML = '-';
      qa_btn.onclick = function () {
        element.quantity--;
        updatett (element.quantity, element.id);
        qa_input.innerText = element.quantity;
        total = Number (element.price) * Number (element.quantity);
        udateTotal (total);
      };

      let qa_input = document.createElement ('p');
      qa_input.innerText = element.quantity;

      let qa_btn2 = document.createElement ('button');
      qa_btn2.className = 'inc_btn';
      qa_btn2.innerHTML = '+';
      qa_btn2.onclick = function () {
        element.quantity++;
        updatett (element.quantity, element.id);
        qa_input.innerText = element.quantity;
        total = Number (total) + Number (element.price) * 1;
        console.log (total);
        udateTotal (total);
      };

      quantity_add.append (qa_btn, qa_input, qa_btn2);

      let del_button = document.createElement ('div');
      del_button.className = 'del_btn';

      let del_button_b = document.createElement ('button');

      del_button_b.onclick = function () {
        removeCart (element.id);
        divwcart.innerHTML = '';
        document.querySelector ('.ptotal').innerHTML = '₹0';
        document.querySelector ('.sum_total').innerHTML = '₹0';
      };
      let del_icon = document.createElement ('i');
      del_icon.className = 'far fa-trash-alt';

      del_button_b.append (del_icon);
      del_button.append (del_button_b);

      cart_funct.append (quantity_add, del_button);
      divwcart_text.append (text_name, text_price, text_shadesno, cart_funct);

      divwcart.append (divwcart_image, divwcart_text);

      cart_items.append (divwcart);
      console.log (cart_items);
      // count++;
    }
    display ();
  });
  total = total.toString ();
  tot = '₹' + total;

  document.querySelector ('.ptotal').innerHTML = null;
  document.querySelector ('.sum_total').innerHTML = null;
  document.querySelector ('.ptotal').innerHTML = tot;
  document.querySelector ('.sum_total').innerHTML = tot;

  console.log (total);
}
function udateTotal (total) {
  console.log (total);
  total = total.toString ();
  tot = '₹' + total;

  document.querySelector ('.ptotal').innerHTML = null;
  document.querySelector ('.sum_total').innerHTML = null;
  document.querySelector ('.ptotal').innerHTML = tot;
  document.querySelector ('.sum_total').innerHTML = tot;

  localStorage.setItem ('total_details', JSON.stringify ([]));

  // localStorage.getItem("total_details", JSON.stringify([]));

  let pay_details = JSON.parse (localStorage.getItem ('total_details'));
  pay_details.push (total);

  localStorage.setItem ('total_details', JSON.stringify (pay_details));
}
function removeCart (id) {
  console.log (id);
  let prod = JSON.parse (localStorage.getItem ('bag'));

  var newp = prod.filter (ele => {
    console.log (ele);
    return ele.id != id;
  });
  console.log (newp);

  localStorage.setItem ('bag', JSON.stringify (newp));
}

function updatett (q, id) {
  let product = JSON.parse (localStorage.getItem ('bag'));
  product.forEach (element => {
    if (element.id == id) {
      element.quantity = q;
    }
  });
  localStorage.setItem ('bag', JSON.stringify (product));
}

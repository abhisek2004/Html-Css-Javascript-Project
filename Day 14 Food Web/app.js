// add date in the web page
let date = document.querySelector(".date");
let Time = document.querySelector(".time");
console.log(date);
console.log(Time);
const d = new Date();
day = d.getDay();
month = d.getMonth();
year = d.getFullYear();
T = d.toLocaleTimeString();
console.log(Time);
date.innerHTML = day + "/" + month + "/" + year;
Time.innerHTML = T;
// add baner  logic
let banner = document.querySelector(".banner");
let banner2 = document.querySelector(".banner2");
let rightarrow = document.querySelector(".rightarrow");
let leftarrow = document.querySelector(".leftarrow");
console.log(banner, rightarrow, leftarrow);

color = [
  "../fronted/image/1.jpg",
  "../fronted/image/2.jpg",
  "../fronted/image/3.jpg",
  "../fronted/image/4.jpg",
  "../fronted/image/5.jpg",
  "../fronted/image/6.jpg",
  "../fronted/image/7.jpg",
];
let index = 0;
rightarrow.addEventListener("click", function () {
  if (index < color.length) {
    banner.style.backgroundImage = `url(${color[index]})`;

    console.log(index);
    index++;
  }
});

leftarrow.addEventListener("click", function () {
  if (index < color.length) {
    // console.log(color.length);

    console.log(index);
    banner.style.backgroundImage = `url(${color[index]})`;
  }
});

setInterval(() => {
  if (index < color.length) {
    // banner.style.backgroundColor = color[index];
    banner.style.backgroundImage = `url(${color[index]})`;

    index++;
  } else {
    index = 0;
    // console.log(color[index]);
  }
}, 4000);

// food card by api

let container = document.querySelector(".card-contaner");
let cardHTML = "";
let alldata = [];
async function logMovies() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  );
  const data = await response.json();

  console.log(data.meals);

  for (let i = 0; i < data.meals.length; i++) {
    cardHTML += `<div class="card">
      <img src="${data.meals[i].strMealThumb}" />
      <div class="buttom">
        <div class="rate">
          <div class="price-name">
            <p>price:${data.meals[i].idMeal - "52400"}/-</p>
            <p>${data.meals[i].strMeal}</p>
          </div>
          <div>
            <p>|⭐4.6</p>
            <p>|89 reviews</p>
          </div>
        </div>
        <div class="order-addtocart">
          <button>Order now</button>
          <button>Add to cart</button>
        </div>
      </div>
    </div>`;
  }
  container.innerHTML = cardHTML;
}
// logMovies();

// for (let i = 0; i < color.length; i++) {
//   cardHTML += `<div class="card">
//     <img src="${color[i]}" />
//     <div class="buttom">
//       <div class="rate">
//         <div class="price-name">
//           <p>price:40/-</p>
//           <p>name</p>
//         </div>
//         <div>
//           <p>|⭐4.6</p>
//           <p>|89 reviews</p>
//         </div>
//       </div>
//       <div class="order-addtocart">
//         <button>Order now</button>
//         <button>Add to cart</button>
//       </div>
//     </div>
//   </div>`;
// }

// Now, after the loop, set the container's innerHTML to the concatenated cardHTML
logMovies();

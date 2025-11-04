const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {  
  const bubble = document.createElement("div");
  
  bubble.className = "bubble";
  bubble.style.left = `${x}px`;
  
  wrapper.appendChild(bubble);
  
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);

/* -- ⬇️⬇️ Multi-color version ⬇️⬇️ -- */

// const wrapper = document.getElementById("bubble-wrapper");

// let index = 0;

// /* -- Step 1️⃣: Create an "enum" of colors -- */

// const Red = {
//   One: "rgb(239, 83, 80)",
//   Two: "rgb(244, 67, 54)",
//   Three: "rgb(229, 57, 53)",
//   Four: "rgb(211, 47, 47)",
//   Five: "rgb(198, 40, 40)"
// }

// const Green = {
//   One: "rgb(102, 187, 106)",
//   Two: "rgb(76, 175, 80)",
//   Three: "rgb(67, 160, 71)",
//   Four: "rgb(56, 142, 60)",
//   Five: "rgb(46, 125, 50)"
// }

// const Blue = {
//   One: "rgb(66, 165, 245)",
//   Two: "rgb(33, 150, 243)",
//   Three: "rgb(30, 136, 229)",
//   Four: "rgb(25, 118, 210)",
//   Five: "rgb(21, 101, 192)"
// }

// const Color = Red;

// /* -- Step 2️⃣: Pick the order of colors -- */

// const colors = [
//   Color.One, 
//   Color.Two, 
//   Color.Three, 
//   Color.Four, 
//   Color.Five, 
//   Color.Four, 
//   Color.Three, 
//   Color.Two
// ];

// const animateBubble = x => {  
//   const bubble = document.createElement("div");
  
//   bubble.className = "bubble";
//   bubble.style.left = `${x}px`;
    
//   /* -- Step 3️⃣: Cycle through the colors using an index variable and the modulus (%) operator -- */
  
//   bubble.style.backgroundColor = colors[index++ % (colors.length - 1)];
  
//   wrapper.appendChild(bubble);
  
//   setTimeout(() => wrapper.removeChild(bubble), 2000);
// }

// window.onmousemove = e => animateBubble(e.clientX);
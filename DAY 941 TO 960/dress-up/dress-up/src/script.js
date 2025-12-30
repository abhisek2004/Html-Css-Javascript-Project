const shirtImg = document.getElementById("shirtImg");
const panstImg = document.getElementById("pantsImg");
const shoesImg = document.getElementById("shoesImg");
const targets = document.querySelectorAll("input[name='colors']");

let colorTarget = "shirt";
targets.forEach((target) => {
  target.addEventListener("change", () => {
    colorTarget = target.value;
  });
});

// Sliders
var sliderPicker = new iro.ColorPicker("#sliderPicker", {
  width: 250,
  color: "{h: 35, s: 55, l: 91}",
  borderWidth: 1,
  borderColor: "#ccc",
  layout: [
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "hue"
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "saturation"
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "value"
      }
    }
  ]
});

sliderPicker.on("color:change", (color) => {
  const hexString = color.hsl;
  let rotateH = 0;
  let rotateS = 50;
  let rotateL = 100;
  let cssString;
  switch (colorTarget) {
    case "shirt":
      rotateH = color.hsl.h - 35;
      rotateS = 100 + (color.hsl.s - 55);
      rotateL = 100 + (color.hsl.l - 91);
      cssString = `hue-rotate(${rotateH}deg) saturate(${rotateS}%) brightness(${rotateL}%)`;
      shirtImg.style.setProperty("filter", cssString);
      break;
    case "pants":
      rotateH = color.hsl.h - 218;
      rotateS = 100 + (color.hsl.s - 37);
      rotateL = 100 + (color.hsl.l - 64);
      cssString = `hue-rotate(${rotateH}deg) saturate(${rotateS}%) brightness(${rotateL}%)`;
      pantsImg.style.setProperty("filter", cssString);
      break;
    case "shoes":
      rotateH = color.hsl.h - 33;
      rotateS = 100 + (color.hsl.s - 13);
      rotateL = 100 + (color.hsl.l - 72);
      cssString = `hue-rotate(${rotateH}deg) saturate(${rotateS}%) brightness(${rotateL}%)`;
      shoesImg.style.setProperty("filter", cssString);
      break;
  }
});

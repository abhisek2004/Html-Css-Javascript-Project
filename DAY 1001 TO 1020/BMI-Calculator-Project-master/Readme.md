# BMI Calculator Project

## Overview

This is a simple yet powerful **BMI (Body Mass Index)** calculator built using JavaScript. It not only calculates BMI based on **height** and **weight** but also provides additional features such as **category colorization**, **height conversion** from centimeters to meters and feet to meters, and **weight conversion** from pounds to kilograms. Additionally, it includes options for **specifying gender** (male or female) and age input.

## Features

- **BMI Calculation:** Input your height and weight, and the calculator will instantly provide your BMI.
- **Category Colorization:** The BMI result is color-coded based on categories such as Underweight, Normal Weight, Overweight, and Obesity.
- **Height Conversion:** Easily switch between centimeters, meters, and feet for height input.
- **Weight Conversion:** Choose your preferred unit for weight - pounds or kilograms.
- **Gender Selection:** Specify your gender as either male or female for more accurate BMI categorization.
- **Age Input:** Include your age to enhance the precision of BMI calculation.

## Note:

This BMI calculator is intended for learning purposes only and should not be considered a substitute for professional medical advice. Always consult with a healthcare professional for accurate health assessments.

## Screenshots

![App Screenshot](https://raw.githubusercontent.com/BCAPATHSHALA/BMI-Calculator-Project/master/BMI%20CALCULATOR%20JAVASCRIPT.png)

## HTML Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css" />
    <script src="./script.js" defer></script>
    <script
      src="https://kit.fontawesome.com/2360d5f79f.js"
      crossorigin="anonymous"
      defer
    ></script>
  </head>

  <body>
    <section class="main-section">
      <h1><i class="fa-solid fa-dumbbell"></i> BMI CALCULATOR</h1>
      <form>
        <div>
          <input
            type="number"
            min="0"
            max="1000"
            placeholder="Enter your age here"
            id="age"
          />
        </div>
        <div>
          <input type="text" placeholder="Enter your height" id="height" />
          <select id="heightOption">
            <option value="meter">meter</option>
            <option value="cm">cm</option>
            <option value="foot">foot</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Enter your weight" id="weight" />
          <select id="weightOption">
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
            <option value="pound">pound</option>
          </select>
        </div>
        <div class="gender">
          <span class="female"><i class="fa-solid fa-person-dress"></i></span>
          <input
            id="female"
            type="radio"
            name="tip"
            value="female"
            checked="checked"
          />
          <span><i class="fa-solid fa-person"></i></span>
          <input id="male" type="radio" name="tip" value="male" />
        </div>
        <div class="buttons">
          <button type="submit">Calculate</button>
          <button type="reset" id="reset">Reset</button>
        </div>
        <div class="output">
          <p>BMI: <span></span></p>
          <p>Category: <span></span></p>
        </div>
      </form>
    </section>
  </body>
</html>
```

## CSS Code

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Remove Arrows/Spinners
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.main-section {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  box-shadow: #00000029 0px 1px 4px;
  background-color: #184e77;
}

.main-section h1 {
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: #293241;
  color: #dcd7d7;
  border-radius: 5px 5px 0 0;
}

.main-section form {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  gap: 10px;
}

.main-section form > div {
  position: relative;
  display: flex;
  width: 100%;
  box-shadow: #00000029 0px 1px 4px;
  border-radius: 5px;
}

.main-section form > div input {
  display: inline-block;
  width: 80%;
  height: 60px;
  outline: none;
  font-size: 1rem;
  padding-left: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
}

.main-section form > div #age {
  width: 100%;
  border-radius: 5px;
}

.main-section form > div select {
  border-left: none;
  display: inline-block;
  width: 20%;
  height: 60px;
  border: none;
  border-radius: 0 5px 5px 0;
  font-size: small;
  text-transform: uppercase;
  font-weight: 400;
  padding: 10px;
  outline: none;
  background-color: #52b69a;
  color: #fff;
}

.main-section form .gender {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  box-shadow: none;
  width: 80%;
  align-self: center;
}
.main-section form .gender > span {
  display: inline-block;
  font-size: 4rem;
  color: #f9c74f;
}

.main-section form .gender .female {
  color: #f07167;
}

.main-section form .gender > input {
  width: 40px;
}

.main-section form .buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: none;
  padding: 20px;
}
.main-section form .buttons button {
  height: 60px;
  width: 140px;
  align-self: center;
  padding: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #293241;
  color: #fff;
  font-weight: 800;
  letter-spacing: 1px;
}
.main-section form .buttons #reset {
  background-color: #f07167;
  color: #001d3d;
}
.main-section .output {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #293241;
  padding: 10px;
  color: #fff;
  font-size: 1.3em;
  border: none;
  box-shadow: #00000029 0px 10px 40px;
  border-radius: 0 0 5px 5px;
}

/* These Class Added When the Event Is Listend By the Calculate Button */
.main-section .Underweight {
  background-color: #2a9d8f;
}
.main-section .Normal {
  background-color: #90be6d;
}
.main-section .Overweight {
  background-color: #f9c74f;
}
.main-section .Obese {
  background-color: #f94144;
}

/* Responsive Code For Small Device */
@media screen and (width <= 426px) {
  .main-section {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
  .main-section form > div input {
    width: 65%;
  }
  .main-section form > div select {
    width: 35%;
  }
}
```

## JavaScript Code

```javascript
const form = document.querySelector("form");
const output = document.querySelector(".output");

const get_height_in_meter_function = (inputValue, inputType) => {
  let meterValue = 0;
  switch (inputType) {
    case "foot":
      meterValue = (inputValue / 3.281).toPrecision(3);
      break;
    case "cm":
      meterValue = (inputValue / 100).toPrecision(3);
      break;
    case "meter":
      meterValue = inputValue.toPrecision(3);
      break;
  }
  return meterValue;
};

const get_weight_in_kg_function = (inputValue, inputType) => {
  let kgValue = 0;
  switch (inputType) {
    case "lbs":
      kgValue = (inputValue / 2.205).toPrecision(3);
      break;
    case "pound":
      kgValue = (inputValue / 2.205).toPrecision(3);
      break;
    case "kg":
      kgValue = inputValue.toPrecision(3);
      break;
  }
  return kgValue;
};

const get_bmi_result = (
  height,
  heightType,
  weight,
  weightType,
  gender,
  age
) => {
  const heightInMeter = get_height_in_meter_function(height, heightType);
  const weightInKg = get_weight_in_kg_function(weight, weightType);
  const BMI = (weightInKg / (heightInMeter * heightInMeter)).toFixed(2);
  return BMI;
};

function setCategoryColor(category) {
  switch (category) {
    case "Underweight":
      output.classList.add("Underweight");
      output.classList.remove("Normal");
      output.classList.remove("Overweight");
      output.classList.remove("Obese");
      break;
    case "Overweight":
      output.classList.add("Overweight");
      output.classList.remove("Normal");
      output.classList.remove("Underweight");
      output.classList.remove("Obese");
      break;
    case "Normal":
      output.classList.add("Normal");
      output.classList.remove("Underweight");
      output.classList.remove("Overweight");
      output.classList.remove("Obese");
      break;
    case "Obese":
      output.classList.add("Obese");
      output.classList.remove("Overweight");
      output.classList.remove("Normal");
      output.classList.remove("Underweight");
      break;
  }
}

const get_bmi_category = (BMI) => {
  let category = "";
  if (BMI < 18.5) {
    category = "Underweight";
    setCategoryColor(category);
  } else if (BMI >= 18.5 && BMI < 25) {
    category = "Normal";
    setCategoryColor(category);
  } else if (BMI >= 25 && BMI < 29.9) {
    category = "Overweight";
    setCategoryColor(category);
  } else if (BMI >= 30) {
    category = "Obese";
    setCategoryColor(category);
  }
  return category;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const age = parseInt(document.querySelector("#age").value);

  const height = Number(document.querySelector("#height").value);
  const heightOption = document.querySelector("#heightOption").value;

  const weight = Number(document.querySelector("#weight").value);
  const weightOption = document.querySelector("#weightOption").value;

  const female = document.querySelector("#female").value;
  // const male = document.querySelector("#male").value;

  if (
    height < 0 ||
    isNaN(height) ||
    height === "" ||
    weight < 0 ||
    isNaN(weight) ||
    weight === "" ||
    age < 0 ||
    isNaN(age) ||
    age === ""
  ) {
    output.innerHTML = `<p>Please, Fill Valid Data</p>`;
  } else {
    const result = get_bmi_result(
      height,
      heightOption,
      weight,
      weightOption,
      female,
      age
    );
    const category = get_bmi_category(result);
    output.innerHTML = `
    <p>BMI: <span>${result}</span></p>
    <p>Category: <span>${category}</span></p>`;
  }
});
```

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

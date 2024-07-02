function convert() {
    var celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        alert("Please enter a value in Celsius");
        return;
    }

    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerText = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
}

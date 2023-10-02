var celsius: number = 22;

function celsiusToFahrenheit(celsius: number) {
    var fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}

console.log(celsiusToFahrenheit(celsius))
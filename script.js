
const getTemp = function () {
    const cityName = document.getElementById("city").value;
    console.log(cityName)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b5e7e0ab868ced8e430fa74b254fcb86`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            document.getElementById("result").innerHTML = `${Math.round(myJson.main.temp)} °C`
        })


}
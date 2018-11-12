// par défaut dans React
//import "isomorphic-fetch"

const getTemp = function () {
    const cityName = document.getElementById("city").value;
    console.log(cityName)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b5e7e0ab868ced8e430fa74b254fcb86`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            //permet d'avoir tout le json
            //console.log(myJson);
            //pour n'avoir que la température
            //console.log(myJson.main.temp)
            //on peut utiliser Math.ceil ou autre en fonction de l'arrondi qu'on souhaite
            //document.getElementById("result").innerHTML = Math.round(myJson.main.temp) + " °C"
            //pour ecrire la même chose en ES6:
            //toutes les chaines de caractère entre backtick avec accolades
            document.getElementById("result").innerHTML = `${Math.round(myJson.main.temp)} °C`
        })

    //document.getElementById("result").innerHTML = cityName

}
fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=9c85576a645c250809de8ffb8202fcd6")
.then((response) => {
console.log(response)
return response.json()
}).then((data) => {


console.log(data.weather[0].main)
console.log(data.main.temp)
console.log(data.name)

// shows city
const nameOfCity = data.name

// temperature in stockholm rounded to one decimal
const stockholmTemp = data.main.temp
const stockholmTempRounded = Math.round(stockholmTemp * 10) / 10;

//background color depending on temperature
if (stockholmTemp > 10) {
document.getElementById("container").style.background = "yellow"
}else if (stockholmTemp < 10){
  document.getElementById("container").style.background = "blue"
}


// shows todays weather
const weatherToday =  data.weather[0].main



// weather icon shows when Clear
const imgSun = document.createElement("img") // namn i div
imgSun.src =  "icon.png"

   if (weatherToday === "Clear"){
     document.getElementById("img").appendChild(imgSun)
   }


document.getElementById("city").innerHTML = nameOfCity
document.getElementById("temperature").innerHTML = stockholmTempRounded
document.getElementById("weather").innerHTML = weatherToday



})
